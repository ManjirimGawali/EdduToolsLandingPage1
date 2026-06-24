export type RemoteJobIconName =
  | "TrendingUp"
  | "Users"
  | "Award"
  | "Building2"
  | "GraduationCap";

export interface HeroData {
  badge: string;

  heading: {
    line1: string;
    highlight: string;
    line2: string;
    underline: string;
  };

  description: string;

  webinarInfo: {
    date: string;
    qa: string;
    location: string;
  };

  cta: {
    text: string;
    href: string;
  };

  trust: {
    clients: string;
    rating: string;
    avatars: {
      initials: string;
      color: string;
    }[];
  };

  mentorCard: {
    badge: string;
    multiplier: string;
  };

  floatingCards: {
    icon: RemoteJobIconName;
    value: string;
    label: string;
    color: string;
  }[];
}
export interface Mentor {
  name: string;
  designation: string;
  image: string;
  headline: string;
  about: string[];
  brands: string[];
  stats: {
    icon: RemoteJobIconName;
    value: string;
    label: string;
  }[];
  achievement: {
    title: string;
    description: string;
    icon: RemoteJobIconName;
  };
  cta: {
    text: string;
    href: string;
  };
}

export interface SuccessStory {
  name: string;
  fromSalary: string;
  toSalary: string;
  role: string;
  company: string;
  testimonial: string;
  initials: string;
  color: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  highlight: string;
  description: string;
}

export interface LearningModule {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Challenge {
  icon: string;
  title: string;
  description: string;
}
export interface RemoteJobWebinarData {
  heroData: HeroData;
  mentor: Mentor;
  successStories: SuccessStory[];
  mentorBrands: string[];
  painPoints: PainPoint[];
  learningModules: LearningModule[];
  challenges: Challenge[];
  faqItems: FaqItem[];
  heroStats: {
    value: string;
    label: string;
  }[];
}