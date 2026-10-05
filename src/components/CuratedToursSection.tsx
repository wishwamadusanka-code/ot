import React, { useState } from 'react';
import { Calendar, Compass, ShieldCheck, Check, Sparkles, ArrowRight } from 'lucide-react';
import { CURATED_TOURS } from '../data/travelData';
import { CuratedTour } from '../types';

interface CuratedToursSectionProps {
  onOpenTourModal: (tourId: string) => void;
  onPlanTripWithTour: (tourTitle: string) => void;
}

export const CuratedToursSection: React.FC<CuratedToursSectionProps> = ({
  onOpenTourModal,
  onPlanTripWithTour
}) => {
  const [activeTourId, setActiveTourId] = useState<string>(CURATED_TOURS[0].id);

  const activeTour = CURATED_TOURS.find((t) => t.id === activeTourId) || CURATED_TOURS[0];

  return (
    <section id="tours" className="py-20 md:py-28 bg-[#06121E] relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0E4957]/15 blur-3xl pointer-events-none rounded-full" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#E5A83B] block mb-2">
            Tailor-Made Expeditions
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-medium tracking-tight mb-4">
            Curated Private Tours
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Fully flexible private circuits led by qualified chauffeurs. Explore our signature journeys or customize every stop to your desires.
          </p>
        </div>

        {/* Highly Visible Interactive Tabs */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-[#091D2F] p-2 rounded-2xl border border-slate-700/80 shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-2">
            {CURATED_TOURS.map((tour) => {
              const isActive = activeTour.id === tour.id;
              return (
                <button
                  key={tour.id}
                  onClick={() => setActiveTourId(tour.id)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E5A83B] via-[#EBB24B] to-[#D5982C] text-slate-950 font-bold border-[#E5A83B] shadow-lg shadow-[#E5A83B]/20 scale-[1.01]'
                      : 'bg-[#0A1A2A]/80 hover:bg-[#0C243B] text-slate-300 hover:text-white border-transparent'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <span className={`text-xs sm:text-sm font-serif-luxury font-semibold leading-snug ${isActive ? 'text-slate-950' : 'text-white'}`}>
                      {tour.title}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-slate-950 flex-shrink-0 mt-1" />
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-black/10 dark:border-white/10">
                    <span className={`text-[11px] font-medium ${isActive ? 'text-slate-900 font-semibold' : 'text-[#E5A83B]'}`}>
                      {tour.duration}
                    </span>
                    <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded ${isActive ? 'bg-black/15 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                      {tour.pace.split(' ')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Tour Detailed Display Card */}
        <div className="max-w-5xl mx-auto bg-[#081827] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Tour Image Column */}
            <div className="lg:col-span-5 relative w-full h-64 sm:h-80 lg:h-auto min-h-[260px] overflow-hidden bg-slate-900">
              <img
                src={activeTour.image}
                alt={activeTour.title}
                className="w-full h-full object-cover min-h-[260px]"
                referrerPolicy="no-referrer"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081827] via-[#081827]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#081827]" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] tracking-widest uppercase bg-[#07131F]/90 border border-slate-700 text-[#E5A83B] px-3 py-1 rounded-full backdrop-blur-xs font-semibold">
                  {activeTour.duration}
                </span>
              </div>
            </div>

            {/* Tour Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#E5A83B] font-semibold">
                    {activeTour.pace}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">
                    Qualified Chauffeurs
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium mb-2">
                  {activeTour.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {activeTour.overview}
                </p>

                {/* Key Expedition Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-[11px] font-semibold tracking-wider uppercase text-slate-200">
                    Signature Highlights:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {activeTour.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#091D2F] p-2.5 rounded-lg border border-slate-800">
                        <Check className="w-3.5 h-3.5 text-[#E5A83B] flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenTourModal(activeTour.id)}
                  className="w-full sm:w-auto bg-[#106A7C] hover:bg-[#137b90] text-white text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Compass className="w-4 h-4 text-white" />
                  View Full Details & Inclusions
                </button>
                <button
                  onClick={() => onPlanTripWithTour(activeTour.title)}
                  className="w-full sm:w-auto bg-[#E5A83B] hover:bg-[#d5982b] text-slate-950 text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-slate-900" />
                  Customize This Tour
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
