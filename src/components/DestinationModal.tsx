import React from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanWithDestination: (destinationName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onPlanWithDestination
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#091A2A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091A2A] via-[#091A2A]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E5A83B] block mb-1">
              Curated Destination Overview
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-medium">
              {destination.name}
            </h2>
            <p className="text-slate-300 text-sm italic font-serif-luxury mt-1">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Meta Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-3 text-slate-300">
              <Calendar className="w-4 h-4 text-[#E5A83B] flex-shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Best Season</span>
                <span className="font-medium">{destination.bestMonths}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-slate-300">
              <Clock className="w-4 h-4 text-[#E5A83B] flex-shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Ideal Duration</span>
                <span className="font-medium">{destination.recommendedDuration}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-4 h-4 text-[#E5A83B] flex-shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Key Locales</span>
                <span className="font-medium truncate">{destination.coordinates}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-white mb-2">
              The Experience
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {destination.description} Ocean Pearl Travel arranges bespoke private permits, expert naturalist trackers, and VIP chauffeured transfers directly to secluded boutique sanctuaries away from mainstream tourist circuits.
            </p>
          </div>

          {/* Curated Highlights */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-white mb-3">
              Signature Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
              {destination.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#E5A83B] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Luxury Stays */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-white mb-2">
              Preferred Luxury Stays
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {destination.luxuryStays.map((stay, idx) => (
                <span
                  key={idx}
                  className="bg-[#0D2235] text-slate-200 border border-slate-700/60 px-3 py-1.5 rounded-md text-[11px]"
                >
                  {stay}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Tailor this destination with qualified chauffeurs & tailored stays.
            </span>
            <button
              onClick={() => {
                onPlanWithDestination(destination.name);
                onClose();
              }}
              className="w-full sm:w-auto bg-[#E5A83B] hover:bg-[#d6982b] text-slate-950 font-semibold px-6 py-3 rounded-full text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4 text-slate-900" />
              Add To Custom Itinerary
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
