import React, { useState, useEffect } from 'react';
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

  // Synchronize when selectedTourId or modal opens
  useEffect(() => {
    if (selectedTourId) {
      const match = CURATED_TOURS.find((t) => t.id === selectedTourId);
      if (match) setActiveTour(match);
    }
  }, [selectedTourId, isOpen]);

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

        {/* Highly Visible Tour Selection Tabs */}
        <div className="bg-[#05111B] border-b border-slate-800 p-3 sm:p-4">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#E5A83B]">
              Select a Curated Journey:
            </span>
            <span className="text-[10px] text-slate-400">
              {CURATED_TOURS.length} Expeditions Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {CURATED_TOURS.map((tour) => {
              const isActive = activeTour.id === tour.id;
              return (
                <button
                  key={tour.id}
                  onClick={() => setActiveTour(tour)}
                  type="button"
                  className={`p-3 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E5A83B] via-[#EBB24B] to-[#D5982C] text-slate-950 border-[#E5A83B] shadow-lg shadow-[#E5A83B]/20 ring-1 ring-[#E5A83B]'
                      : 'bg-[#0A1F33] hover:bg-[#0E283E] text-slate-200 border-slate-700/80 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <span className={`text-xs font-semibold font-serif-luxury leading-tight ${isActive ? 'text-slate-950 font-bold' : 'text-white'}`}>
                      {tour.title}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-slate-950 flex-shrink-0 mt-1" />
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-black/10 dark:border-white/10">
                    <span className={`text-[10px] font-medium tracking-wide ${isActive ? 'text-slate-900 font-semibold' : 'text-[#E5A83B]'}`}>
                      {tour.duration}
                    </span>
                    <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded ${isActive ? 'bg-black/15 text-slate-950 font-medium' : 'bg-slate-800 text-slate-400'}`}>
                      {tour.pace.split(' ')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
          
          {/* Active Tour Hero Bar */}
          <div className="relative rounded-xl overflow-hidden w-full h-52 sm:h-72 md:aspect-[21/9] min-h-[200px] border border-slate-800 bg-slate-900">
            <img
              src={activeTour.image}
              alt={activeTour.title}
              className="w-full h-full object-cover min-h-[200px]"
              referrerPolicy="no-referrer"
              decoding="async"
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
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Travel Rhythm</span>
              <span className="text-[#E5A83B] font-medium mt-0.5 block">
                {activeTour.pace}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Journey Format</span>
              <span className="text-white font-medium mt-0.5 block truncate">
                100% Bespoke & Private
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Chauffeur Service</span>
              <span className="text-[#E5A83B] font-medium mt-0.5 block truncate">
                Qualified Chauffeurs
              </span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-2">
              Expedition Overview
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              {activeTour.overview} Every journey is fully private, chauffeured by qualified chauffeurs, and customized around your preferred dates and rhythm.
            </p>
          </div>

          {/* Key Expedition Highlights */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-3">
              Key Expedition Highlights
            </h4>
            <div className="space-y-2.5">
              {activeTour.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A1A2A] border border-slate-800/80 rounded-xl p-3.5 flex items-start gap-3 transition-colors hover:border-slate-700"
                >
                  <span className="text-[10px] font-semibold tracking-wider text-[#E5A83B] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
                    {highlight}
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
