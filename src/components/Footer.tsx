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
                  Ocean Pearl Travel
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
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('album');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#E5A83B] text-[#E5A83B] transition-colors text-left font-semibold flex items-center gap-1.5"
                >
                  <span>Tour Photos Album (11)</span>
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
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 Ocean Pearl Travel (Pvt) Ltd. All rights reserved.
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
