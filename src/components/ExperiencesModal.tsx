import React from 'react';
import { X, Clock, MapPin, Sparkles, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/travelData';

interface ExperiencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExperience: (title: string) => void;
}

export const ExperiencesModal: React.FC<ExperiencesModalProps> = ({
  isOpen,
  onClose,
  onSelectExperience
}) => {
  if (!isOpen) return null;

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
              Extraordinary Moments
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
              Curated Sri Lankan Experiences
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

        {/* Scrollable Experiences Grid */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-grow">
          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-3xl">
            Beyond standard sightseeing, Ocean Pearl opens doors to private estates, closed temple chambers, and deep jungle reserves alongside certified national experts. Add these bespoke moments to any journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="bg-[#0A1A2A] border border-slate-800/90 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#E5A83B]/40 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] w-full min-h-[190px] overflow-hidden bg-slate-900">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2A] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#07131F]/90 border border-slate-700 text-[10px] font-medium tracking-wider uppercase text-[#E5A83B] px-2.5 py-1 rounded-full">
                    {exp.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="font-serif-luxury text-lg sm:text-xl text-white font-medium mb-2 group-hover:text-[#E5A83B] transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-[11px] text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E5A83B]" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#E5A83B]" />
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed font-light mb-4">
                      {exp.description}
                    </p>

                    <div className="bg-[#07131F] p-3 rounded-lg border border-slate-800/80 flex items-start gap-2 text-[11px] text-[#E5A83B]">
                      <Award className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-light">
                        <strong className="text-[#E5A83B] font-semibold">VIP Privilege:</strong> {exp.exclusivePerk}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60">
                    <button
                      onClick={() => {
                        onSelectExperience(exp.title);
                        onClose();
                      }}
                      className="w-full bg-[#106A7C] hover:bg-[#137b90] text-white text-[11px] font-semibold tracking-wider uppercase py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Inquire About This Experience
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#06121E] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Have a custom bucket-list experience in mind? Our concierge crafts it from scratch.
          </span>
          <button
            onClick={onClose}
            className="text-xs text-[#E5A83B] hover:underline uppercase tracking-wider font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
