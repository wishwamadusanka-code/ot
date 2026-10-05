import React, { useState, useRef } from 'react';
import { Camera, MapPin, Users, Calendar, ArrowRight, Upload, CheckCircle2, Sparkles } from 'lucide-react';
import { TourPhoto } from '../types';

interface TourAlbumSectionProps {
  photos: TourPhoto[];
  photoImages: Record<string, string>;
  onOpenPhotoModal: (index: number) => void;
  onUploadMultiple: (files: FileList) => Promise<void>;
  onUploadSingle: (photoId: string, file: File) => Promise<void>;
}

export const TourAlbumSection: React.FC<TourAlbumSectionProps> = ({
  photos,
  photoImages,
  onOpenPhotoModal,
  onUploadMultiple,
  onUploadSingle
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const multiFileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['All', 'Water & Safaris', 'Highlands & Rail', 'Cultural & Village', 'VIP Arrivals'];

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === selectedCategory);

  const syncedCount = Object.keys(photoImages).length;

  const handleMultipleFilesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploading(true);
      try {
        await onUploadMultiple(e.target.files);
        setUploadMessage(`Successfully synced ${e.target.files.length} original photos!`);
        setTimeout(() => setUploadMessage(null), 5000);
      } catch (err) {
        console.error(err);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSingleFile = async (photoId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await onUploadSingle(photoId, e.target.files[0]);
    }
  };

  return (
    <section id="album" className="py-20 sm:py-28 bg-[#07131F] relative overflow-hidden border-t border-slate-800">
      
      {/* Ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#106A7C]/15 via-[#E5A83B]/5 to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A83B]/10 border border-[#E5A83B]/30 mb-4">
            <Camera className="w-3.5 h-3.5 text-[#E5A83B]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#E5A83B]">
              Real Expedition Archive
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-white font-medium leading-tight mb-4">
            Tour Photos Album
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Authentic moments from our private guided expeditions across Sri Lanka — from misty highland tea estates and historic railways to tranquil river safaris and VIP airport receptions.
          </p>

          <div className="w-16 h-[2px] bg-[#E5A83B] mx-auto mt-6 rounded-full" />
        </div>

        {/* Original Photos Sync Bar / Banner */}
        <div className="mb-10 bg-gradient-to-r from-[#0A1F33] via-[#0C243B] to-[#0A1F33] border border-[#C08A3E]/30 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#C08A3E]/20 border border-[#C08A3E]/50 flex items-center justify-center flex-shrink-0 text-[#C08A3E]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-white font-medium text-sm sm:text-base">
                  Original WhatsApp Tour Photos
                </h4>
                <span className="text-[10px] uppercase font-semibold bg-[#E5A83B]/20 text-[#E5A83B] px-2 py-0.5 rounded-md border border-[#E5A83B]/30">
                  {syncedCount} / {photos.length} Synced
                </span>
              </div>
              <p className="text-slate-300 text-xs mt-0.5">
                Drop or select your original 11 tour photos to display them in crystal-clear original resolution.
              </p>
              {uploadMessage && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{uploadMessage}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="file"
              multiple
              accept="image/*"
              ref={multiFileInputRef}
              className="hidden"
              onChange={handleMultipleFilesChange}
            />
            <button
              onClick={() => multiFileInputRef.current?.click()}
              disabled={isUploading}
              className="w-full md:w-auto bg-[#C08A3E] hover:bg-[#A8742A] text-white text-xs font-semibold tracking-wider uppercase px-5 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <Upload className="w-4 h-4" />
              <span>{isUploading ? 'Syncing...' : 'Sync Original Photos'}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {categories.map((cat) => {
            const count = cat === 'All' ? photos.length : photos.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#E5A83B] text-[#0C2340] font-semibold shadow-md shadow-[#E5A83B]/20 scale-105'
                    : 'bg-[#0B1A2A] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => {
            const photoIndex = photos.findIndex((p) => p.id === photo.id);
            const userImg = photoImages[photo.id];

            return (
              <div
                key={photo.id}
                onClick={() => onOpenPhotoModal(photoIndex)}
                className="group bg-[#0A1A2A] hover:bg-[#0D2237] border border-slate-800/90 hover:border-[#E5A83B]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Photo Image Container */}
                <div className="relative w-full h-60 sm:h-64 overflow-hidden bg-slate-900 flex items-center justify-center">
                  {userImg ? (
                    <img
                      src={userImg}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="p-6 text-center flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-[#0A1F33] to-[#06121E]">
                      <div className="w-12 h-12 rounded-full bg-[#0C2340] border border-[#E5A83B]/40 flex items-center justify-center mb-3 text-[#E5A83B]">
                        <Camera className="w-6 h-6" />
                      </div>
                      <span className="text-white text-xs font-semibold mb-1 line-clamp-1">
                        {photo.title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono mb-3">
                        {photo.originalFileName.slice(0, 30)}...
                      </span>
                      <label
                        onClick={(e) => e.stopPropagation()}
                        className="cursor-pointer bg-[#0D263E] hover:bg-[#123659] text-[#E5A83B] text-[10px] font-semibold px-3 py-1.5 rounded-lg border border-[#E5A83B]/30 flex items-center gap-1.5 transition-colors"
                      >
                        <Upload className="w-3 h-3" />
                        <span>Add Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleSingleFile(photo.id, e)}
                        />
                      </label>
                    </div>
                  )}

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2A] via-transparent to-transparent opacity-70 pointer-events-none" />

                  {/* Top Realm Badge */}
                  <div className="absolute top-3 left-3 bg-[#0C2340]/90 backdrop-blur-xs text-[#E5A83B] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md font-semibold border border-white/20">
                    {photo.category}
                  </div>

                  {/* Location Chip */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      <MapPin className="w-3.5 h-3.5 text-[#106A7C]" />
                      <span className="truncate max-w-[180px]">{photo.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Info Body */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-medium mb-2 group-hover:text-[#E5A83B] transition-colors leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-[13px] font-light leading-relaxed line-clamp-2">
                      {photo.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Users className="w-3.5 h-3.5 text-[#E5A83B]" />
                      <span className="truncate max-w-[150px]">{photo.guests}</span>
                    </div>
                    <span className="text-[#E5A83B] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium">
                      <span>View Story</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
