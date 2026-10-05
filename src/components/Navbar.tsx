import React, { useState } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { oceanPearlEmblem } from '../data/travelData';


interface NavbarProps {
  onOpenTripPlanner: () => void;
  onOpenConcierge: () => void;
  onSelectNav: (sectionId: string) => void;
  onOpenCuratedTours: () => void;
  onOpenExperiences: () => void;
  onOpenHeritage: () => void;
  onOpenStories: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTripPlanner,
  onOpenConcierge,
  onSelectNav,
  onOpenCuratedTours,
  onOpenExperiences,
  onOpenHeritage,
  onOpenStories
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07131F]/90 backdrop-blur-md border-b border-slate-800/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E5A83B]"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E5A83B]/60 p-0.5 bg-slate-900 shadow-sm flex items-center justify-center">
            <img
              src={oceanPearlEmblem}
              alt="Ocean Pearl Travel Emblem"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-lg tracking-[0.18em] font-semibold text-white group-hover:text-slate-200 transition-colors uppercase">
              Ocean Pearl
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#D8A344] font-medium uppercase -mt-0.5">
              Luxury Travel & Tours
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-[0.16em] uppercase text-slate-300">
          <button
            onClick={() => onSelectNav('destinations')}
            className="hover:text-[#E5A83B] transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E5A83B]"
          >
            Destinations
          </button>
          <button
            onClick={onOpenCuratedTours}
            className="hover:text-[#E5A83B] transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E5A83B]"
          >
            Curated Tours
          </button>
          <button
            onClick={onOpenExperiences}
            className="hover:text-[#E5A83B] transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E5A83B]"
          >
            Experiences
          </button>
          <button
            onClick={onOpenStories}
            className="hover:text-[#E5A83B] transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E5A83B]"
          >
            Guest Stories
          </button>
          <button
            onClick={onOpenHeritage}
            className="hover:text-[#E5A83B] transition-colors py-1 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E5A83B]"
          >
            Our Heritage
          </button>
        </nav>

        {/* Right Zone: Concierge Desk & CTA */}
        <div className="hidden sm:flex items-center gap-6">
          <button
            onClick={onOpenConcierge}
            className="flex flex-col text-right group py-1 focus:outline-none"
            title="Connect with our private travel concierge"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400 group-hover:text-slate-200 transition-colors font-medium">
              Concierge
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-slate-300 group-hover:text-[#E5A83B] transition-colors font-semibold flex items-center justify-end gap-1">
              <Phone className="w-2.5 h-2.5 text-[#E5A83B]" />
              Desk
            </span>
          </button>

          <button
            onClick={onOpenTripPlanner}
            className="bg-[#E5A83B] hover:bg-[#d4952b] text-slate-950 font-semibold px-5 py-2.5 rounded-full text-[11px] tracking-[0.14em] uppercase transition-all duration-200 shadow-md hover:shadow-[#E5A83B]/20 active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-900" />
            Plan Your Journey
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenTripPlanner}
            className="bg-[#E5A83B] text-slate-950 font-semibold px-3 py-1.5 rounded-full text-[10px] tracking-[0.1em] uppercase"
          >
            Plan
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#091827] border-b border-slate-800 px-6 py-6 space-y-4">
          <div className="flex flex-col gap-4 text-xs uppercase tracking-widest text-slate-300 font-medium">
            <button
              onClick={() => handleNavClick(() => onSelectNav('destinations'))}
              className="text-left py-2 hover:text-[#E5A83B]"
            >
              Destinations
            </button>
            <button
              onClick={() => handleNavClick(onOpenCuratedTours)}
              className="text-left py-2 hover:text-[#E5A83B]"
            >
              Curated Tours
            </button>
            <button
              onClick={() => handleNavClick(onOpenExperiences)}
              className="text-left py-2 hover:text-[#E5A83B]"
            >
              Experiences
            </button>
            <button
              onClick={() => handleNavClick(onOpenStories)}
              className="text-left py-2 hover:text-[#E5A83B]"
            >
              Guest Stories
            </button>
            <button
              onClick={() => handleNavClick(onOpenHeritage)}
              className="text-left py-2 hover:text-[#E5A83B]"
            >
              Our Heritage
            </button>
            <button
              onClick={() => handleNavClick(onOpenConcierge)}
              className="text-left py-2 text-[#E5A83B] flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              Concierge Desk (+94 77 550 7506)
            </button>
          </div>
          <div className="pt-2">
            <button
              onClick={() => handleNavClick(onOpenTripPlanner)}
              className="w-full bg-[#E5A83B] text-slate-950 font-semibold py-3 rounded-full text-xs tracking-widest uppercase shadow-md"
            >
              Plan Your Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
