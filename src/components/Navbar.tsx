import React, { useState } from 'react';
import { Compass, Menu, X, ArrowRight, Phone } from 'lucide-react';
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
  onOpenHeritage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07131F]/95 backdrop-blur-md border-b border-slate-800/80 transition-all shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 group text-left focus:outline-none"
        >
          {/* Logo with beaded pearl ring */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden p-0.5 shadow-md flex items-center justify-center ring-2 ring-[#E5A83B]/50 group-hover:scale-105 transition-transform duration-200 bg-[#091D2F]">
            <img
              src={oceanPearlEmblem}
              alt="Ocean Pearl Travel Official Emblem"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.08em] font-semibold text-white group-hover:text-slate-200 transition-colors leading-none uppercase">
              OCEAN PEARL TRAVEL
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-[1px] w-3.5 bg-[#E5A83B]/70" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.16em] text-[#E5A83B] font-medium font-serif-luxury italic">
                Discover Sri Lanka's Hidden Treasures
              </span>
              <span className="h-[1px] w-3.5 bg-[#E5A83B]/70" />
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-[0.14em] uppercase text-slate-300">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-white font-semibold py-1 cursor-pointer transition-colors relative"
          >
            Home
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#E5A83B] rounded-full" />
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('tours');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                onOpenCuratedTours();
              }
            }}
            className="hover:text-[#E5A83B] transition-colors py-1 cursor-pointer"
          >
            Tours
          </button>
          <button
            onClick={() => onSelectNav('destinations')}
            className="hover:text-[#E5A83B] transition-colors py-1 cursor-pointer"
          >
            Destinations
          </button>
          <button
            onClick={onOpenHeritage}
            className="hover:text-[#E5A83B] transition-colors py-1 cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={onOpenConcierge}
            className="hover:text-[#E5A83B] transition-colors py-1 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Button & Quick Concierge */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenConcierge}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-[#E5A83B] flex items-center justify-center border border-slate-700 transition-colors"
            title="Speak with Local Concierge"
          >
            <Phone className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenTripPlanner}
            className="bg-[#E5A83B] hover:bg-[#d5982b] text-slate-950 font-semibold text-xs tracking-wider uppercase px-6 py-2.5 rounded-full transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Compass className="w-3.5 h-3.5 text-slate-950" />
            <span>Plan Your Trip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07131F] border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 text-xs uppercase tracking-widest text-slate-200 font-medium">
            <button
              onClick={() => handleNavClick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
              className="text-left py-2 text-[#E5A83B] font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick(() => {
                const el = document.getElementById('tours');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onOpenCuratedTours();
                }
              })}
              className="text-left py-2 hover:text-[#E5A83B]"
            >
              Tours
            </button>
            <button
              onClick={() => handleNavClick(() => onSelectNav('destinations'))}
              className="text-left py-2 hover:text-[#E5A83B]"
            >
              Destinations
            </button>
            <button
              onClick={() => handleNavClick(onOpenHeritage)}
              className="text-left py-2 hover:text-[#E5A83B]"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick(onOpenConcierge)}
              className="text-left py-2 hover:text-[#E5A83B]"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick(onOpenTripPlanner)}
              className="w-full bg-[#E5A83B] hover:bg-[#d5982b] text-slate-950 font-semibold text-xs tracking-wider uppercase py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Compass className="w-4 h-4" />
              Plan Your Trip →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
