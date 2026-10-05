import React from 'react';
import { ArrowRight, Waves } from 'lucide-react';
import {
  sigiriyaHeroImg,
  culturalTriangleImg,
  wildlifeSafariImg,
  southernBeachesImg
} from '../data/travelData';

interface HeroProps {
  onExploreTours: () => void;
  onSelectCategory?: (category: 'cultural' | 'wildlife' | 'coastal') => void;
}

// 3D Luminous Pearl Component matching Ocean Pearl branding
const Pearl: React.FC<{ size: number; className?: string }> = ({ size, className = '' }) => (
  <div
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: 'radial-gradient(circle at 32% 28%, #FFFFFF 0%, #FAF6F0 25%, #E5D6C5 60%, #B89F88 100%)',
      boxShadow: '0 4px 10px rgba(12, 35, 64, 0.28), inset -1px -2px 3px rgba(120, 90, 60, 0.45)',
    }}
    className={`rounded-full flex-shrink-0 ring-1 ring-[#D4A762]/60 ${className}`}
  />
);

// Temple / Stupa SVG Icon
const TempleStupaIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M12 2l1.2 2.5h-2.4L12 2zm-3 4h6v1.5h-6V6zm-1.5 2.5h9c1.5 1 2.5 3 2.5 5h-14c0-2 1-4 2.5-5zm-2 6h13v2H5.5v-2zm-1.5 3h16v2H4v-2z" />
  </svg>
);

// Elephant Wildlife SVG Icon
const ElephantIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M19 8c-1.5 0-2.8.8-3.5 2-1-.3-2.1-.5-3.3-.5-2.5 0-4.8.8-6.7 2.2V10c0-1.1-.9-2-2-2H2v2h1.5v7h2v-4c1.6-1.2 3.5-1.8 5.7-1.8 1 0 2 .2 2.8.5.5-1 1.6-1.7 2.8-1.7 1.7 0 3 1.3 3 3v4h2v-7c0-1.1-.9-2-2-2zm-9.5 4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
  </svg>
);

// Nautical Compass Rose SVG Watermark
const NauticalCompassRose = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#106A7C]/20 fill-none">
    <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="100" cy="100" r="75" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="55" strokeWidth="0.8" />
    {/* Compass Points */}
    <polygon points="100,10 106,85 100,100 94,85" fill="#106A7C" fillOpacity="0.08" strokeWidth="1" />
    <polygon points="100,190 106,115 100,100 94,115" fill="#106A7C" fillOpacity="0.08" strokeWidth="1" />
    <polygon points="10,100 85,94 100,100 85,106" fill="#106A7C" fillOpacity="0.08" strokeWidth="1" />
    <polygon points="190,100 115,94 100,100 115,106" fill="#106A7C" fillOpacity="0.08" strokeWidth="1" />
    {/* Diagonals */}
    <polygon points="36,36 90,85 100,100 85,90" fill="#C08A3E" fillOpacity="0.06" stroke="#C08A3E" strokeOpacity="0.2" strokeWidth="0.8" />
    <polygon points="164,164 110,115 100,100 115,110" fill="#C08A3E" fillOpacity="0.06" stroke="#C08A3E" strokeOpacity="0.2" strokeWidth="0.8" />
    <polygon points="164,36 115,90 100,100 110,85" fill="#C08A3E" fillOpacity="0.06" stroke="#C08A3E" strokeOpacity="0.2" strokeWidth="0.8" />
    <polygon points="36,164 85,110 100,100 90,115" fill="#C08A3E" fillOpacity="0.06" stroke="#C08A3E" strokeOpacity="0.2" strokeWidth="0.8" />
    {/* Center Pearl */}
    <circle cx="100" cy="100" r="4" fill="#C08A3E" fillOpacity="0.4" />
  </svg>
);

// Flying Seagulls SVG Silhouette
const FlyingSeagulls = () => (
  <svg viewBox="0 0 160 50" className="w-32 h-10 fill-none stroke-[#106A7C]/30 stroke-[1.8] stroke-linecap-round">
    <path d="M5,25 Q18,10 32,23 Q46,10 58,25" />
    <path d="M65,15 Q75,3 86,14 Q97,3 107,15" className="stroke-[1.4] opacity-80" />
    <path d="M120,28 Q128,18 136,27 Q144,18 152,28" className="stroke-[1.2] opacity-70" />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ onExploreTours, onSelectCategory }) => {
  return (
    <div className="relative bg-[#FAF7F2] overflow-hidden">
      
      {/* ======================================================== */}
      {/* 1. HERO PANORAMIC SECTION (Sigiriya Lake & Hiker View) */}
      {/* ======================================================== */}
      <section className="relative w-full flex flex-col sm:block overflow-hidden bg-[#FAF7F2]">
        
        {/* Desktop Background Scenery */}
        <div className="hidden sm:block absolute inset-0 z-0">
          <img
            src={sigiriyaHeroImg}
            alt="Sigiriya Lion Rock Lake Panoramic View with Explorer"
            className="w-full h-full object-cover object-[center_35%]"
            referrerPolicy="no-referrer"
            decoding="async"
          />
          {/* Gentle directional scrim on desktop so text on the left stays clear while preserving Sigiriya */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/60 to-transparent sm:w-3/5 lg:w-1/2" />
        </div>

        {/* Mobile View: Dedicated Panoramic Photo Frame so Sigiriya & Hiker are 100% visible on phones */}
        <div className="sm:hidden relative w-full aspect-[16/10] min-h-[220px] overflow-hidden bg-slate-900 border-b border-[#D4A762]/30">
          <img
            src={sigiriyaHeroImg}
            alt="Sigiriya Lion Rock Lake Panoramic View"
            className="w-full h-full object-cover object-[center_35%]"
            referrerPolicy="no-referrer"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/20" />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[#E5A83B] text-[10px] px-2.5 py-0.5 rounded-full border border-white/20">
            Sigiriya Lion Rock Fortress
          </div>
        </div>

        {/* Hero Content Lockup */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-24 lg:py-32">
          <div className="max-w-xl text-left">
            
            {/* Elegant Pearl Pin Accent Bar */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="h-[1.5px] w-8 bg-[#C08A3E]" />
              <Pearl size={8} />
              <span className="h-[1.5px] w-8 bg-[#C08A3E]" />
            </div>

            {/* Main Headline in Royal Navy Serif */}
            <h1 className="font-serif-luxury text-3xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#0C2340] leading-[1.1] sm:leading-[1.08] mb-3 sm:mb-4 drop-shadow-xs">
              Discover Sri Lanka's <br />
              <span className="font-normal italic">Hidden Treasures</span>
            </h1>

            {/* Subtitle in Italic Serif */}
            <p className="font-serif-luxury text-base sm:text-2xl text-[#1E3758] italic font-light mb-6 sm:mb-8 max-w-md leading-relaxed">
              Authentic journeys. Unforgettable memories.
            </p>

            {/* CTA Button */}
            <div>
              <button
                onClick={onExploreTours}
                className="w-full sm:w-auto bg-[#C08A3E] hover:bg-[#A8742A] text-white font-medium text-sm sm:text-base tracking-wide px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#C08A3E]/30 inline-flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 group"
              >
                <span>Explore Our Tours</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 2. SIGNATURE CURVED DIVIDER WITH 3D PEARL CREST          */}
      {/* ======================================================== */}
      <div className="relative -mt-6 sm:-mt-14 z-20 w-full pointer-events-none">
        
        {/* SVG Curve Canvas with Oceanic Transition Tint */}
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-24 block drop-shadow-sm"
        >
          <defs>
            <linearGradient id="oceanCurveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5F9FA" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#EAF4F7" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Fill shape transitioning seamlessly into the ocean-themed background */}
          <path
            d="M0,120 L0,50 Q720,0 1440,50 L1440,120 Z"
            fill="url(#oceanCurveGradient)"
          />
          {/* Elegant Golden Rim Line */}
          <path
            d="M0,50 Q720,0 1440,50"
            stroke="#D4A762"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Secondary Oceanic Seafoam Accent Line */}
          <path
            d="M0,54 Q720,4 1440,54"
            stroke="#106A7C"
            strokeWidth="1"
            strokeOpacity="0.25"
            fill="none"
          />
        </svg>

        {/* Central Luminous Pearl Cluster resting on the crest with oceanic ripple */}
        <div className="absolute top-1 sm:top-2.5 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1 sm:gap-2">
          {/* Soft water-caustic glow beneath pearls */}
          <div 
            aria-hidden="true" 
            className="absolute -inset-2 bg-[#106A7C]/20 blur-md rounded-full pointer-events-none" 
          />
          <Pearl size={10} className="sm:w-[12px] opacity-90 relative z-10" />
          <Pearl size={16} className="sm:w-[18px] relative z-10" />
          <Pearl size={26} className="sm:w-[30px] shadow-2xl relative z-10" />
          <Pearl size={16} className="sm:w-[18px] relative z-10" />
          <Pearl size={10} className="sm:w-[12px] opacity-90 relative z-10" />
        </div>

      </div>

      {/* ======================================================== */}
      {/* 3. THREE SIGNATURE FEATURE CARDS (OCEAN THEMED)          */}
      {/* ======================================================== */}
      <section className="relative z-10 pt-2 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EAF4F7] via-[#F2F8FA] to-[#E5F1F5] overflow-hidden">
        
        {/* Layered Oceanic Background Watermarks & Swells */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          
          {/* Ambient Ocean Light Glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#106A7C]/12 via-[#2BB3C0]/8 to-transparent rounded-full blur-3xl" 
          />

          {/* Nautical Compass Rose Watermark */}
          <div className="absolute -right-24 top-6 w-96 h-96 opacity-40 animate-ocean-swell hidden lg:block">
            <NauticalCompassRose />
          </div>

          <div className="absolute -left-20 bottom-12 w-80 h-80 opacity-30 animate-ocean-swell hidden md:block">
            <NauticalCompassRose />
          </div>

          {/* Flying Seagulls overhead */}
          <div className="absolute left-1/4 top-8 hidden sm:block">
            <FlyingSeagulls />
          </div>

          {/* Flowing Coastal Bathymetric Swell Waves (SVG) */}
          <svg
            viewBox="0 0 1440 320"
            className="absolute -bottom-8 left-0 w-full h-48 opacity-30 stroke-[#106A7C]/25 fill-none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,160 C320,100 420,220 720,150 C1020,80 1140,240 1440,160"
              strokeWidth="2"
            />
            <path
              d="M0,190 C280,130 500,240 800,180 C1100,120 1260,260 1440,200"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <path
              d="M0,220 C240,170 540,260 880,210 C1180,160 1340,280 1440,230"
              strokeWidth="1.2"
              strokeOpacity="0.6"
            />
          </svg>

          {/* Gentle Seafoam Ripple Circles */}
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full border border-[#106A7C]/15 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full border border-[#106A7C]/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Section Oceanic Sub-header */}
        <div className="relative z-10 max-w-7xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#106A7C]/10 border border-[#106A7C]/20 mb-2">
            <Waves className="w-3.5 h-3.5 text-[#106A7C]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#106A7C]">
              Pearl of the Indian Ocean
            </span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#0C2340] font-medium">
            Explore Ceylon Through Our Signature Realms
          </h2>
        </div>

        {/* Cards Grid with Ocean Styling & Explicit Heights for Rock-Solid Mobile Rendering */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Cultural Wonders */}
          <div 
            onClick={() => onSelectCategory && onSelectCategory('cultural')}
            className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(16,106,124,0.08)] hover:shadow-[0_20px_45px_rgba(16,106,124,0.18)] transition-all duration-300 border border-[#CDE3E9] hover:border-[#B8863D]/70 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
          >
            {/* Image Container with explicit height to guarantee rendering across mobile WebKit */}
            <div className="relative w-full h-52 sm:h-56 md:h-auto md:aspect-[16/10] min-h-[190px] overflow-hidden bg-slate-900">
              <img
                src={culturalTriangleImg}
                alt="Cultural Wonders - Ancient Sigiriya & Temples"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                decoding="async"
              />
              {/* Oceanic Tag Badge */}
              <div className="absolute top-3 left-3 bg-[#0C2340]/85 backdrop-blur-xs text-[#E5A83B] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md font-medium border border-white/20">
                Heritage & Lakes
              </div>
              {/* Floating Center Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#B8863D] border-2 border-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <TempleStupaIcon />
              </div>
            </div>

            <div className="pt-8 pb-6 px-6 text-center flex-grow flex flex-col justify-center">
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#0C2340] font-semibold mb-1 group-hover:text-[#B8863D] transition-colors">
                Cultural Wonders
              </h3>
              <p className="font-serif-luxury text-sm text-[#4E6277] italic font-light mb-3">
                Ancient cities. Timeless heritage.
              </p>
              <div className="flex items-center justify-center gap-1 text-[11px] font-medium text-[#B8863D] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Cultural Expeditions</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Card 2: Wildlife & Nature */}
          <div 
            onClick={() => onSelectCategory && onSelectCategory('wildlife')}
            className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(16,106,124,0.08)] hover:shadow-[0_20px_45px_rgba(16,106,124,0.18)] transition-all duration-300 border border-[#CDE3E9] hover:border-[#2C7A58]/70 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
          >
            {/* Image Container with explicit height to guarantee rendering across mobile WebKit */}
            <div className="relative w-full h-52 sm:h-56 md:h-auto md:aspect-[16/10] min-h-[190px] overflow-hidden bg-slate-900">
              <img
                src={wildlifeSafariImg}
                alt="Wildlife & Nature - Elephants & Safari"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                decoding="async"
              />
              {/* Oceanic Tag Badge */}
              <div className="absolute top-3 left-3 bg-[#0C2340]/85 backdrop-blur-xs text-[#48D19B] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md font-medium border border-white/20">
                Rivers & Wild Frontiers
              </div>
              {/* Floating Center Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#2C7A58] border-2 border-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <ElephantIcon />
              </div>
            </div>

            <div className="pt-8 pb-6 px-6 text-center flex-grow flex flex-col justify-center">
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#0C2340] font-semibold mb-1 group-hover:text-[#2C7A58] transition-colors">
                Wildlife & Nature
              </h3>
              <p className="font-serif-luxury text-sm text-[#4E6277] italic font-light mb-3">
                Extraordinary encounters. Untouched beauty.
              </p>
              <div className="flex items-center justify-center gap-1 text-[11px] font-medium text-[#2C7A58] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Wildlife Expeditions</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Card 3: Coastal Escapes */}
          <div 
            onClick={() => onSelectCategory && onSelectCategory('coastal')}
            className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(16,106,124,0.08)] hover:shadow-[0_20px_45px_rgba(16,106,124,0.18)] transition-all duration-300 border border-[#CDE3E9] hover:border-[#169BA2]/70 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
          >
            {/* Image Container with explicit height to guarantee rendering across mobile WebKit */}
            <div className="relative w-full h-52 sm:h-56 md:h-auto md:aspect-[16/10] min-h-[190px] overflow-hidden bg-slate-900">
              <img
                src={southernBeachesImg}
                alt="Coastal Escapes - Turquoise Ocean & Palms"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                decoding="async"
              />
              {/* Oceanic Tag Badge */}
              <div className="absolute top-3 left-3 bg-[#0C2340]/85 backdrop-blur-xs text-[#38BDF8] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md font-medium border border-white/20">
                Sapphire Seas & Reefs
              </div>
              {/* Floating Center Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#169BA2] border-2 border-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <Waves className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="pt-8 pb-6 px-6 text-center flex-grow flex flex-col justify-center">
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#0C2340] font-semibold mb-1 group-hover:text-[#169BA2] transition-colors">
                Coastal Escapes
              </h3>
              <p className="font-serif-luxury text-sm text-[#4E6277] italic font-light mb-3">
                Sun. Sea. Serenity.
              </p>
              <div className="flex items-center justify-center gap-1 text-[11px] font-medium text-[#169BA2] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Coastal Expeditions</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

        </div>

        {/* Ocean Wave Transition Divider into Next Section */}
        <div className="absolute -bottom-1 left-0 right-0 pointer-events-none z-10">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-10 sm:h-14 block"
          >
            <path
              d="M0,60 L0,20 C360,5 720,35 1080,10 C1260,0 1380,15 1440,20 L1440,60 Z"
              fill="#07131F"
            />
            <path
              d="M0,20 C360,5 720,35 1080,10 C1260,0 1380,15 1440,20"
              stroke="#106A7C"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              fill="none"
            />
          </svg>
        </div>

      </section>

    </div>
  );
};
