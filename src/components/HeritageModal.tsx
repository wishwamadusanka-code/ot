import React from 'react';
import { X, Award, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { oceanPearlEmblem } from '../data/travelData';


interface HeritageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanTrip: () => void;
}

export const HeritageModal: React.FC<HeritageModalProps> = ({
  isOpen,
  onClose,
  onPlanTrip
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#081827] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-[#06121E]">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#E5A83B] block">
              About Ocean Pearl Travel
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
              Our Heritage & Philosophy
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

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-grow">
          
          {/* Founder Feature Banner */}
          <div className="bg-[#0A1F33] border border-slate-800 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full border-2 border-[#E5A83B] overflow-hidden flex-shrink-0 bg-slate-900 shadow-lg">
              <img
                src={oceanPearlEmblem}
                alt="Vishwa Madusanka - Ocean Pearl Travel"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#E5A83B] font-semibold block mb-1">
                Founder & Managing Director
              </span>
              <h3 className="font-serif-luxury text-2xl text-white font-medium">
                Vishwa Madusanka
              </h3>
              <p className="text-slate-300 text-xs font-light leading-relaxed mt-1">
                “Sri Lanka is not merely an island to visit; it is an intimate world of rainforests, sapphire shores, ancient ruins, and legendary highland tea estates. Our mission with Ocean Pearl Travel is to craft journeys that balance uncompromised luxury with genuine Sri Lankan warmth.”
              </p>
            </div>
          </div>

          {/* Pillars of Integrity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0A1A2A] p-5 rounded-xl border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-[#0D263D] flex items-center justify-center text-[#E5A83B] mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-base text-white font-medium mb-1.5">
                SLTDA Licensed & Accredited
              </h4>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                Fully registered and certified under the Sri Lanka Tourism Development Authority (SLTDA). Every vehicle, chauffeur, and naturalist adheres to strict national safety and service standards.
              </p>
            </div>

            <div className="bg-[#0A1A2A] p-5 rounded-xl border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-[#0D263D] flex items-center justify-center text-[#E5A83B] mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-base text-white font-medium mb-1.5">
                Private Chauffeur Service
              </h4>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                Air-conditioned private luxury travel with seasoned, SLTDA-licensed English-speaking chauffeur-guides ensuring tranquil, safe, and personalized journeys across the island.
              </p>
            </div>

            <div className="bg-[#0A1A2A] p-5 rounded-xl border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-[#0D263D] flex items-center justify-center text-[#E5A83B] mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-base text-white font-medium mb-1.5">
                Direct Community Empowerment
              </h4>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                We bypass large tour conglomerates by directing 100% of activity payments straight to village craftspeople, artisan tea pickers, traditional fishermen, and conservation wardens.
              </p>
            </div>

            <div className="bg-[#0A1A2A] p-5 rounded-xl border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-[#0D263D] flex items-center justify-center text-[#E5A83B] mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury text-base text-white font-medium mb-1.5">
                24/7 Private Concierge
              </h4>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                Located in Negombo, minutes from Bandaranaike International Airport (CMB), our team coordinates VIP tarmac meet & greets and provides round-the-clock WhatsApp support throughout your stay.
              </p>
            </div>
          </div>

          {/* Contact Details in Modal */}
          <div className="bg-[#07131F] p-4 rounded-xl border border-slate-800 text-xs space-y-1.5 text-slate-300">
            <div className="text-[#E5A83B] font-semibold uppercase tracking-wider text-[10px]">
              Headquarters & Concierge Office
            </div>
            <p>Ocean Pearl Travel (Pvt) Ltd · 385/13 Kularathna Road, Negombo, Sri Lanka</p>
            <p>Direct Concierge Hotline: <strong className="text-white">+94 77 550 7506</strong></p>
            <p>Founder Direct Email: <strong className="text-white">info.oceanpearltravel@gmail.com</strong></p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#06121E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Experience the warmth of authentic Sri Lankan hospitality.
          </span>
          <button
            onClick={() => {
              onClose();
              onPlanTrip();
            }}
            className="w-full sm:w-auto bg-[#E5A83B] hover:bg-[#d4952b] text-slate-950 font-semibold px-6 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
          >
            Design Your Bespoke Journey
          </button>
        </div>

      </div>
    </div>
  );
};
