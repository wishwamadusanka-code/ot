import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { oceanPearlEmblem } from '../data/travelData';

export const WhatsAppPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  // Polite delay nudge to catch attention without being intrusive
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = (messageToSend?: string) => {
    const text = messageToSend || customMessage || "Hello Vishwa, I'm interested in planning a customized tour with Ocean Pearl Travels.";
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/94775507506?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const quickPrompts = [
    '✨ Tailor-made 10-day Sri Lanka Itinerary',
    '🚗 Private Luxury Chauffeur & Van Hire',
    '🌊 Lagoon Safari & Southern Beach Villas',
    '🦁 Sigiriya, Tea Country & Wildlife Safari'
  ];

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Nudge Tooltip (when closed) */}
      {!isOpen && showTooltip && (
        <div className="mb-3 max-w-xs bg-[#071E36]/95 backdrop-blur-md border border-[#14B8A6]/40 text-slate-100 rounded-2xl p-3 shadow-2xl animate-in slide-in-from-bottom-2 duration-300 flex items-start gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0 animate-ping" />
          <div className="flex-1 text-xs">
            <div className="font-semibold text-[#F3BA4F] flex items-center gap-1">
              <span>Vishwa Madusanka</span>
              <span className="text-[10px] text-emerald-400 font-mono">· Online</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-snug mt-0.5">
              Ayubowan! 🙏 Chat directly on WhatsApp for instant tour planning.
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white p-0.5 transition-colors cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Expanded Luxury WhatsApp Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[92vw] sm:w-[360px] bg-[#061526] border border-[#14B8A6]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          
          {/* Header with Ocean Pearl Green/Azure theme */}
          <div className="bg-gradient-to-r from-[#072440] via-[#0A335C] to-[#0D4478] p-4 border-b border-[#14B8A6]/30 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#14B8A6] to-[#F3BA4F] shadow-md flex-shrink-0">
                <img
                  src={oceanPearlEmblem}
                  alt="Ocean Pearl Travels Logo"
                  className="w-full h-full object-cover rounded-full bg-[#05111E]"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#072440]" />
              </div>
              <div>
                <h4 className="font-serif-luxury text-base font-semibold text-white tracking-wide leading-tight">
                  Ocean Pearl Travels
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Vishwa (Founder) · Online</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-3.5 bg-gradient-to-b from-[#061526] via-[#05111E] to-[#040C16] text-xs">
            
            {/* Incoming Message Bubble */}
            <div className="bg-[#0A2644] border border-[#14B8A6]/25 rounded-2xl rounded-tl-xs p-3 text-slate-200 shadow-md">
              <p className="font-light leading-relaxed">
                <strong className="font-medium text-[#F3BA4F]">Ayubowan! 🙏</strong> Welcome to Ocean Pearl Travels.
              </p>
              <p className="font-light leading-relaxed mt-1 text-slate-300">
                I would love to help you design a private tailor-made Sri Lanka journey. How can I assist you today?
              </p>
              <span className="text-[9px] text-slate-400 block text-right mt-1 font-mono">
                Typically replies in minutes
              </span>
            </div>

            {/* Quick Questions Chips */}
            <div>
              <div className="text-[10px] uppercase font-semibold text-[#14B8A6] tracking-wider mb-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#F3BA4F]" />
                <span>Suggested Questions</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-left bg-[#0A1F36]/90 hover:bg-[#0E2E50] border border-slate-700/80 hover:border-[#14B8A6]/60 text-slate-200 hover:text-white p-2 rounded-xl text-[11px] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="truncate pr-2">{prompt}</span>
                    <span className="text-[#14B8A6] group-hover:translate-x-0.5 transition-transform font-bold text-xs">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input Message */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message or dates..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="flex-1 bg-[#091D33] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#14B8A6]"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-2.5 rounded-xl transition-all shadow-md flex items-center justify-center cursor-pointer active:scale-95"
                  aria-label="Send message to WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-[#030A12] border-t border-slate-800/60 text-center">
            <span className="text-[10px] text-slate-400">
              Direct official WhatsApp of Ocean Pearl Travels
            </span>
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ring-4 ring-[#25D366]/20"
        aria-label="Open WhatsApp live chat"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        <span className="hidden sm:inline font-semibold text-xs tracking-wider uppercase">
          Chat on WhatsApp
        </span>

        {/* Pulse badge */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#07131F]" />
      </button>

    </div>
  );
};
