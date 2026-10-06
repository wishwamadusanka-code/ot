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

        {/* TripAdvisor Official Rating & Link */}
        <div className="mt-12 max-w-xl mx-auto bg-gradient-to-r from-[#00AA6C]/15 via-[#0A1A2A] to-[#00AA6C]/15 border border-[#00AA6C]/35 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-[#00AA6C]/20 border border-[#00AA6C]/50 flex items-center justify-center flex-shrink-0 text-[#00AA6C]">
              {/* TripAdvisor Owl Icon */}
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 .42-.09.81-.25 1.17 1.42.47 2.44 1.8 2.44 3.39 0 1.93-1.57 3.5-3.5 3.5-.95 0-1.81-.38-2.44-1-.18.06-.37.1-.56.1s-.38-.04-.56-.1c-.63.62-1.49 1-2.44 1-1.93 0-3.5-1.57-3.5-3.5 0-1.59 1.02-2.92 2.44-3.39C6.09 8.81 6 8.42 6 8c0-1.66 1.34-3 3-3 .7 0 1.35.24 1.87.64.35-.09.73-.14 1.13-.14zm-4.5 7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-white font-medium text-sm">Reviewed on TripAdvisor</span>
                <span className="text-[#00AA6C] text-xs font-bold bg-[#00AA6C]/20 px-2 py-0.5 rounded-full border border-[#00AA6C]/30">
                  5.0 ★★★★★
                </span>
              </div>
              <p className="text-slate-300 text-xs mt-0.5">
                Official Ocean Pearl Travels traveler feedback & ratings
              </p>
            </div>
          </div>
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g1500185-d34253512-Reviews-Ocean_pearl_travel-Katunayake_Negombo_Western_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00AA6C] hover:bg-[#008f5a] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md inline-flex items-center gap-1.5 flex-shrink-0 cursor-pointer active:scale-95"
          >
            <span>Read TripAdvisor Reviews</span>
            <span className="text-xs">↗</span>
          </a>
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
