import { Destination, CuratedTour, Experience, Testimonial } from '../types';

import southernBeachesImg from '../assets/images/destination_southern_beaches_1791195266662.jpg';
import hillCountryImg from '../assets/images/destination_hill_country_1791195281360.jpg';
import culturalTriangleImg from '../assets/images/destination_cultural_triangle_1791195292291.jpg';
import wildlifeSafariImg from '../assets/images/destination_wildlife_safari_1791195302507.jpg';

export { default as oceanPearlEmblem } from '../assets/images/ocean_pearl_official_logo_1791195731610.jpg';
export { default as homeOceanBackground } from '../assets/images/home_ocean_background_1791195719020.jpg';
export { default as sigiriyaHeroImg } from '../assets/images/sigiriya_hero_panoramic_1791201062581.jpg';
export { southernBeachesImg, hillCountryImg, culturalTriangleImg, wildlifeSafariImg };


export const DESTINATIONS: Destination[] = [
  {
    id: 'southern-beaches',
    name: 'Southern Beaches',
    tagline: 'Coastal Elegance & Sapphire Seas',
    description:
      'Golden sand, turquoise surf, and luxury whale watching cruises from Mirissa to Unawatuna and Galle Fort.',
    actionText: 'EXPLORE COASTAL',
    image: southernBeachesImg,
    bestMonths: 'November – April',
    recommendedDuration: '4 – 6 Nights',
    highlights: [
      'Private sunset catamaran sailing in Mirissa with marine biologists',
      'VIP walking tour through 17th-century UNESCO Galle Dutch Fort',
      'Secluded beachfront villas in Tangalle and Thalpe with private chefs',
      'Authentic cinnamon peelers estate visit & artisanal gin tasting'
    ],
    luxuryStays: [
      'Amanwella (Tangalle)',
      'Amangalla (Galle Fort)',
      'Cape Weligama',
      'The Fortress Resort & Spa (Koggala)'
    ],
    coordinates: 'Galle · Mirissa · Weligama · Tangalle'
  },
  {
    id: 'hill-country',
    name: 'Hill Country',
    tagline: 'Misty Peaks & Colonial Tea Heritage',
    description:
      'Verdant tea estates, misty waterfalls, colonial bungalows, and the breathtaking Kandy–Ella observation train.',
    actionText: 'HIGHLAND ESCAPES',
    image: hillCountryImg,
    bestMonths: 'December – May',
    recommendedDuration: '3 – 5 Nights',
    highlights: [
      'Reserved 1st-class vintage observation car on the scenic Ella railway',
      'Private Ceylon tea tasting with resident master tea planter',
      'Sunrise hike to Little Adam’s Peak and iconic Nine Arch Bridge',
      'Afternoon colonial high tea on emerald hillside croquet lawns'
    ],
    luxuryStays: [
      'Ceylon Tea Trails (Hatton)',
      'Nine Skies (Ella by Teardrop)',
      'W15 Glenfall Reach (Nuwara Eliya)',
      'Living Heritage Koslanda'
    ],
    coordinates: 'Kandy · Hatton · Nuwara Eliya · Ella'
  },
  {
    id: 'cultural-triangle',
    name: 'Cultural Triangle',
    tagline: 'Ancient Dynasties & Sky Fortresses',
    description:
      'Sigiriya fortress in the sky, mystical Dambulla cave temples, and sacred ancient ruins of Anuradhapura.',
    actionText: 'ANCIENT WONDERS',
    image: culturalTriangleImg,
    bestMonths: 'Year-round (Best: January – September)',
    recommendedDuration: '3 – 4 Nights',
    highlights: [
      'Exclusive dawn access to Sigiriya Lion Rock before public crowds',
      'Hot air balloon flight at sunrise over Kandalama reservoir and temples',
      'Private archaeologist-led walking exploration of Polonnaruwa ruins',
      'Sacred evening Buddhist ceremony at Anuradhapura Jaya Sri Maha Bodhi'
    ],
    luxuryStays: [
      'Heritance Kandalama (Geoffrey Bawa Masterpiece)',
      'Water Garden Sigiriya',
      'Uga Ulagalla (Anuradhapura)',
      'Jetwing Vil Uyana'
    ],
    coordinates: 'Sigiriya · Dambulla · Anuradhapura · Polonnaruwa'
  },
  {
    id: 'wildlife-safaris',
    name: 'Wildlife Safaris',
    tagline: 'Untamed Jungles & Sovereign Leopards',
    description:
      'Exclusive leopard expeditions in Yala and majestic elephant gathering encounters across Udawalawe & Minneriya.',
    actionText: 'WILD SAFARI',
    image: wildlifeSafariImg,
    bestMonths: 'February – October',
    recommendedDuration: '3 – 4 Nights',
    highlights: [
      'Customized 4x4 open-top safari vehicle with senior naturalist tracker',
      'Dawn & dusk tracking of Panthera pardus kotiya (Sri Lankan Leopard)',
      'Witness the Great Elephant Gathering (300+ elephants) in Minneriya',
      'Luxury glamping with fine dining beneath starlit safari skies'
    ],
    luxuryStays: [
      'Wild Coast Tented Lodge (Yala)',
      'Chena Huts by Uga Escapes (Yala)',
      'Kulu Safaris Luxury Mobile Camp',
      'Leopard Safari Camp by KK Collection'
    ],
    coordinates: 'Yala · Udawalawe · Minneriya · Wilpattu'
  }
];

export const CURATED_TOURS: CuratedTour[] = [
  {
    id: 'grand-ceylon',
    title: 'The Grand Ceylon Expedition',
    tagline: 'The definitive 14-day ultra-luxury private journey',
    duration: '14 Days / 13 Nights',
    pace: 'Relaxed & Immersive',
    regions: ['Cultural Triangle', 'Kandy & Hill Country', 'Yala National Park', 'Galle & Southern Coast'],
    image: culturalTriangleImg,
    overview:
      'A seamless masterpiece capturing Sri Lanka’s ancient UNESCO kingdoms, private tea estates, wilderness leopard tracking, and pristine southern oceanfront villas.',
    highlights: [
      'Dawn ascent of 5th-century Sigiriya Rock fortress with private archaeologist',
      'First-class scenic observation rail journey through misty tea country',
      'Exclusive dawn & dusk private naturalist game drives in Yala National Park',
      'Private ocean catamaran cruise & 17th-century Galle Dutch Fort sunset walk',
      'Bespoke hand-picked stays in heritage tea planter bungalows and ocean villas'
    ],
    inclusions: [
      'Dedicated English-speaking Qualified Chauffeur',
      'Handpicked 5-Star Boutique & Relais & Châteaux accommodations with breakfast & dinner',
      'All national park private safari jeeps, trackers, and entrance permits included',
      'Domestic scenic train observation seats and private tea estate permits',
      '24/7 Concierge line directly overseen by founder Vishwa Madusanka'
    ]
  },
  {
    id: 'highland-tea-rail',
    title: 'Ceylon Tea & Highland Rails',
    tagline: 'Colonial romance, mist-cloaked peaks, and gourmet gastronomy',
    duration: '9 Days / 8 Nights',
    pace: 'Serene & Cultural',
    regions: ['Colombo', 'Kandy', 'Hatton Tea Valleys', 'Ella'],
    image: hillCountryImg,
    overview:
      'Designed for lovers of vintage trains, misty mountain panoramas, and the refined serenity of British colonial tea planters’ estates.',
    highlights: [
      'Private masterclass and tasting of rare Silver Tip teas with resident tea master',
      'Iconic Ella Nine Arch Bridge & Little Adam’s Peak private sunrise walk',
      'Private temple blessings in sacred Kandy and artisanal craft workshops',
      'Afternoon high tea served on emerald hillside croquet lawns'
    ],
    inclusions: [
      'Private air-conditioned luxury travel with dedicated Qualified Chauffeur',
      'Curated stays in boutique tea estate bungalows',
      'Private masterclass on single-origin black, green, and silver tip teas',
      'All site permits, heritage passes, and VIP train seating'
    ]
  },
  {
    id: 'wild-leopards-coast',
    title: 'Wild Leopards & Sapphire Coast',
    tagline: 'Thrill of the wild paired with tranquil tropical luxury',
    duration: '10 Days / 9 Nights',
    pace: 'Active Wildlife & Coastal Relaxation',
    regions: ['Udawalawe', 'Yala National Park', 'Mirissa', 'Galle'],
    image: wildlifeSafariImg,
    overview:
      'Combine heart-pounding dawn leopard tracking in Yala and wild elephant herds with idyllic private coastal relaxation in southern Sri Lanka.',
    highlights: [
      'Four private game drives focusing on leopards, sloth bears, and wild elephants',
      'Exclusive private boat charter for blue whale and dolphin watching in Mirissa',
      'Sunset cocktails on the 400-year-old UNESCO Galle Fort ramparts',
      'Secluded beachfront villa relaxation with private chef dinners'
    ],
    inclusions: [
      'Private custom safari jeep with senior wildlife naturalist tracker',
      'Exclusive private boat charter for blue whale watching',
      'All luxury lodges, daily breakfast, and gourmet safari picnic lunches'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'tea-planter',
    title: 'Private Ceylon Tea Tasting with Master Planter',
    category: 'Highland Heritage',
    location: 'Hatton & Nuwara Eliya',
    duration: 'Half Day (4 Hours)',
    description:
      'Walk alongside third-generation tea master planters through 140-year-old bushes. Learn the delicate plucking of two leaves and a bud, followed by tasting rare imperial Silver Tips.',
    image: hillCountryImg,
    exclusivePerk: 'Personalized engraved Ceylon Tea wooden caddy gift box'
  },
  {
    id: 'leopard-tracking',
    title: 'Dawn Leopard Tracking with Senior Naturalist',
    category: 'Wild Expeditions',
    location: 'Yala National Park',
    duration: 'Full Day (Two Game Drives)',
    description:
      'Enter the national park gates at the crack of dawn before public jeeps. Our naturalist tracks paw prints and alarm calls of spotted deer to position you for intimate, unobtrusive leopard sightings.',
    image: wildlifeSafariImg,
    exclusivePerk: 'Complimentary high-end telephoto binocular kit & bush champagne breakfast'
  },
  {
    id: 'mirissa-catamaran',
    title: 'Private Luxury Catamaran Blue Whale Expedition',
    category: 'Coastal Adventures',
    location: 'Mirissa & Weligama Bay',
    duration: 'Morning (5 Hours)',
    description:
      'Sail into the deep southern waters where continental shelves plunge into the abyss. Encounter the largest creature to ever exist — the blue whale — along with pods of energetic spinner dolphins.',
    image: southernBeachesImg,
    exclusivePerk: 'On-board private chef preparing fresh tropical breakfast and mimosa cocktails'
  },
  {
    id: 'sigiriya-balloon',
    title: 'Sunrise Hot Air Ballooning Over Sigiriya & Lakes',
    category: 'Sky Experiences',
    location: 'Kandalama, Cultural Triangle',
    duration: 'Morning (3 Hours)',
    description:
      'Drift silently above ancient jungle canopies and glistening reservoirs as the sun illuminates the majestic silhouette of the 5th-century Sigiriya Sky Fortress.',
    image: culturalTriangleImg,
    exclusivePerk: 'Traditional champagne toast upon landing in rural paddy field'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'We couldn’t have wished for a better chauffeur and guide for our two-week circuit. Ocean Pearl Travels handled every luxury hotel check-in and private permit flawlessly.',
    author: 'ILARIA & MARCO',
    location: 'ITALY',
    rating: 5,
    tourTaken: 'The Grand Ceylon Expedition (14 Days)',
    date: 'February 2026'
  },
  {
    id: '2',
    quote:
      'If you are considering booking, do not hesitate! I did a solo journey to Sigiriya and Ella. The safety, attentiveness, and warmth of our tour team was second to none.',
    author: 'JANAIA FARRELL',
    location: 'CANADA / HONG KONG',
    rating: 5,
    tourTaken: 'Ceylon Tea & Highland Rails (9 Days)',
    date: 'January 2026'
  },
  {
    id: '3',
    quote:
      'Seamless from our first inquiry email to our airport farewell in Colombo. Highly recommended for couples seeking authentic luxury and unforgettable safari sightings.',
    author: 'DAVID & SARAH HUGHES',
    location: 'UNITED KINGDOM',
    rating: 5,
    tourTaken: 'Wild Leopards & Sapphire Coast (10 Days)',
    date: 'March 2026'
  }
];

export const WHY_US_FEATURES = [
  {
    id: 'tailor-made',
    title: 'Tailor-Made',
    description:
      'Every itinerary shaped around your personal pace, curated interests, and luxury boutique preferences.',
    iconType: 'compass'
  },
  {
    id: 'responsible',
    title: 'Responsible',
    description:
      'We work directly with local heritage communities, ethical naturalists, and low-impact eco-lodges.',
    iconType: 'heart'
  },
  {
    id: 'fair-pricing',
    title: 'Fair Pricing',
    description:
      'No hidden fees — fully transparent itemized quotes, flexible terms, and bank-grade secure international payments.',
    iconType: 'shield'
  }
];
