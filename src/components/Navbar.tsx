import React, { useState } from 'react';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';
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
  onOpenHeritage,
  onOpenStories
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE3D2] transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 group text-left focus:outline-none"
        >
          {/* Logo with beaded pearl ring */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden p-0.5 shadow-md flex items-center justify-center ring-2 ring-[#C08A3E]/40 group-hover:scale-105 transition-transform duration-200 bg-[#0C2340]">
            <img
              src={oceanPearlEmblem}
              alt="Ocean Pearl Travels Emblem"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.06em] font-semibold text-[#0C2340] leading-none">
              OCEAN PEARL TRAVELS
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-[1px] w-4 bg-[#C08A3E]/60" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.14em] text-[#B8863D] font-medium font-serif-luxury italic">
                Discover Sri Lanka's Hidden Treasures
              </span>
              <span className="h-[1px] w-4 bg-[#C08A3E]/60" />
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-[0.1em] text-[#0C2340]">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[#0C2340] font-semibold py-1 cursor-pointer transition-colors relative"
          >
            Home
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#C08A3E] rounded-full" />
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
            className="hover:text-[#B8863D] text-[#2C4058] transition-colors py-1 cursor-pointer"
          >
            Tours
          </button>
          <button
            onClick={() => onSelectNav('destinations')}
            className="hover:text-[#B8863D] text-[#2C4058] transition-colors py-1 cursor-pointer"
          >
            Destinations
          </button>
          <button
            onClick={onOpenHeritage}
            className="hover:text-[#B8863D] text-[#2C4058] transition-colors py-1 cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={onOpenConcierge}
            className="hover:text-[#B8863D] text-[#2C4058] transition-colors py-1 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Button & Verified Channels */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g1500185-d34253512-Reviews-Ocean_pearl_travel-Katunayake_Negombo_Western_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#00AA6C]/10 hover:bg-[#00AA6C]/20 border border-[#00AA6C]/30 text-[#00AA6C] flex items-center justify-center transition-colors cursor-pointer"
            title="TripAdvisor 5.0 Star Rating"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 .42-.09.81-.25 1.17 1.42.47 2.44 1.8 2.44 3.39 0 1.93-1.57 3.5-3.5 3.5-.95 0-1.81-.38-2.44-1-.18.06-.37.1-.56.1s-.38-.04-.56-.1c-.63.62-1.49 1-2.44 1-1.93 0-3.5-1.57-3.5-3.5 0-1.59 1.02-2.92 2.44-3.39C6.09 8.81 6 8.42 6 8c0-1.66 1.34-3 3-3 .7 0 1.35.24 1.87.64.35-.09.73-.14 1.13-.14zm-4.5 7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61586828377320&mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] flex items-center justify-center transition-colors cursor-pointer"
            title="Facebook Page"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <button
            onClick={onOpenTripPlanner}
            className="bg-[#C08A3E] hover:bg-[#A8742A] text-white font-medium text-xs tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Compass className="w-3.5 h-3.5 text-white/90" />
            <span>Plan Your Trip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#0C2340] hover:bg-[#EFE9DD] transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#EAE3D2] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 text-sm font-medium text-[#0C2340]">
            <button
              onClick={() => handleNavClick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
              className="text-left py-2 font-semibold text-[#B8863D]"
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
              className="text-left py-2 hover:text-[#B8863D]"
            >
              Tours
            </button>
            <button
              onClick={() => handleNavClick(() => onSelectNav('destinations'))}
              className="text-left py-2 hover:text-[#B8863D]"
            >
              Destinations
            </button>
            <button
              onClick={() => handleNavClick(onOpenHeritage)}
              className="text-left py-2 hover:text-[#B8863D]"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick(onOpenConcierge)}
              className="text-left py-2 hover:text-[#B8863D]"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-[#EAE3D2] space-y-3">
            <button
              onClick={() => handleNavClick(onOpenTripPlanner)}
              className="w-full bg-[#C08A3E] hover:bg-[#A8742A] text-white font-medium text-xs tracking-wider uppercase py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Compass className="w-4 h-4" />
              Plan Your Trip →
            </button>

            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g1500185-d34253512-Reviews-Ocean_pearl_travel-Katunayake_Negombo_Western_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00AA6C]/15 border border-[#00AA6C]/30 text-[#00AA6C] text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 .42-.09.81-.25 1.17 1.42.47 2.44 1.8 2.44 3.39 0 1.93-1.57 3.5-3.5 3.5-.95 0-1.81-.38-2.44-1-.18.06-.37.1-.56.1s-.38-.04-.56-.1c-.63.62-1.49 1-2.44 1-1.93 0-3.5-1.57-3.5-3.5 0-1.59 1.02-2.92 2.44-3.39C6.09 8.81 6 8.42 6 8c0-1.66 1.34-3 3-3 .7 0 1.35.24 1.87.64.35-.09.73-.14 1.13-.14zm-4.5 7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                </svg>
                <span>TripAdvisor 5.0★</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61586828377320&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2]/15 border border-[#1877F2]/30 text-[#1877F2] text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
