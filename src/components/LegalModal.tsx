import React from 'react';
import { X, ShieldCheck, HeartHandshake, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'pledge' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#081827] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-[#06121E]">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#E5A83B]" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-[#E5A83B]" />}
            {type === 'pledge' && <HeartHandshake className="w-5 h-5 text-[#34D399]" />}
            <h2 className="font-serif-luxury text-xl sm:text-2xl text-white font-medium">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms of Booking & Discretion'}
              {type === 'pledge' && 'Responsible Tourism Pledge'}
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

        <div className="overflow-y-auto p-6 sm:p-8 space-y-4 text-xs text-slate-300 font-light leading-relaxed flex-grow">
          {type === 'privacy' && (
            <>
              <p>
                At Ocean Pearl Travel (Pvt) Ltd, we maintain the highest standards of confidentiality for our international clientele. We collect only the information necessary to fulfill custom travel itineraries, secure national park wildlife permits, and book private luxury boutique villas.
              </p>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider pt-2">
                1. Information Collection & Usage
              </h4>
              <p>
                Names, passport details (strictly for wildlife park and heritage permits), and dietary preferences are handled exclusively by your dedicated trip manager and never shared with third-party advertisers.
              </p>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider pt-2">
                2. Encrypted Payments
              </h4>
              <p>
                All international payments are settled through bank-grade international payment gateways supporting direct SWIFT wire transfers or PCI-DSS certified credit card processors.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                Ocean Pearl Travel operates as an SLTDA-licensed boutique tour operator under registration in Negombo, Sri Lanka.
              </p>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider pt-2">
                1. Bespoke Itinerary Customization
              </h4>
              <p>
                Initial custom itinerary proposals are provided complimentary without obligation. Once you approve the final route, a 25% deposit secures your private executive vehicle, licensed chauffeur, and boutique accommodations.
              </p>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider pt-2">
                2. Flexible Rescheduling
              </h4>
              <p>
                We understand international flight schedules can shift. Ocean Pearl allows flexible date transfers up to 21 days prior to arrival without penalty, subject to boutique lodge availability.
              </p>
            </>
          )}

          {type === 'pledge' && (
            <>
              <p>
                Sri Lanka’s delicate ecosystems, wild elephant corridors, and pristine coral reefs are national treasures. Ocean Pearl Travel enforces a strict Code of Ethical Travel:
              </p>
              <ul className="list-disc pl-5 space-y-2 pt-2">
                <li>
                  <strong className="text-white">Strict Wildlife Distance:</strong> We adhere strictly to national park regulations in Yala and Wilpattu, never crowding leopards or blocking animal corridors.
                </li>
                <li>
                  <strong className="text-white">Direct Local Economy:</strong> We hire local naturalists, tea artisans, and village boatmen at above-market ethical wages.
                </li>
                <li>
                  <strong className="text-white">Single-Use Plastic Ban:</strong> Chauffeur vehicles provide refillable glass spring water bottles and cool cotton towels.
                </li>
              </ul>
            </>
          )}
        </div>

        <div className="px-6 py-4 border-t border-slate-800 bg-[#06121E] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#E5A83B] text-slate-950 font-semibold px-5 py-2 rounded-full text-xs tracking-wider uppercase"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
