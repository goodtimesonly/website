import { PortfolioItem, MagazineIssue, Testimonial, PrintItem } from './types';

// Core bio & brand assets
import img_retrato from './assets/images/Portrait1.JPG';
import photo_magazine from './assets/images/magazine.jpg';

// Photography assets (35 unique editorial and analog frames)
import photo_pablo_01 from './assets/images/AaronFinal.jpg';
import photo_pablo_02 from './assets/images/AaronFinal-2-1.jpg';
import photo_pablo_03 from './assets/images/AaronFinal-2-2.jpg';
import photo_pablo_04 from './assets/images/AaronFinal-3-1.jpg';
import photo_pablo_05 from './assets/images/AaronFinal-3.jpg';
import photo_pablo_06 from './assets/images/AaronFinal-4.jpg';
import photo_pablo_07 from './assets/images/AaronFinal-6-1.jpg';
import photo_pablo_08 from './assets/images/AaronFinal-7.jpg';
import photo_pablo_09 from './assets/images/AaronFinal-8-1.jpg';
import photo_pablo_10 from './assets/images/AaronFinal-10-1.jpg';
import photo_pablo_11 from './assets/images/AaronFinal-11.jpg';
import photo_pablo_12 from './assets/images/AaronFinal-12.jpg';
import photo_pablo_13 from './assets/images/AaronFinal-13.jpg';
import photo_pablo_14 from './assets/images/AaronFinal-14-1.jpg';
import photo_pablo_15 from './assets/images/AaronFinal-15.jpg';
import photo_pablo_16 from './assets/images/AaronFinal-16.jpg';
import photo_pablo_17 from './assets/images/sd.jpg';
import photo_pablo_18 from './assets/images/AaronFinal-18-1.jpg';
import photo_pablo_19 from './assets/images/AaronFinal-19-1.jpg';
import photo_pablo_20 from './assets/images/AaronFinal-20-1.jpg';
import photo_pablo_21 from './assets/images/AaronFinal-21.jpg';
import photo_pablo_22 from './assets/images/AaronFinal-23-1.jpg';
import photo_pablo_23 from './assets/images/AaronFinal-24-1.jpg';
import photo_pablo_24 from './assets/images/AaronFinal-25-1.jpg';
import photo_pablo_25 from './assets/images/AaronFinal-26-1.jpg';
import photo_pablo_26 from './assets/images/AaronFinal-28-1.jpg';
import photo_pablo_27 from './assets/images/_dsc0265.jpg';
import photo_pablo_28 from './assets/images/_dsc0640.jpg';
import photo_pablo_29 from './assets/images/_dsc0706.jpg';
import photo_pablo_30 from './assets/images/_dsc5638.jpg';
import photo_pablo_31 from './assets/images/DSC_9414.jpg';
import photo_pablo_32 from './assets/images/_DSC9744.jpg';
import photo_pablo_33 from './assets/images/4FA68DBE-4AAD-45B2-924E-AA41CF7AF007.jpg';
import photo_pablo_34 from './assets/images/IMG_3829-1.PNG';
import photo_pablo_35 from './assets/images/img110.jpg';
import photo_javi from './assets/images/JAVI.jpg';

// Aliases for legacy and print references
const photo_dsc0706 = photo_pablo_29;
const photo_dsc0640 = photo_pablo_28;
const photo_dsc5638 = photo_pablo_30;
const photo_dsc0265 = photo_pablo_27;
const photo_4fa = photo_pablo_33;
const photo_aaron3 = photo_pablo_05;
const photo_img110 = photo_pablo_35;
const photo_aaron15 = photo_pablo_15;

export const PHOTOGRAPHER_INFO = {
  name: "Pablo",
  brand: "Good Times Only",
  tagline: "Editorial Photography & Film Direction",
  portrait: img_retrato,
  bioShort: "Argentine creative living in New Zealand, making something everyone feels proud of.",
  bioFull: "I'm Pablo, an Argentine creative living in New Zealand.\n\nMy favourite projects still feel the same as going out to shoot with a mate because we had an idea we couldn't stop thinking about.\n\nLet's make something everyone feels proud of!",
  googleDriveUrl: "https://drive.google.com",
  services: [
    { title: "Editorial Campaigns", desc: "Art direction and conceptual photography for clothing and lifestyle brands." },
    { title: "Music Videos & Documentaries", desc: "Complete audiovisual production in 4K/60fps with cinematic color grading." },
    { title: "Analog Tour Coverage", desc: "Exclusive photographic accompaniment on 35mm film for touring artists." }
  ],
  stats: [
    { number: "80+", label: "Projects Completed" },
    { number: "15+", label: "Magazine Covers" },
    { number: "20+", label: "Music Videos Directed" },
    { number: "100%", label: "Passion for Analog Grain" }
  ]
};

// Portfolio items populated with authentic photographic works
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "gto-frame-javi",
    title: "Frame 01",
    category: "photography",
    src: photo_javi,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4492x6774 • Noritsu 35mm Scan"
  },
  {
    id: "gto-frame-01",
    title: "Frame 02",
    category: "photography",
    src: photo_pablo_01,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4032x5040 • Original Archive"
  },
  {
    id: "gto-frame-02",
    title: "Frame 02",
    category: "photography",
    src: photo_pablo_02,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4492x6774 • Original Archive"
  },
  {
    id: "gto-frame-03",
    title: "Frame 03",
    category: "photography",
    src: photo_pablo_03,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "5151x7723 • Original Archive"
  },
  {
    id: "gto-frame-04",
    title: "Frame 04",
    category: "photography",
    src: photo_pablo_04,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "8732x5821 • Original Archive"
  },
  {
    id: "gto-frame-05",
    title: "Frame 05",
    category: "photography",
    src: photo_pablo_05,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4492x6774 • Original Archive"
  },
  {
    id: "gto-frame-06",
    title: "Frame 06",
    category: "photography",
    src: photo_pablo_06,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4040x5052 • Original Archive"
  },
  {
    id: "gto-frame-07",
    title: "Frame 07",
    category: "photography",
    src: photo_pablo_07,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "6048x4032 • Original Archive"
  },
  {
    id: "gto-frame-08",
    title: "Frame 08",
    category: "photography",
    src: photo_pablo_08,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4032x5040 • Original Archive"
  },
  {
    id: "gto-frame-09",
    title: "Frame 09",
    category: "photography",
    src: photo_pablo_09,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4426x3541 • Original Archive"
  },
  {
    id: "gto-frame-10",
    title: "Frame 10",
    category: "photography",
    src: photo_pablo_10,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "3958x4948 • Original Archive"
  },
  {
    id: "gto-frame-11",
    title: "Frame 11",
    category: "photography",
    src: photo_pablo_11,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "3777x5667 • Original Archive"
  },
  {
    id: "gto-frame-12",
    title: "Frame 12",
    category: "photography",
    src: photo_pablo_12,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4032x6048 • Original Archive"
  },
  {
    id: "gto-frame-13",
    title: "Frame 13",
    category: "photography",
    src: photo_pablo_13,
    isVideo: false,
    aspect: "square",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4032x4032 • Original Archive"
  },
  {
    id: "gto-frame-14",
    title: "Frame 14",
    category: "photography",
    src: photo_pablo_14,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "5882x3921 • Original Archive"
  },
  {
    id: "gto-frame-15",
    title: "Frame 15",
    category: "photography",
    src: photo_pablo_15,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "5832x3888 • Original Archive"
  },
  {
    id: "gto-frame-16",
    title: "Frame 16",
    category: "photography",
    src: photo_pablo_16,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "3009x3761 • Original Archive"
  },
  {
    id: "gto-frame-17",
    title: "Frame 17",
    category: "photography",
    src: photo_pablo_17,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "6692x5354 • Original Archive"
  },
  {
    id: "gto-frame-18",
    title: "Frame 18",
    category: "photography",
    src: photo_pablo_18,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "8256x5504 • Original Archive"
  },
  {
    id: "gto-frame-19",
    title: "Frame 19",
    category: "photography",
    src: photo_pablo_19,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "5504x7706 • Original Archive"
  },
  {
    id: "gto-frame-20",
    title: "Frame 20",
    category: "photography",
    src: photo_pablo_20,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "5504x8256 • Original Archive"
  },
  {
    id: "gto-frame-21",
    title: "Frame 21",
    category: "photography",
    src: photo_pablo_21,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4400x3520 • Original Archive"
  },
  {
    id: "gto-frame-22",
    title: "Frame 22",
    category: "photography",
    src: photo_pablo_22,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4422x3538 • Original Archive"
  },
  {
    id: "gto-frame-23",
    title: "Frame 23",
    category: "photography",
    src: photo_pablo_23,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "6648x5318 • Original Archive"
  },
  {
    id: "gto-frame-24",
    title: "Frame 24",
    category: "photography",
    src: photo_pablo_24,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "7781x5187 • Original Archive"
  },
  {
    id: "gto-frame-25",
    title: "Frame 25",
    category: "photography",
    src: photo_pablo_25,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "1850x2312 • Original Archive"
  },
  {
    id: "gto-frame-26",
    title: "Frame 26",
    category: "photography",
    src: photo_pablo_26,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "3238x4048 • Original Archive"
  },
  {
    id: "gto-frame-27",
    title: "Frame 27",
    category: "photography",
    src: photo_pablo_27,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4200x2790 • Original Archive"
  },
  {
    id: "gto-frame-28",
    title: "Frame 28",
    category: "photography",
    src: photo_pablo_28,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "3887x2582 • Original Archive"
  },
  {
    id: "gto-frame-29",
    title: "Frame 29",
    category: "photography",
    src: photo_pablo_29,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4139x2749 • Original Archive"
  },
  {
    id: "gto-frame-30",
    title: "Frame 30",
    category: "photography",
    src: photo_pablo_30,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "5304x6631 • Original Archive"
  },
  {
    id: "gto-frame-31",
    title: "Frame 31",
    category: "photography",
    src: photo_pablo_31,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4032x5040 • Original Archive"
  },
  {
    id: "gto-frame-32",
    title: "Frame 32",
    category: "photography",
    src: photo_pablo_32,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "1025x1281 • Original Archive"
  },
  {
    id: "gto-frame-33",
    title: "Frame 33",
    category: "photography",
    src: photo_pablo_33,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "3307x2646 • Original Archive"
  },
  {
    id: "gto-frame-34",
    title: "Frame 34",
    category: "photography",
    src: photo_pablo_34,
    isVideo: false,
    aspect: "portrait",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "4463x6618 • Original Archive"
  },
  {
    id: "gto-frame-35",
    title: "Frame 35",
    category: "photography",
    src: photo_pablo_35,
    isVideo: false,
    aspect: "landscape",
    location: "New Zealand",
    date: "2026",
    description: "35mm analog & editorial documentation.",
    specs: "3453x2762 • Original Archive"
  }
];

export const MAGAZINE_ISSUE: MagazineIssue = {
  id: "issue-01",
  title: "GOOD TIMES ONLY — ISSUE 01: BEGINNINGS",
  issueNumber: "01",
  publishedDate: "June, 2026",
  coverImage: photo_magazine,
  pagesCount: 50,
  description: "Getting my work in front of a new audience far from home pushed me to create this zine and put together an exhibition featuring the photos that have shaped a big part of my journey as a photographer.",
  topics: [
    "A limited run of 50 zines",
    "Born from weeks spent diving back through years behind the camera",
    "Curated hundreds of images, wrote every word by hand",
    "Laid it all out on my wall before bringing it to life on my computer"
  ],
  purchaseUrl: "#order-now"
};

export const CLIENT_BRANDS = [
  { name: "Deus Ex Machina", category: "Apparel & Culture" },
  { name: "Red Bull", category: "Action Sports & Media" },
  { name: "Sony Music", category: "Music & Entertainment" },
  { name: "Patagonia", category: "Outdoor & Editorial" },
  { name: "Vans", category: "Footwear & Culture" },
  { name: "Monster Energy", category: "Extreme Sports" },
  { name: "Corona", category: "Lifestyle & Events" },
  { name: "Universal Music", category: "Records & Tour Coverage" }
];

export const PRINT_SPECS_INFO = {
  paper: "Hahnemühle Photo Rag 308gsm / 100% Cotton Fine Art Paper",
  printing: "Archival Pigment Giclée Print with 100+ year lightfastness guarantee",
  shipping: "Worldwide carbon-neutral tracked delivery in heavy-duty protective mailing tubes",
  signing: "Hand-signed and numbered certificate of authenticity included with each edition"
};

export const PRINT_ITEMS: PrintItem[] = [
  {
    id: "print-01",
    title: "Golden Hour Roll-In",
    image: photo_dsc0706,
    location: "Auckland, New Zealand",
    filmStock: "Nikon D90 • Warm Sunset",
    edition: "Limited Edition of 30",
    paperType: "Hahnemühle Photo Rag 308gsm",
    description: "Raw afternoon warmth hitting the concrete coping during sunset in Auckland.",
    featured: true,
    sizes: [
      { size: "A4", dimensions: "21.0 x 29.7 cm (8.3 x 11.7 in)", priceUSD: 85 },
      { size: "A3", dimensions: "29.7 x 42.0 cm (11.7 x 16.5 in)", priceUSD: 145 },
      { size: "A2", dimensions: "42.0 x 59.4 cm (16.5 x 23.4 in)", priceUSD: 230 }
    ]
  },
  {
    id: "print-02",
    title: "Ocean Wake Spray",
    image: photo_dsc0640,
    location: "Raglan Coastline",
    filmStock: "Nikon D90 • Daylight",
    edition: "Limited Edition of 25",
    paperType: "Hahnemühle Photo Rag 308gsm",
    description: "High speed water cut carving against the Pacific golden hour glow.",
    featured: true,
    sizes: [
      { size: "A4", dimensions: "21.0 x 29.7 cm (8.3 x 11.7 in)", priceUSD: 85 },
      { size: "A3", dimensions: "29.7 x 42.0 cm (11.7 x 16.5 in)", priceUSD: 145 },
      { size: "A2", dimensions: "42.0 x 59.4 cm (16.5 x 23.4 in)", priceUSD: 230 }
    ]
  },
  {
    id: "print-03",
    title: "Alpine Mist & Peak",
    image: photo_dsc5638,
    location: "Queenstown Highlands",
    filmStock: "Sony A7R II • High Dynamic Range",
    edition: "Limited Edition of 25",
    paperType: "Hahnemühle Photo Rag 308gsm",
    description: "Monochrome mood and high contrast mountain ridges emerging through low alpine clouds.",
    featured: false,
    sizes: [
      { size: "A4", dimensions: "21.0 x 29.7 cm (8.3 x 11.7 in)", priceUSD: 85 },
      { size: "A3", dimensions: "29.7 x 42.0 cm (11.7 x 16.5 in)", priceUSD: 145 },
      { size: "A2", dimensions: "42.0 x 59.4 cm (16.5 x 23.4 in)", priceUSD: 230 }
    ]
  },
  {
    id: "print-04",
    title: "Tokyo Alley Transit",
    image: photo_dsc0265,
    location: "Shibuya, Tokyo",
    filmStock: "Nikon D90 • Fast Prime",
    edition: "Limited Edition of 30",
    paperType: "Hahnemühle Photo Rag 308gsm",
    description: "Urban street texture framed through Japanese neon signage and evening shadows.",
    featured: true,
    sizes: [
      { size: "A4", dimensions: "21.0 x 29.7 cm (8.3 x 11.7 in)", priceUSD: 85 },
      { size: "A3", dimensions: "29.7 x 42.0 cm (11.7 x 16.5 in)", priceUSD: 145 },
      { size: "A2", dimensions: "42.0 x 59.4 cm (16.5 x 23.4 in)", priceUSD: 230 }
    ]
  },
  {
    id: "print-05",
    title: "Pacific Coast Drift",
    image: photo_4fa,
    location: "Piha Beach, NZ",
    filmStock: "VSCO e7 Tone Curve",
    edition: "Limited Edition of 25",
    paperType: "Hahnemühle Photo Rag 308gsm",
    description: "Vast black sand reflections and coastal tides under warm ocean breeze.",
    featured: false,
    sizes: [
      { size: "A4", dimensions: "21.0 x 29.7 cm (8.3 x 11.7 in)", priceUSD: 85 },
      { size: "A3", dimensions: "29.7 x 42.0 cm (11.7 x 16.5 in)", priceUSD: 145 },
      { size: "A2", dimensions: "42.0 x 59.4 cm (16.5 x 23.4 in)", priceUSD: 230 }
    ]
  },
  {
    id: "print-06",
    title: "Late Night Studio Session",
    image: photo_aaron3,
    location: "Buenos Aires, Argentina",
    filmStock: "35mm Film Grain",
    edition: "Limited Edition of 20",
    paperType: "Hahnemühle Photo Rag 308gsm",
    description: "Tungsten glow and atmospheric halations during an analog recording night.",
    featured: false,
    sizes: [
      { size: "A4", dimensions: "21.0 x 29.7 cm (8.3 x 11.7 in)", priceUSD: 85 },
      { size: "A3", dimensions: "29.7 x 42.0 cm (11.7 x 16.5 in)", priceUSD: 145 },
      { size: "A2", dimensions: "42.0 x 59.4 cm (16.5 x 23.4 in)", priceUSD: 230 }
    ]
  },
  {
    id: "print-07",
    title: "Concrete Vert Kickturn",
    image: photo_img110,
    location: "Melbourne Bowl, Australia",
    filmStock: "35mm Analog Negative",
    edition: "Limited Edition of 30",
    paperType: "Hahnemühle Photo Rag 308gsm",
    description: "Deep shadows, sharp contrast and pure skateboarding momentum.",
    featured: false,
    sizes: [
      { size: "A4", dimensions: "21.0 x 29.7 cm (8.3 x 11.7 in)", priceUSD: 85 },
      { size: "A3", dimensions: "29.7 x 42.0 cm (11.7 x 16.5 in)", priceUSD: 145 },
      { size: "A2", dimensions: "42.0 x 59.4 cm (16.5 x 23.4 in)", priceUSD: 230 }
    ]
  },
  {
    id: "print-08",
    title: "Cinematic Horizon",
    image: photo_aaron15,
    location: "Auckland, New Zealand",
    filmStock: "Nikon Z6 III • 35mm Prime",
    edition: "Limited Edition of 25",
    paperType: "Hahnemühle Photo Rag 308gsm",
    description: "Cinematic horizontal frame exploring spatial environment and authentic subject interaction.",
    featured: false,
    sizes: [
      { size: "A4", dimensions: "21.0 x 29.7 cm (8.3 x 11.7 in)", priceUSD: 85 },
      { size: "A3", dimensions: "29.7 x 42.0 cm (11.7 x 16.5 in)", priceUSD: 145 },
      { size: "A2", dimensions: "42.0 x 59.4 cm (16.5 x 23.4 in)", priceUSD: 230 }
    ]
  }
];
