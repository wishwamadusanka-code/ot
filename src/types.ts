export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  actionText: string;
  image: string;
  bestMonths: string;
  recommendedDuration: string;
  highlights: string[];
  luxuryStays: string[];
  coordinates?: string;
}

export interface CuratedTour {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  pace: string;
  regions: string[];
  image: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  description: string;
  image: string;
  exclusivePerk: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  tourTaken: string;
  date: string;
}

export interface TripInquiry {
  travelers: number;
  duration: string;
  travelStyle: string;
  preferredAccommodation: string[];
  destinations: string[];
  travelMonth: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

export interface TourPhoto {
  id: string;
  originalFileName: string;
  title: string;
  category: 'Water & Safaris' | 'Highlands & Rail' | 'Cultural & Village' | 'VIP Arrivals';
  location: string;
  guests: string;
  description: string;
  highlights: string[];
  date: string;
  badge: string;
  defaultDataUrl?: string;
}
