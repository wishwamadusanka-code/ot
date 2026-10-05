import React from 'react';
import { Compass, Heart, CreditCard } from 'lucide-react';
import { WHY_US_FEATURES } from '../data/travelData';

export const WhyTravelSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'compass':
        return <Compass className="w-5 h-5 text-[#E5A83B]" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-[#34D399]" fill="currentColor" fillOpacity={0.2} />;
      case 'shield':
      default:
        return <CreditCard className="w-5 h-5 text-[#E5A83B]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#07131F] border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E5A83B] mb-2">
            Why Travel With Us
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Local expert, effortless trips
          </h2>
          <div className="w-12 h-[2px] bg-[#E5A83B] mt-4 rounded-full" />
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {WHY_US_FEATURES.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group">
              {/* Circular Icon with dark badge and soft ring */}
              <div className="w-14 h-14 rounded-full bg-[#0D2235] border border-slate-800 group-hover:border-[#E5A83B]/50 flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
                {getIcon(item.iconType)}
              </div>

              <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300/90 text-xs sm:text-sm leading-relaxed font-light max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
