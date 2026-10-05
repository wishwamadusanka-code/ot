import React from 'react';
import { X, MapPin, Users, Calendar, ArrowLeft, ArrowRight, Compass, Sparkles, Upload } from 'lucide-react';
import { TourPhoto } from '../types';

interface TourAlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: TourPhoto[];
  currentPhotoIndex: number;
  onSelectIndex: (index: number) => void;
  photoImages: Record<string, string>;
  onUploadSingle: (photoId: string, file: File) => void;
  onPlanTrip: (tourTitle: string) => void;
}

export const TourAlbumModal: React.FC<TourAlbumModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentPhotoIndex,
  onSelectIndex,
  photoImages,
  onUploadSingle,
  onPlanTrip
}) => {
  if (!isOpen || photos.length === 0) return null;

  const current = photos[currentPhotoIndex] || photos[0];
  const currentImage = photoImages[current.id];

  const handlePrev = () => {
    onSelectIndex((currentPhotoIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    onSelectIndex((currentPhotoIndex + 1) % photos.length);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUploadSingle(current.id, e.target.files[0]);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="bg-[#081827] border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#0A1F33]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5A83B] animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E5A83B]">
              Original Tour Moment {currentPhotoIndex + 1} of {photos.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <label className="cursor-pointer bg-[#0D263E] hover:bg-[#123659] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 text-xs flex items-center gap-1.5 transition-colors">
              <Upload className="w-3.5 h-3.5 text-[#E5A83B]" />
              <span className="hidden sm:inline">Replace Photo</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleFileInput} />
            </label>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors"
              aria-label="Close photo modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-grow grid grid-cols-1 lg:grid-cols-12 bg-[#06121E]">
          
          {/* Main Photo Column */}
          <div className="lg:col-span-7 relative bg-black flex items-center justify-center min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden group">
            {currentImage ? (
              <img
                src={currentImage}
                alt={current.title}
                className="w-full h-full object-contain max-h-[600px]"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="p-8 text-center flex flex-col items-center justify-center max-w-sm">
                <div className="w-16 h-16 rounded-full bg-[#0C2340] border border-[#E5A83B]/40 flex items-center justify-center mb-4 text-[#E5A83B]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-white font-medium text-base mb-1">{current.title}</h4>
                <p className="text-slate-400 text-xs mb-4">
                  Original WhatsApp Photo: <br />
                  <code className="text-[#E5A83B] text-[11px] break-all">{current.originalFileName}</code>
                </p>
                <label className="cursor-pointer bg-[#C08A3E] hover:bg-[#A8742A] text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow-md">
                  <Upload className="w-4 h-4" />
                  Select Original File
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileInput} />
                </label>
              </div>
            )}

            {/* Prev / Next Floating Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#0C2340] text-white flex items-center justify-center border border-white/20 transition-all opacity-80 hover:opacity-100"
              aria-label="Previous photo"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#0C2340] text-white flex items-center justify-center border border-white/20 transition-all opacity-80 hover:opacity-100"
              aria-label="Next photo"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Badge overlay */}
            <div className="absolute top-4 left-4 bg-[#0C2340]/90 backdrop-blur-xs text-[#E5A83B] text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-slate-700">
              {current.badge}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#081827]">
            <div className="space-y-4">
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-[#E5A83B] font-semibold bg-[#E5A83B]/10 px-2.5 py-1 rounded-md border border-[#E5A83B]/20">
                  {current.category}
                </span>
              </div>

              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium leading-tight">
                {current.title}
              </h2>

              {/* Meta details */}
              <div className="grid grid-cols-1 gap-2 pt-2 pb-3 border-y border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#106A7C]" />
                  <span>{current.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E5A83B]" />
                  <span>{current.guests}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{current.date}</span>
                </div>
              </div>

              {/* Story Narrative */}
              <div>
                <h4 className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 mb-2">
                  Authentic Tour Story
                </h4>
                <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 mb-2">
                  Key Experience Moments
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {current.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onPlanTrip(current.title);
                }}
                className="flex-1 bg-[#C08A3E] hover:bg-[#A8742A] text-white text-xs font-semibold tracking-wider uppercase py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Experience This Journey</span>
              </button>
            </div>

          </div>

        </div>

        {/* Thumbnail Carousel Bar */}
        <div className="p-3 bg-[#050D15] border-t border-slate-800 overflow-x-auto flex items-center gap-2.5 scrollbar-thin">
          {photos.map((item, idx) => {
            const isSelected = idx === currentPhotoIndex;
            const thumbImg = photoImages[item.id];
            return (
              <button
                key={item.id}
                onClick={() => onSelectIndex(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                  isSelected ? 'border-[#E5A83B] ring-2 ring-[#E5A83B]/30 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
                }`}
                title={item.title}
              >
                {thumbImg ? (
                  <img src={thumbImg} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                    #{idx + 1}
                  </div>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
