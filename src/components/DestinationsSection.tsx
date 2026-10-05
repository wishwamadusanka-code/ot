import React from 'react';
import { DESTINATIONS } from '../data/travelData';
import { Destination } from '../types';

interface DestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination
}) => {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-[#06101B] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E5A83B] mb-2">
            Where to Go
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Iconic Destinations
          </h2>
          {/* Subtle gold line under heading */}
          <div className="w-12 h-[2px] bg-[#E5A83B] mt-4 rounded-full" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-[#0A1A2A] hover:bg-[#0D2237] border border-slate-800/80 hover:border-[#E5A83B]/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-[4/3] w-full min-h-[190px] overflow-hidden bg-slate-900">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2A] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-medium mb-3 group-hover:text-[#E5A83B] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-slate-300/90 text-xs sm:text-[13px] leading-relaxed font-light mb-6">
                    {dest.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#E5A83B] group-hover:text-amber-300 transition-colors">
                    {dest.actionText}
                  </span>
                  <span className="text-[#E5A83B] group-hover:translate-x-1 transition-transform duration-200 text-sm">
                    →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
