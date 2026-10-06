import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#081827] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-[#06121E]">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#E5A83B] block">
              Direct Communication
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
              Private Concierge Desk
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

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Direct Actions Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/94775507506?text=Hello%20Ocean%20Pearl%20Travel,%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20tour%20in%20Sri%20Lanka."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A2633] hover:bg-[#0E3244] border border-[#145C6C] p-4 rounded-xl flex items-center gap-3 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#106A7C] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-white font-semibold text-xs uppercase tracking-wider block">
                  WhatsApp Direct
                </span>
                <span className="text-[#34D399] text-[11px] block">
                  Online · Instant Response
                </span>
              </div>
            </a>

            <a
              href="tel:+94775507506"
              className="bg-[#0D2235] hover:bg-[#122D47] border border-slate-700 p-4 rounded-xl flex items-center gap-3 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#E5A83B] flex items-center justify-center text-slate-950 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-white font-semibold text-xs uppercase tracking-wider block">
                  Direct Telephone
                </span>
                <span className="text-[#E5A83B] text-[11px] font-mono block">
                  +94 77 550 7506
                </span>
              </div>
            </a>

            <a
              href="https://www.tripadvisor.com/Attraction_Review-g1500185-d34253512-Reviews-Ocean_pearl_travel-Katunayake_Negombo_Western_Province.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#002B1D] hover:bg-[#003826] border border-[#00AA6C]/40 p-4 rounded-xl flex items-center gap-3 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#00AA6C] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 .42-.09.81-.25 1.17 1.42.47 2.44 1.8 2.44 3.39 0 1.93-1.57 3.5-3.5 3.5-.95 0-1.81-.38-2.44-1-.18.06-.37.1-.56.1s-.38-.04-.56-.1c-.63.62-1.49 1-2.44 1-1.93 0-3.5-1.57-3.5-3.5 0-1.59 1.02-2.92 2.44-3.39C6.09 8.81 6 8.42 6 8c0-1.66 1.34-3 3-3 .7 0 1.35.24 1.87.64.35-.09.73-.14 1.13-.14zm-4.5 7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                </svg>
              </div>
              <div>
                <span className="text-white font-semibold text-xs uppercase tracking-wider block">
                  TripAdvisor Reviews
                </span>
                <span className="text-[#00AA6C] text-[11px] font-semibold block">
                  5.0 ★★★★★ Excellent
                </span>
              </div>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61586828377320&mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A1E35] hover:bg-[#0E2845] border border-[#1877F2]/40 p-4 rounded-xl flex items-center gap-3 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <span className="text-white font-semibold text-xs uppercase tracking-wider block">
                  Official Facebook
                </span>
                <span className="text-[#60A5FA] text-[11px] block">
                  Follow Ocean Pearl Travels
                </span>
              </div>
            </a>
          </div>

          {/* Office Location & Info */}
          <div className="bg-[#07131F] p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#E5A83B] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Negombo Airport Concierge Hub:</strong>
                <p className="text-slate-400">385/13 Kularathna Road, Negombo, Sri Lanka (8 minutes from Bandaranaike International Airport for VIP arrivals & departures)</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Mail className="w-4 h-4 text-[#E5A83B] flex-shrink-0" />
              <span>
                <strong className="text-white">Email: </strong>
                <a href="mailto:info.oceanpearltravel@gmail.com" className="text-slate-300 hover:text-[#E5A83B] underline">
                  info.oceanpearltravel@gmail.com
                </a>
              </span>
            </div>
          </div>

          {/* Quick inquiry form */}
          {submitted ? (
            <div className="bg-[#0A2633] border border-[#145C6C] p-6 rounded-xl text-center space-y-3 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#106A7C]/40 text-[#34D399] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-white font-medium">
                Message Received by Vishwa Madusanka
              </h3>
              <p className="text-slate-300 text-xs font-light max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name || 'Valued Guest'}. A senior private travel specialist will review your request and reach out to you via WhatsApp or email within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#E5A83B] underline tracking-wider uppercase pt-2 cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs font-semibold tracking-wider uppercase text-white">
                Leave a Private Note for our Concierge
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#0A1A2A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A83B]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#0A1A2A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A83B]"
                />
              </div>

              <input
                type="tel"
                placeholder="WhatsApp Number (with country code, e.g., +1, +44, +61)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#0A1A2A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A83B]"
              />

              <textarea
                required
                rows={3}
                placeholder="How may we assist with your Sri Lanka journey? (Dates, destinations, questions...)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0A1A2A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A83B]"
              />

              <button
                type="submit"
                className="w-full bg-[#E5A83B] hover:bg-[#d4952b] text-slate-950 font-semibold py-3 rounded-lg text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4 text-slate-900" />
                Submit to Concierge Desk
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
