export interface MangoVariety {
  id: string;
  name: string;
  origin: string;
  tagline: string;
  description: string;
  tasteProfile: string[];
  sweetness: number; // 1-10
  texture: string;
  availability: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  emoji: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  variety?: string;
  avatar: string;
  initials: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export interface DeliveryStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface WhyUsFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  size: "large" | "medium" | "small";
  gradient: string;
}
