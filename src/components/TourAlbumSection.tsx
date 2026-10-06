import React, { useState } from 'react';
import { Camera, MapPin, Users, ArrowRight } from 'lucide-react';
import { TourPhoto } from '../types';

interface TourAlbumSectionProps {
  photos: TourPhoto[];
  onOpenPhotoModal: (index: number) => void;
}

export const TourAlbumSection: React.FC<TourAlbumSectionProps> = ({
  photos,
  onOpenPhotoModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Water & Safaris', 'Highlands & Rail', 'Cultural & Village', 'VIP Arrivals'];

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === selectedCategory);

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
            Authentic moments from our private guided expeditions with Ocean Pearl Travels — from misty highland tea estates and historic railways to tranquil river safaris and VIP airport receptions.
          </p>

          <div className="w-16 h-[2px] bg-[#E5A83B] mx-auto mt-6 rounded-full" />
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

            return (
              <div
                key={photo.id}
                onClick={() => onOpenPhotoModal(photoIndex)}
                className="group bg-[#0A1A2A] hover:bg-[#0D2237] border border-slate-800/90 hover:border-[#E5A83B]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Photo Image Container */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2A] via-transparent to-transparent opacity-75 pointer-events-none" />

                  {/* Category Realm Badge */}
                  <div className="absolute top-3 left-3 bg-[#0C2340]/90 backdrop-blur-xs text-[#E5A83B] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md font-semibold border border-white/20">
                    {photo.category}
                  </div>

                  {/* Location Chip */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      <MapPin className="w-3.5 h-3.5 text-[#106A7C]" />
                      <span className="truncate max-w-[200px] font-medium">{photo.location}</span>
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
                      <span className="truncate max-w-[180px]">{photo.guests}</span>
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
