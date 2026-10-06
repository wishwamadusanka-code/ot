/**
 * IndexedDB storage for original client-uploaded WhatsApp tour photos
 */

const DB_NAME = 'OceanPearlOriginalPhotosDB';
const DB_VERSION = 1;
const STORE_NAME = 'original_tour_photos';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function savePhoto(id: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put({ id, dataUrl, updatedAt: Date.now() });

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error('Failed to save original photo to IndexedDB:', err);
    // Fallback to localStorage
    try {
      localStorage.setItem(`op_photo_${id}`, dataUrl);
    } catch (e) {
      console.warn('LocalStorage quota exceeded', e);
    }
  }
}

export async function getStoredPhotos(): Promise<Record<string, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        const results = request.result || [];
        const photoMap: Record<string, string> = {};
        for (const item of results) {
          if (item.id && item.dataUrl) {
            photoMap[item.id] = item.dataUrl;
          }
        }
        resolve(photoMap);
      };

      request.onerror = () => {
        // Fallback to localStorage
        resolve(getLocalStorageFallback());
      };
    });
  } catch {
    return getLocalStorageFallback();
  }
}

function getLocalStorageFallback(): Record<string, string> {
  const photoMap: Record<string, string> = {};
  if (typeof window === 'undefined') return photoMap;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('op_photo_')) {
      const id = key.replace('op_photo_', '');
      const val = localStorage.getItem(key);
      if (val) photoMap[id] = val;
    }
  }
  return photoMap;
}

export async function deletePhoto(photoId: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(photoId);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch {
    localStorage.removeItem(`op_photo_${photoId}`);
  }
}

const ORDERED_PHOTO_IDS = [
  'negombo-lagoon-tour',
  'nanu-oya-railway-station',
  'bandaranaike-airport-welcome',
  'sigiriya-village-safari',
  'sigiriya-village-boat-safari',
  'labu-kalle-tea-factory',
  'tuk-tuk-island-explorer',
  'airport-chauffeur-welcome',
  'madu-ganga-mangrove-boat',
  'roadside-banana-market',
  'villa-hospitality-checkin'
];

/**
 * Match a WhatsApp photo file name or sequence to the corresponding tour photo slot
 */
export function findPhotoSlotForFile(fileName: string, index: number): string {
  const name = fileName.toLowerCase();

  if (name.includes('5+5+56') || name.includes('coconut') || name.includes('negombo')) {
    return 'negombo-lagoon-tour';
  }
  if (name.includes('1646') || name.includes('naanu') || name.includes('nanu') || name.includes('train')) {
    return 'nanu-oya-railway-station';
  }
  if (name.includes('26464') || name.includes('giulia') || name.includes('frugoni')) {
    return 'bandaranaike-airport-welcome';
  }
  if (name.includes('++5') || name.includes('buggy') || name.includes('cart')) {
    return 'sigiriya-village-safari';
  }
  if (name.includes('22646') || name.includes('boat safari') || name.includes('lake')) {
    return 'sigiriya-village-boat-safari';
  }
  if (name.includes('6464') || name.includes('labu') || name.includes('kalle') || name.includes('labookellie') || name.includes('tea')) {
    return 'labu-kalle-tea-factory';
  }
  if (name.includes('641') || name.includes('939') || name.includes('tuk')) {
    return 'tuk-tuk-island-explorer';
  }
  if (name.includes('949') || name.includes('kaiser')) {
    return 'airport-chauffeur-welcome';
  }
  if (name.includes('5.jpeg') || name.includes('mangrove') || name.includes('madu')) {
    return 'madu-ganga-mangrove-boat';
  }
  if (name.includes('10 am1') || name.includes('10.31.10 am1') || name.includes('banana')) {
    return 'roadside-banana-market';
  }
  if (name.includes('10 am.') || name.includes('10.31.10 am.') || name.includes('villa')) {
    return 'villa-hospitality-checkin';
  }

  // Fallback to sequential slot
  if (index >= 0 && index < ORDERED_PHOTO_IDS.length) {
    return ORDERED_PHOTO_IDS[index];
  }
  return ORDERED_PHOTO_IDS[0];
}

export async function processAndSaveFiles(files: FileList | File[]): Promise<Record<string, string>> {
  const fileArray = Array.from(files);
  const updatedMap: Record<string, string> = {};

  const readPromises = fileArray.map((file, idx) => {
    return new Promise<void>((resolve) => {
      const photoId = findPhotoSlotForFile(file.name, idx);
      const reader = new FileReader();

      reader.onload = async () => {
        const dataUrl = reader.result as string;
        await savePhoto(photoId, dataUrl);
        updatedMap[photoId] = dataUrl;
        resolve();
      };

      reader.onerror = () => resolve();
      reader.readAsDataURL(file);
    });
  });

  await Promise.all(readPromises);
  return updatedMap;
}
