import React from 'react';

interface CtaBannerProps {
  onPlanTrip: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onPlanTrip }) => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#092631] via-[#0B3846] to-[#08222B] border-t border-[#124B5C]/40">
      
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#146479]/20 via-transparent to-transparent pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Kicker */}
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E5A83B] mb-3">
          Start Planning
        </span>

        {/* Title */}
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
          Let’s design your Sri Lanka adventure
        </h2>

        {/* Subtitle */}
        <p className="text-slate-200/90 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-8">
          Tell us your travel dates, preferred pace, and dreams. We’ll curate and send a complimentary custom itinerary within 24 hours — no obligation.
        </p>

        {/* Button */}
        <button
          onClick={onPlanTrip}
          className="bg-[#12687A] hover:bg-[#15798e] active:scale-95 text-white font-semibold text-xs tracking-[0.18em] uppercase px-9 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-cyan-950/60 cursor-pointer"
        >
          Plan Your Trip
        </button>

      </div>
    </section>
  );
};
