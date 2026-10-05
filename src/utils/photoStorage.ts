import { ORIGINAL_TOUR_PHOTOS } from '../data/tourPhotosData';

const DB_NAME = 'ocean_pearl_photos_db';
const STORE_NAME = 'tour_photos';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in this environment'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Retrieve all photos stored in IndexedDB (keyed by photoId)
 */
export async function getStoredPhotos(): Promise<Record<string, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.openCursor();
      const results: Record<string, string> = {};

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
        if (cursor) {
          results[cursor.key as string] = cursor.value as string;
          cursor.continue();
        } else {
          resolve(results);
        }
      };
      request.onerror = () => resolve({});
    });
  } catch (err) {
    console.warn('Could not read photos from IndexedDB:', err);
    return {};
  }
}

/**
 * Save a single photo dataURL for a given photoId
 */
export async function savePhoto(photoId: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(dataUrl, photoId);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error('Failed to save photo:', err);
  }
}

/**
 * Delete a photo by ID
 */
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
  } catch (err) {
    console.error('Failed to delete photo:', err);
  }
}

/**
 * Helper to match uploaded file names to our 11 predefined tour photo IDs
 */
function findBestPhotoIdMatch(fileName: string, currentIndex: number): string {
  const cleanName = fileName.toLowerCase();

  // Try matching distinctive substrings from the original WhatsApp filenames
  if (cleanName.includes('5+5+56') || cleanName.includes('coconut') || cleanName.includes('negombo')) return 'negombo-lagoon-tour';
  if (cleanName.includes('1646') || cleanName.includes('nanu') || cleanName.includes('naanu') || cleanName.includes('train')) return 'nanu-oya-railway-station';
  if (cleanName.includes('26464') || cleanName.includes('airport') || cleanName.includes('bandaranayake') || cleanName.includes('bandaranaike')) return 'bandaranaike-airport-welcome';
  if (cleanName.includes('++5') || cleanName.includes('cart') || cleanName.includes('buggy') || cleanName.includes('village safari')) return 'sigiriya-village-safari';
  if (cleanName.includes('22646') || cleanName.includes('boat safari') || cleanName.includes('lake')) return 'sigiriya-village-boat-safari';
  if (cleanName.includes('6464') || cleanName.includes('labu') || cleanName.includes('kalle') || cleanName.includes('labookellie') || cleanName.includes('tea')) return 'labu-kalle-tea-factory';
  if (cleanName.includes('641') || cleanName.includes('tuk') || cleanName.includes('939')) return 'tuk-tuk-island-explorer';
  if (cleanName.includes('949') || cleanName.includes('kaiser') || cleanName.includes('chauffeur')) return 'airport-chauffeur-welcome';
  if (cleanName.includes('5.jpeg') || cleanName.includes('mangrove') || cleanName.includes('madu')) return 'madu-ganga-mangrove-boat';
  if (cleanName.includes('10 am1') || cleanName.includes('banana') || cleanName.includes('fruit')) return 'roadside-banana-market';
  if (cleanName.includes('10 am.') || cleanName.includes('villa') || cleanName.includes('hotel')) return 'villa-hospitality-checkin';

  // Fallback to sequential slot
  if (currentIndex < ORIGINAL_TOUR_PHOTOS.length) {
    return ORIGINAL_TOUR_PHOTOS[currentIndex].id;
  }
  return ORIGINAL_TOUR_PHOTOS[0].id;
}

/**
 * Process multiple files uploaded at once and save to IndexedDB
 */
export async function saveMultiplePhotos(files: FileList | File[]): Promise<{
  savedCount: number;
  matchedPhotos: Record<string, string>;
}> {
  const fileArray = Array.from(files);
  const matchedPhotos: Record<string, string> = {};
  let savedCount = 0;

  for (let i = 0; i < fileArray.length; i++) {
    const file = fileArray[i];
    if (!file.type.startsWith('image/')) continue;

    const dataUrl = await readFileAsDataURL(file);
    const targetId = findBestPhotoIdMatch(file.name, i);

    await savePhoto(targetId, dataUrl);
    matchedPhotos[targetId] = dataUrl;
    savedCount++;
  }

  return { savedCount, matchedPhotos };
}

function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
