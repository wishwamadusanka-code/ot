/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationsSection } from './components/DestinationsSection';
import { CuratedToursSection } from './components/CuratedToursSection';
import { TourAlbumSection } from './components/TourAlbumSection';
import { WhyTravelSection } from './components/WhyTravelSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

import { DestinationModal } from './components/DestinationModal';
import { CuratedToursModal } from './components/CuratedToursModal';
import { TourAlbumModal } from './components/TourAlbumModal';
import { ExperiencesModal } from './components/ExperiencesModal';
import { HeritageModal } from './components/HeritageModal';
import { GuestStoriesModal } from './components/GuestStoriesModal';
import { ConciergeModal } from './components/ConciergeModal';
import { TripPlannerModal } from './components/TripPlannerModal';
import { LegalModal } from './components/LegalModal';
import { WhatsAppPopup } from './components/WhatsAppPopup';

import { Destination } from './types';
import { DESTINATIONS } from './data/travelData';
import { ORIGINAL_TOUR_PHOTOS } from './data/tourPhotosData';

export default function App() {
  // Modal states
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isCuratedToursOpen, setIsCuratedToursOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);
  const [isExperiencesOpen, setIsExperiencesOpen] = useState(false);
  const [isHeritageOpen, setIsHeritageOpen] = useState(false);
  const [isStoriesOpen, setIsStoriesOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'pledge' | null>(null);

  // Original Tour Photos Album states
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Pre-fill parameters for trip planner
  const [plannerDestination, setPlannerDestination] = useState<string | undefined>(undefined);
  const [plannerTour, setPlannerTour] = useState<string | undefined>(undefined);

  const handleOpenTripPlanner = (dest?: string, tour?: string) => {
    setPlannerDestination(dest);
    setPlannerTour(tour);
    setIsTripPlannerOpen(true);
  };

  const handleOpenCuratedToursWithSelection = (tourId?: string) => {
    setSelectedTourId(tourId || null);
    setIsCuratedToursOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07131F] text-slate-100 font-sans selection:bg-[#E5A83B] selection:text-[#07131F]">
      {/* Top Floating Luxury Header Navigation */}
      <Navbar
        onOpenTripPlanner={() => handleOpenTripPlanner()}
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onSelectNav={handleScrollToSection}
        onOpenCuratedTours={() => handleOpenCuratedToursWithSelection()}
        onOpenExperiences={() => setIsExperiencesOpen(true)}
        onOpenHeritage={() => setIsHeritageOpen(true)}
        onOpenStories={() => setIsStoriesOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Section matching User Mockup */}
        <Hero
          onExploreTours={() => {
            const el = document.getElementById('tours');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              handleOpenCuratedToursWithSelection();
            }
          }}
          onSelectCategory={(category) => {
            if (category === 'cultural') {
              const dest = DESTINATIONS.find((d) => d.id === 'cultural-triangle');
              if (dest) setSelectedDestination(dest);
            } else if (category === 'wildlife') {
              const dest = DESTINATIONS.find((d) => d.id === 'wildlife-safari');
              if (dest) setSelectedDestination(dest);
            } else if (category === 'coastal') {
              const dest = DESTINATIONS.find((d) => d.id === 'southern-beaches');
              if (dest) setSelectedDestination(dest);
            }
          }}
        />

        {/* Section 2: Iconic Destinations */}
        <DestinationsSection
          onSelectDestination={(dest) => setSelectedDestination(dest)}
        />

        {/* Section 3: Curated Tours with Prominent Interactive Tabs */}
        <CuratedToursSection
          onOpenTourModal={(tourId) => handleOpenCuratedToursWithSelection(tourId)}
          onPlanTripWithTour={(tourTitle) => handleOpenTripPlanner(undefined, tourTitle)}
        />

        {/* Section 4: Authentic Original Tour Photos Album */}
        <TourAlbumSection
          photos={ORIGINAL_TOUR_PHOTOS}
          onOpenPhotoModal={(idx) => {
            setSelectedPhotoIndex(idx);
            setIsPhotoModalOpen(true);
          }}
        />

        {/* Section 5: Why Travel With Us */}
        <WhyTravelSection />

        {/* Section 6: Guest Stories */}
        <TestimonialsSection
          onOpenAllReviews={() => setIsStoriesOpen(true)}
        />

        {/* Section 7: Call to Action Banner */}
        <CtaBanner
          onPlanTrip={() => handleOpenTripPlanner()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenHeritage={() => setIsHeritageOpen(true)}
        onOpenTour={(tourId) => handleOpenCuratedToursWithSelection(tourId)}
        onOpenConcierge={() => setIsConciergeOpen(true)}
        onOpenTripPlanner={() => handleOpenTripPlanner()}
        onOpenModal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Modal Overlays */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanWithDestination={(destName) => handleOpenTripPlanner(destName)}
      />

      <CuratedToursModal
        isOpen={isCuratedToursOpen}
        onClose={() => setIsCuratedToursOpen(false)}
        selectedTourId={selectedTourId}
        onBookTour={(tourTitle) => handleOpenTripPlanner(undefined, tourTitle)}
      />

      {/* Tour Photos Album Modal */}
      <TourAlbumModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        photos={ORIGINAL_TOUR_PHOTOS}
        currentPhotoIndex={selectedPhotoIndex}
        onSelectIndex={(idx) => setSelectedPhotoIndex(idx)}
        onPlanTrip={(tourTitle) => handleOpenTripPlanner(undefined, tourTitle)}
      />

      <ExperiencesModal
        isOpen={isExperiencesOpen}
        onClose={() => setIsExperiencesOpen(false)}
        onSelectExperience={(title: string) => handleOpenTripPlanner(undefined, title)}
      />

      <HeritageModal
        isOpen={isHeritageOpen}
        onClose={() => setIsHeritageOpen(false)}
        onPlanTrip={() => {
          setIsHeritageOpen(false);
          handleOpenTripPlanner();
        }}
      />

      <GuestStoriesModal
        isOpen={isStoriesOpen}
        onClose={() => setIsStoriesOpen(false)}
        onPlanTrip={() => {
          setIsStoriesOpen(false);
          handleOpenTripPlanner();
        }}
      />

      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />

      <TripPlannerModal
        isOpen={isTripPlannerOpen}
        onClose={() => setIsTripPlannerOpen(false)}
        preselectedDestination={plannerDestination}
        preselectedTour={plannerTour}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Interactive WhatsApp Pop-up */}
      <WhatsAppPopup />
    </div>
  );
}
