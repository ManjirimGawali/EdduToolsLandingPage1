export interface Mentor {
  name: string;
  title: string;
  image: string;
  gallery: string[];
  linkedin: string;
  bio: string;
  
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Audience {
  title: string;
  icon?: string;
}

export interface Differentiator {
  number: number;
  title: string;
  description: string;
}

export interface Module {
  title: string;
  items: string[];
}

export interface Product {
  title: string;
}

export interface Result {
  metric: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface Offer {
  expiryDate: string;
  priceIncrease: number;
  seatsLimited: number;
}

export interface CohortData {
  slug:string;
  hero: {
    mainHeadline: string;
    subheadline: string;
    description: string;
    sessionInfo: string;
    tagline: string;
    cta1: string;
    cta2: string;
    limitation: string;
  };
  offer: Offer;
  mentor: Mentor;
  achievements: Achievement[];
  audience: Audience[];
  differentiators: Differentiator[];
  modules: Module[];
  products: Product[];
  results: Result[];
  faqs: FAQ[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  painPoints: string[];
  solutions: string[];
  whyMatters: string;
  finalCTA: {
    headline: string;
    description1: string;
    description2: string;
    cta: string;
    footer: string;
  };
}