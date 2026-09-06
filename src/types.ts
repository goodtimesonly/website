export type PortfolioCategory = 'skateboarding' | 'wakeboarding' | 'events-brands' | 'videos' | 'photography' | 'videography';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory | string;
  src: string; // Image placeholder or thumbnail
  fallbackSrc?: string; // High-quality online fallback if local images are empty or missing
  isVideo: boolean;
  videoUrl?: string; // Standard video resource or stream
  aspect: 'portrait' | 'landscape' | 'square';
  location: string;
  date: string;
  description: string;
  client?: string;
  specs?: string; // Camera specs / film gear details
}

export interface MagazineIssue {
  id: string;
  title: string;
  issueNumber: string;
  publishedDate: string;
  coverImage: string;
  pagesCount: number;
  description: string;
  topics: string[];
  purchaseUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface PrintSizeOption {
  size: string; // e.g. "A4 (21 x 29.7 cm)", "A3 (29.7 x 42 cm)", "A2 (42 x 59.4 cm)"
  dimensions: string; // "8.3 x 11.7 in"
  priceUSD: number;
}

export interface PrintItem {
  id: string;
  title: string;
  image: string;
  location: string;
  filmStock: string;
  edition: string; // e.g. "Limited Edition of 25" or "Open Edition"
  paperType: string; // e.g. "Hahnemühle Photo Rag 308gsm"
  description: string;
  sizes: PrintSizeOption[];
  featured?: boolean;
}
