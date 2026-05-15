export interface MangoVariety {
  id: string;
  name: string;
  origin: string;
  tagline: string;
  description: string;
  tasteProfile: string[];
  sweetness: number; // 1–10
  texture: string;
  availability: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  location: string;
  review: string;
  rating: number;
  variety?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
