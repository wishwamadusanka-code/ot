import React, { useState } from 'react';
import { X, Calendar, Compass, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { CURATED_TOURS } from '../data/travelData';
import { CuratedTour } from '../types';

interface CuratedToursModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTourId?: string | null;
  onBookTour: (tourTitle: string) => void;
}

export const CuratedToursModal: React.FC<CuratedToursModalProps> = ({
  isOpen,
  onClose,
  selectedTourId,
  onBookTour
}) => {
  const [activeTour, setActiveTour] = useState<CuratedTour>(() => {
    if (selectedTourId) {
      const match = CURATED_TOURS.find((t) => t.id === selectedTourId);
      if (match) return match;
    }
    return CURATED_TOURS[0];
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#081827] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-[#06121E]">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#E5A83B] block">
              Bespoke Circuits
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
              Curated Private Tours
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tour Selection Tabs */}
        <div className="flex border-b border-slate-800 bg-[#091D2F] overflow-x-auto scrollbar-none px-4 py-2 gap-2">
          {CURATED_TOURS.map((tour) => {
            const isActive = activeTour.id === tour.id;
            return (
              <button
                key={tour.id}
                onClick={() => setActiveTour(tour)}
                className={`px-4 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#E5A83B] text-slate-950 font-semibold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tour.title}
                <span className="ml-2 text-[10px] opacity-80">({tour.duration})</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
          
          {/* Active Tour Hero Bar */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/7] sm:aspect-[21/9] w-full">
            <img
              src={activeTour.image}
              alt={activeTour.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081827] via-[#081827]/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <span className="text-[10px] tracking-widest uppercase bg-[#0D2235]/90 border border-slate-700 text-[#E5A83B] px-3 py-1 rounded-full inline-block mb-2">
                {activeTour.pace}
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-4xl text-white font-medium leading-tight">
                {activeTour.title}
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm font-light mt-1">
                {activeTour.tagline}
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0A1F33] p-4 rounded-xl border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Duration</span>
              <span className="text-white font-medium flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#E5A83B]" />
                {activeTour.duration}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Starting Rate</span>
              <span className="text-[#E5A83B] font-semibold mt-0.5 block">
                {activeTour.startingFrom}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Style & Vehicle</span>
              <span className="text-white font-medium mt-0.5 block truncate">
                Private Mercedes / Alphard
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Tour Connoisseur</span>
              <span className="text-white font-medium mt-0.5 block truncate">
                SLTDA Licensed Chauffeur
              </span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-2">
              Expedition Overview
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              {activeTour.overview} Every day is private, customized to your rhythm, with private airport escort and dedicated local guide.
            </p>
          </div>

          {/* Day by Day Itinerary */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">
              Day-by-Day Private Itinerary
            </h4>
            <div className="space-y-3">
              {activeTour.itinerary.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A1A2A] border border-slate-800/80 rounded-xl p-4 transition-colors hover:border-slate-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#E5A83B] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {step.day}
                      </span>
                      <h5 className="text-white font-medium text-sm font-serif-luxury">
                        {step.title}
                      </h5>
                    </div>
                    <span className="text-[11px] text-slate-400 italic">
                      Stay: {step.stay}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs font-light leading-relaxed pl-1">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VIP Inclusions */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-3">
              Private Luxury Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {activeTour.inclusions.map((inc, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#091D2F] p-3 rounded-lg border border-slate-800/70">
                  <Check className="w-4 h-4 text-[#E5A83B] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{inc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#06121E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>Flexible customization available. Dates and pace arranged to your schedule.</span>
          </div>
          <button
            onClick={() => {
              onBookTour(activeTour.title);
              onClose();
            }}
            className="w-full sm:w-auto bg-[#E5A83B] hover:bg-[#d4952b] text-slate-950 font-semibold px-7 py-3 rounded-full text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-900" />
            Reserve or Customize This Tour
          </button>
        </div>

      </div>
    </div>
  );
};
