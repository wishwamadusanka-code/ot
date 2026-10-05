import React from 'react';
import { TESTIMONIALS } from '../data/travelData';

interface TestimonialsSectionProps {
  onOpenAllReviews?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenAllReviews }) => {
  return (
    <section className="py-20 md:py-28 bg-[#06101B] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E5A83B] mb-2">
            Travellers Say
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Loved by our guests
          </h2>
          <div className="w-12 h-[2px] bg-[#E5A83B] mt-4 rounded-full" />
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#0A1A2A] border border-slate-800/80 rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 shadow-md"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-[#E5A83B] text-sm mb-6 tracking-widest">
                  {'★'.repeat(review.rating)}
                </div>

                {/* Quote Text */}
                <p className="font-serif-luxury italic text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-6">
                  {review.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-800/60">
                <span className="text-[11px] tracking-[0.16em] uppercase text-slate-400 font-semibold block">
                  — {review.author}, {review.location}
                </span>
                <span className="text-[10px] text-slate-500 tracking-wide mt-1 block">
                  {review.tourTaken}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional View All Reviews Action */}
        {onOpenAllReviews && (
          <div className="text-center mt-12">
            <button
              onClick={onOpenAllReviews}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E5A83B] hover:text-amber-300 transition-colors py-2 px-4 rounded-lg hover:bg-slate-900 cursor-pointer"
            >
              Read More Guest Journals & Reviews →
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
