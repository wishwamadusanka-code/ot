import React from 'react';
import { Waves, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onPlanTrip: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onPlanTrip }) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#041527] via-[#072440] to-[#041324] border-t border-[#14B8A6]/30">
      
      {/* Background ocean ambient lighting & wave accents */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0284C7]/20 via-[#072440]/40 to-transparent pointer-events-none"
      />

      {/* Decorative Ocean Swell SVG */}
      <svg
        viewBox="0 0 1440 220"
        className="absolute bottom-0 left-0 w-full h-32 opacity-25 stroke-[#38BDF8]/30 fill-none pointer-events-none"
        preserveAspectRatio="none"
      >
        <path d="M0,120 C320,60 420,180 720,110 C1020,40 1140,190 1440,120" strokeWidth="2" />
        <path d="M0,150 C280,90 500,200 800,140 C1100,80 1260,210 1440,150" strokeWidth="1.5" strokeDasharray="6 6" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Ocean Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
          <Waves className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Ocean Pearl Travels Expeditions</span>
        </div>

        {/* Title */}
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
          Let’s design your Sri Lanka adventure
        </h2>

        {/* Subtitle */}
        <p className="text-slate-200/90 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-8">
          Tell us your travel dates, preferred pace, and dreams. Vishwa and the Ocean Pearl Travels team will curate a bespoke custom itinerary within 24 hours — no obligation.
        </p>

        {/* Button */}
        <button
          onClick={onPlanTrip}
          className="bg-gradient-to-r from-[#C08A3E] via-[#D4A762] to-[#C08A3E] hover:from-[#A8742A] hover:to-[#B8863D] active:scale-95 text-[#07131F] font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#C08A3E]/30 cursor-pointer flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-[#07131F]" />
          <span>Plan Your Custom Journey</span>
        </button>

      </div>
    </section>
  );
};
