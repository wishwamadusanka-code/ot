import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDestination?: string;
  preselectedTour?: string;
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  preselectedDestination,
  preselectedTour
}) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [duration, setDuration] = useState('10-14 Days');
  const [travelStyle, setTravelStyle] = useState('Couples & Honeymoon');
  const [selectedRegions, setSelectedRegions] = useState<string[]>(() => {
    return preselectedDestination ? [preselectedDestination] : ['Southern Beaches', 'Hill Country'];
  });
  const [selectedStays, setSelectedStays] = useState<string[]>([
    'Boutique / Luxury (4–5★)'
  ]);
  const [travelMonth, setTravelMonth] = useState('November – February (High Season)');
  const [guestsCount, setGuestsCount] = useState(2);

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    specialWishes: preselectedTour ? `Interested in booking or adapting: ${preselectedTour}` : ''
  });

  if (!isOpen) return null;

  const toggleRegion = (region: string) => {
    if (selectedRegions.includes(region)) {
      if (selectedRegions.length > 1) {
        setSelectedRegions(selectedRegions.filter((r) => r !== region));
      }
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  const toggleStay = (stay: string) => {
    if (selectedStays.includes(stay)) {
      if (selectedStays.length > 1) {
        setSelectedStays(selectedStays.filter((s) => s !== stay));
      }
    } else {
      setSelectedStays([...selectedStays, stay]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#081827] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-[#06121E]">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#E5A83B] block">
              Bespoke Journey Builder
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
              Plan Your Sri Lanka Expedition
            </h2>
          </div>
          <button
            onClick={resetAndClose}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps Progress Indicator (if not submitted) */}
        {!submitted && (
          <div className="px-6 py-3 bg-[#0A1D2F] border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 1 ? 'bg-[#E5A83B] text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                1
              </span>
              <span className={step === 1 ? 'text-white font-medium' : ''}>Pace & Style</span>
            </div>
            <div className="h-[1px] w-8 bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 2 ? 'bg-[#E5A83B] text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                2
              </span>
              <span className={step === 2 ? 'text-white font-medium' : ''}>Regions & Stays</span>
            </div>
            <div className="h-[1px] w-8 bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 3 ? 'bg-[#E5A83B] text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                3
              </span>
              <span className={step === 3 ? 'text-white font-medium' : ''}>Contact Details</span>
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-grow">
          {submitted ? (
            <div className="space-y-6 text-center py-6 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#106A7C]/30 text-[#34D399] flex items-center justify-center mx-auto border border-[#145C6C]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif-luxury text-3xl text-white font-medium">
                  Itinerary Proposal Requested
                </h3>
                <p className="text-slate-300 text-sm font-light max-w-lg mx-auto mt-2 leading-relaxed">
                  Thank you, <strong className="text-white">{contactInfo.name || 'Dear Guest'}</strong>. Founder Vishwa Madusanka and our senior concierge team will personally review your preferences and craft a custom day-by-day proposal within 24 hours.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#0A1A2A] border border-slate-800 rounded-xl p-5 text-left max-w-lg mx-auto text-xs space-y-2.5">
                <div className="text-[10px] tracking-widest uppercase text-[#E5A83B] font-semibold border-b border-slate-800 pb-2">
                  Your Bespoke Trip Blueprint
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Duration & Guests:</span>
                  <span className="text-white font-medium">{duration} · {guestsCount} Guests</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Travel Style:</span>
                  <span className="text-white font-medium">{travelStyle}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Selected Regions:</span>
                  <span className="text-white font-medium text-right max-w-xs">{selectedRegions.join(', ')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Accommodation Type:</span>
                  <span className="text-white font-medium text-right max-w-xs">{selectedStays.join(', ')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Chauffeur Service:</span>
                  <span className="text-[#E5A83B] font-medium">Qualified Chauffeurs</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/94775507506?text=${encodeURIComponent(
                    `Hello Vishwa! I just sent a tour inquiry for ${duration} (${selectedRegions.join(', ')}). My name is ${contactInfo.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#106A7C] hover:bg-[#137b90] text-white font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Fast Track via WhatsApp
                </a>
                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs tracking-wider uppercase px-6 py-3 rounded-full transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-white block mb-3">
                      1. How long would you like to travel?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['7–9 Days', '10–14 Days', '14–18 Days', '18+ Days'].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDuration(d)}
                          className={`p-3 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                            duration === d
                              ? 'bg-[#E5A83B] text-slate-950 font-semibold border-[#E5A83B] shadow'
                              : 'bg-[#0A1A2A] border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-white block mb-3">
                      2. Travel Party & Guests Count
                    </label>
                    <div className="flex items-center gap-4 bg-[#0A1A2A] p-4 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-300">Number of travellers:</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                          className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold"
                        >
                          -
                        </button>
                        <span className="text-white font-semibold text-sm w-6 text-center">{guestsCount}</span>
                        <button
                          type="button"
                          onClick={() => setGuestsCount(guestsCount + 1)}
                          className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-white block mb-3">
                      3. What is the spirit of your journey?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { title: 'Couples & Honeymoon', desc: 'Secluded villas, romantic dining, spa retreats' },
                        { title: 'Wildlife & Photography', desc: 'Dawn leopard tracking, whale cruises, senior naturalists' },
                        { title: 'Ceylon Heritage & Trains', desc: 'Ancient UNESCO dynastic ruins, tea estates, vintage train' },
                        { title: 'Family Expedition', desc: 'Gentle pace, elephant sanctuaries, calm swimmable beaches' },
                        { title: 'Ayurvedic Wellness', desc: 'Holistic healing, yoga pavilions, organic farm cuisine' }
                      ].map((style) => (
                        <div
                          key={style.title}
                          onClick={() => setTravelStyle(style.title)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                            travelStyle === style.title
                              ? 'bg-[#0E283E] border-[#E5A83B] shadow-sm'
                              : 'bg-[#0A1A2A] border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <div className="text-white font-medium text-xs font-serif-luxury">{style.title}</div>
                          <div className="text-slate-400 text-[11px] font-light mt-0.5">{style.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-[#E5A83B] hover:bg-[#d4952b] text-slate-950 font-semibold px-6 py-3 rounded-full text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      Next: Choose Regions
                      <ArrowRight className="w-4 h-4 text-slate-900" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-white block mb-1">
                      1. Which regions would you love to include?
                    </label>
                    <span className="text-[11px] text-slate-400 block mb-3">
                      Select one or multiple regions:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {DESTINATIONS.map((dest) => {
                        const isSelected = selectedRegions.includes(dest.name);
                        return (
                          <div
                            key={dest.id}
                            onClick={() => toggleRegion(dest.name)}
                            className={`p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-[#0E283E] border-[#E5A83B]'
                                : 'bg-[#0A1A2A] border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div>
                              <div className="text-white font-medium text-xs font-serif-luxury">{dest.name}</div>
                              <div className="text-slate-400 text-[11px] font-light">{dest.coordinates}</div>
                            </div>
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${isSelected ? 'bg-[#E5A83B] border-[#E5A83B] text-slate-950' : 'border-slate-700'}`}>
                              {isSelected && <Check className="w-3 h-3" />}
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* Extra: East Coast / Pasikuda */}
                      <div
                        onClick={() => toggleRegion('Trincomalee & East Coast')}
                        className={`p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                          selectedRegions.includes('Trincomalee & East Coast')
                            ? 'bg-[#0E283E] border-[#E5A83B]'
                            : 'bg-[#0A1A2A] border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div>
                          <div className="text-white font-medium text-xs font-serif-luxury">Trincomalee & East Coast</div>
                          <div className="text-slate-400 text-[11px] font-light">Pigeon Island · Snorkeling & Dolphins</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${selectedRegions.includes('Trincomalee & East Coast') ? 'bg-[#E5A83B] border-[#E5A83B] text-slate-950' : 'border-slate-700'}`}>
                          {selectedRegions.includes('Trincomalee & East Coast') && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-white block mb-1">
                      2. Preferred Style of Accommodation
                    </label>
                    <span className="text-[11px] text-slate-400 block mb-3">
                      Select your preferred accommodation category:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      {[
                        { title: 'Budget / Guesthouse', desc: 'Charming guesthouses, homestays & local eco-lodges' },
                        { title: 'Comfort (3★)', desc: 'Standard 3-star hotels, reliable amenities & relaxed comfort' },
                        { title: 'Boutique / Luxury (4–5★)', desc: 'Handpicked 4–5 star boutique villas, tea bungalows & luxury resorts' },
                        { title: 'A Mix', desc: 'A custom balance tailored by location and experience' }
                      ].map((stay) => {
                        const isChecked = selectedStays.includes(stay.title);
                        return (
                          <div
                            key={stay.title}
                            onClick={() => toggleStay(stay.title)}
                            className={`p-3.5 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-[#0E283E] border-[#E5A83B] text-white shadow-sm'
                                : 'bg-[#0A1A2A] border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <div>
                              <div className="font-medium text-white font-serif-luxury text-sm">{stay.title}</div>
                              <div className="text-[11px] text-slate-400 font-light mt-0.5">{stay.desc}</div>
                            </div>
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center border flex-shrink-0 ml-3 ${isChecked ? 'bg-[#E5A83B] border-[#E5A83B] text-slate-950 font-bold' : 'border-slate-700'}`}>
                              {isChecked && <Check className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 uppercase tracking-wider py-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-[#E5A83B] hover:bg-[#d4952b] text-slate-950 font-semibold px-6 py-3 rounded-full text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      Next: Your Details
                      <ArrowRight className="w-4 h-4 text-slate-900" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs text-slate-300 font-light pb-2">
                    Enter your details below. We guarantee 100% private discretion — no spam, no obligation.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lord & Lady Hamilton"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="w-full bg-[#0A1A2A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A83B]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. name@domain.com"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className="w-full bg-[#0A1A2A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A83B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 7911 123456"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className="w-full bg-[#0A1A2A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A83B]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                        Estimated Travel Period
                      </label>
                      <select
                        value={travelMonth}
                        onChange={(e) => setTravelMonth(e.target.value)}
                        className="w-full bg-[#0A1A2A] border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5A83B]"
                      >
                        <option>Next 30 Days (Last Minute)</option>
                        <option>November – February (High Season)</option>
                        <option>March – April (Spring & Safaris)</option>
                        <option>May – August (East Coast & Gathering)</option>
                        <option>September – October</option>
                        <option>Dates Flexible / Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                      Special Wishes, Milestones, or Dietary Preferences
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Celebrating 10th anniversary, prefer slow pace, vegetarian fine dining, require child seat..."
                      value={contactInfo.specialWishes}
                      onChange={(e) => setContactInfo({ ...contactInfo, specialWishes: e.target.value })}
                      className="w-full bg-[#0A1A2A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A83B]"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 uppercase tracking-wider py-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#E5A83B] hover:bg-[#d4952b] text-slate-950 font-semibold px-8 py-3 rounded-full text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-slate-900" />
                      Request Complimentary Itinerary
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
