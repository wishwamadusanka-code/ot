import React, { useState } from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { oceanPearlEmblem, homeOceanBackground } from '../data/travelData';

interface HeroProps {
  onExploreTours: () => void;
  onTalkToUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTours, onTalkToUs }) => {
  const [showFullEmblem, setShowFullEmblem] = useState(false);

  return (
    <section className="relative pt-12 pb-24 md:pt-16 md:pb-28 overflow-hidden bg-[#07131F]">
      
      {/* Ocean Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={homeOceanBackground}
          alt="Sri Lankan Indian Ocean"
          className="w-full h-full object-cover object-center scale-105 motion-safe:animate-pulse motion-safe:duration-[10000ms]"
          referrerPolicy="no-referrer"
        />
        {/* Multi-stage ocean scrim for perfect text legibility and luxury contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07131F]/90 via-[#07131F]/80 to-[#07131F]" />
        {/* Subtle cyan-teal ambient vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0E4957]/30 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Official Brand Emblem / Logo */}
        <div className="mb-6 relative group">
          <button
            onClick={() => setShowFullEmblem(!showFullEmblem)}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A83B] rounded-full transition-transform active:scale-95"
            title="Click to view full official Ocean Pearl Travel emblem"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-b from-[#E5A83B] via-[#F3CE79] to-[#79541B] shadow-xl shadow-[#0D7486]/30 flex items-center justify-center ring-2 ring-white/10 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#07131F] border border-[#E5A83B]/50 flex items-center justify-center">
                <img
                  src={oceanPearlEmblem}
                  alt="Official Ocean Pearl Travel Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </button>

          {/* Quick badge label under emblem */}
          <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[#E5A83B] opacity-80 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-3 h-3 text-[#E5A83B]" />
            <span>Discover Sri Lanka’s Hidden Treasures</span>
          </div>
        </div>

        {/* Kicker */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-[#E5A83B]">
            Authentic Sri Lankan Adventures
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tight text-white max-w-4xl leading-[1.08] mb-6 drop-shadow-sm">
          Unforgettable journeys <span className="italic font-light text-slate-100">across Sri Lanka</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200/95 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-10 text-balance drop-shadow">
          Beaches, misty highlands, ancient cities, and wild leopards — tailor-made luxury expeditions crafted by local connoisseurs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 sm:mb-24">
          <button
            onClick={onExploreTours}
            className="w-full sm:w-auto bg-[#106A7C] hover:bg-[#137b90] active:scale-95 text-white font-semibold text-xs tracking-[0.18em] uppercase px-8 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-[#106A7C]/40 cursor-pointer"
          >
            Explore Tours
          </button>
          
          <button
            onClick={onTalkToUs}
            className="w-full sm:w-auto bg-[#0a1b2a]/90 hover:bg-[#0e2439] hover:border-slate-500 active:scale-95 text-slate-200 border border-slate-700/90 font-semibold text-xs tracking-[0.18em] uppercase px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer backdrop-blur-sm shadow-md"
          >
            Talk to Us
          </button>
        </div>

        {/* Trust Stats Bar */}
        <div className="w-full max-w-3xl pt-8 border-t border-slate-800/90 backdrop-blur-xs">
          <div className="grid grid-cols-3 divide-x divide-slate-800/80 text-center">
            
            <div className="px-2 sm:px-6">
              <div className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#E5A83B] font-semibold tracking-tight">
                20+
              </div>
              <div className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-slate-300 mt-1">
                Years Guiding
              </div>
            </div>

            <div className="px-2 sm:px-6">
              <div className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#E5A83B] font-semibold tracking-tight">
                4,800+
              </div>
              <div className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-slate-300 mt-1">
                Happy Guests
              </div>
            </div>

            <div className="px-2 sm:px-6">
              <div className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#E5A83B] font-semibold tracking-tight flex items-center justify-center gap-1">
                <span>4.9</span>
                <span className="text-xl sm:text-2xl text-[#E5A83B]">★</span>
              </div>
              <div className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-slate-300 mt-1">
                Average Rating
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Expanded Official Logo Modal if clicked */}
      {showFullEmblem && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setShowFullEmblem(false)}
        >
          <div 
            className="bg-[#091A2A] border border-[#E5A83B]/50 p-6 rounded-2xl max-w-sm w-full text-center space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-2 border-[#E5A83B] shadow-lg p-1 bg-slate-900">
              <img
                src={oceanPearlEmblem}
                alt="Ocean Pearl Travel Official Seal"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-serif-luxury text-2xl text-white font-medium uppercase tracking-wide">
                Ocean Pearl Travel
              </h3>
              <p className="text-[#E5A83B] text-xs tracking-widest uppercase mt-1">
                Discover Sri Lanka’s Hidden Treasures
              </p>
              <p className="text-slate-300 text-xs font-light mt-2 leading-relaxed">
                Official Registered Emblem · Sri Lanka Tourism Development Authority (SLTDA)
              </p>
            </div>
            <button
              onClick={() => setShowFullEmblem(false)}
              className="bg-[#E5A83B] text-slate-950 font-semibold px-6 py-2 rounded-full text-xs uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
