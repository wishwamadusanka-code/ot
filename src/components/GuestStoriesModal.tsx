import React from 'react';
import { X, Star, Quote, MapPin, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

interface GuestStoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanTrip: () => void;
}

export const GuestStoriesModal: React.FC<GuestStoriesModalProps> = ({
  isOpen,
  onClose,
  onPlanTrip
}) => {
  if (!isOpen) return null;

  const extendedStories = [
    ...TESTIMONIALS,
    {
      id: '4',
      quote:
        'Vishwa and his team arranged a dream honeymoon for us. From arriving at our private villa in Weligama with fresh king coconuts, to seeing two leopards at dawn in Yala, every moment was unforgettable.',
      author: 'CHARLOTTE & ALEXIS',
      location: 'PARIS, FRANCE',
      rating: 5,
      tourTaken: 'Honeymoon Odyssey: Tea & Sands (12 Days)',
      date: 'December 2025'
    },
    {
      id: '5',
      quote:
        'The vintage train ride from Nuwara Eliya to Ella in the private observation car was pure magic. Our chauffeur guide was extraordinarily knowledgeable, polite, and cautious on mountain roads.',
      author: 'DR. SEBASTIAN MÜLLER',
      location: 'MUNICH, GERMANY',
      rating: 5,
      tourTaken: 'Ceylon Tea & Highland Rails (9 Days)',
      date: 'November 2025'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#081827] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-[#06121E]">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#E5A83B] block">
              Traveller Voices
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
              Guest Stories & Reviews
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

        {/* Stories list */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-grow">
          <div className="flex items-center justify-between bg-[#0B2136] p-4 rounded-xl border border-slate-800">
            <div>
              <span className="text-xl sm:text-2xl font-serif-luxury text-white font-medium">
                4.9 out of 5.0
              </span>
              <div className="flex text-[#E5A83B] text-sm mt-0.5">★★★★★</div>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-300 font-medium block">Over 4,800+ Journeys</span>
              <span className="text-[11px] text-[#E5A83B]">100% Certified Private Chauffeur Guides</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {extendedStories.map((story) => (
              <div
                key={story.id}
                className="bg-[#0A1A2A] border border-slate-800 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-[#E5A83B] text-xs">
                      {'★'.repeat(story.rating)}
                    </div>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {story.date}
                    </span>
                  </div>

                  <p className="font-serif-luxury italic text-slate-200 text-xs sm:text-sm leading-relaxed mb-4">
                    “{story.quote}”
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#E5A83B]">
                    {story.author}
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {story.location} · {story.tourTaken}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#06121E] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Every review verified from completed Ocean Pearl expeditions.
          </span>
          <button
            onClick={() => {
              onClose();
              onPlanTrip();
            }}
            className="bg-[#E5A83B] hover:bg-[#d4952b] text-slate-950 font-semibold px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
          >
            Plan Your Journey
          </button>
        </div>

      </div>
    </div>
  );
};
