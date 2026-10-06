import React from 'react';
import { oceanPearlEmblem } from '../data/travelData';


interface FooterProps {
  onOpenHeritage: () => void;
  onOpenTour: (tourId: string) => void;
  onOpenConcierge: () => void;
  onOpenTripPlanner: () => void;
  onOpenModal: (modalType: 'privacy' | 'terms' | 'pledge') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenHeritage,
  onOpenTour,
  onOpenConcierge,
  onOpenTripPlanner,
  onOpenModal
}) => {
  return (
    <footer className="bg-[#050E17] text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800/60">
          
          {/* Column 1: Brand & Founder Story */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E5A83B]/50 bg-slate-900 flex-shrink-0">
                <img
                  src={oceanPearlEmblem}
                  alt="Ocean Pearl Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-serif-luxury text-base tracking-[0.18em] font-semibold text-white uppercase">
                  Ocean Pearl Travels
                </div>
                <div className="text-[9px] tracking-[0.22em] text-[#D8A344] font-medium uppercase">
                  Boutique Sri Lanka Expeditions
                </div>
              </div>
            </div>

            <p className="text-slate-300/80 text-xs leading-relaxed font-light max-w-sm">
              Founded by Vishwa Madusanka. Licensed private luxury tour operator specializing in bespoke itineraries across Sri Lanka. Member of Sri Lanka Tourism Development Authority (SLTDA).
            </p>

            <button
              onClick={onOpenHeritage}
              className="text-[11px] font-semibold tracking-wider text-[#E5A83B] hover:text-amber-300 uppercase transition-colors inline-block cursor-pointer"
            >
              Learn More About Our Founder & Story →
            </button>
          </div>

          {/* Column 2: Journeys */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-4">
              Journeys
            </h4>
            <ul className="space-y-2.5 text-[11px] font-medium tracking-[0.12em] uppercase text-slate-400">
              <li>
                <button
                  onClick={() => onOpenTour('highland-tea-rail')}
                  className="hover:text-[#E5A83B] transition-colors text-left"
                >
                  Tea Heritage & Trains
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTour('wild-leopards-coast')}
                  className="hover:text-[#E5A83B] transition-colors text-left"
                >
                  Wildlife & Leopard Safari
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenTour('grand-ceylon')}
                  className="hover:text-[#E5A83B] transition-colors text-left"
                >
                  Private Beach Villas
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTripPlanner}
                  className="hover:text-[#E5A83B] transition-colors text-left"
                >
                  Ayurvedic Wellness Retreats
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Private Concierge */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-4">
              Private Concierge
            </h4>
            <div className="space-y-2 text-xs text-slate-300 font-light">
              <p>385/13 Kularathna Road, Negombo, Sri Lanka</p>
              <p>
                <span className="text-slate-400">Direct: </span>
                <a
                  href="tel:+94775507506"
                  className="text-[#E5A83B] hover:underline font-mono tracking-wide font-normal"
                >
                  +94 77 550 7506
                </a>
              </p>
              <p>
                <span className="text-slate-400">Email: </span>
                <a
                  href="mailto:info.oceanpearltravel@gmail.com"
                  className="text-slate-200 hover:text-[#E5A83B] transition-colors"
                >
                  info.oceanpearltravel@gmail.com
                </a>
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenConcierge}
                  className="text-[10px] tracking-[0.16em] uppercase text-[#E5A83B] hover:text-amber-300 font-semibold border-b border-[#E5A83B]/40 pb-0.5 cursor-pointer"
                >
                  Message On WhatsApp (Instant Reply)
                </button>
              </div>

              {/* Verified Profiles & Socials */}
              <div className="pt-3 flex items-center gap-2.5">
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g1500185-d34253512-Reviews-Ocean_pearl_travel-Katunayake_Negombo_Western_Province.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00AA6C]/20 hover:bg-[#00AA6C]/30 text-[#00AA6C] border border-[#00AA6C]/40 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Ocean Pearl Travels on TripAdvisor"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 .42-.09.81-.25 1.17 1.42.47 2.44 1.8 2.44 3.39 0 1.93-1.57 3.5-3.5 3.5-.95 0-1.81-.38-2.44-1-.18.06-.37.1-.56.1s-.38-.04-.56-.1c-.63.62-1.49 1-2.44 1-1.93 0-3.5-1.57-3.5-3.5 0-1.59 1.02-2.92 2.44-3.39C6.09 8.81 6 8.42 6 8c0-1.66 1.34-3 3-3 .7 0 1.35.24 1.87.64.35-.09.73-.14 1.13-.14zm-4.5 7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                  </svg>
                  <span>TripAdvisor</span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61586828377320&mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877F2]/20 hover:bg-[#1877F2]/30 text-[#4294FF] border border-[#1877F2]/40 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Ocean Pearl Travels on Facebook"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 Ocean Pearl Travels (Pvt) Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenModal('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenModal('terms')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms of Booking
            </button>
            <button
              onClick={() => onOpenModal('pledge')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Responsible Tourism Pledge
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
