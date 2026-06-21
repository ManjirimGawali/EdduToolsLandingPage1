import {
  Users,
  TrendingUp,
  Award,
  Building2,
  GraduationCap,
  Zap,
  Target,
  Rocket,
  Globe,
  Code,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────
export interface Logo {
  url: string;
  alt: string;
}

export interface HeroData {
  logo: Logo;
  badge: string;
  heading: {
    line1: string;
    highlight: string;
    line2: string;
    underline: string;
  };
  description: string;
  sessionInfo: string;
  duration: string;
  frequency: string;
  cta: {
    primary: string;
    secondary: string;
    href: string;
  };
  trust: {
    clients: string;
    rating: string;
  };
}

export interface Mentor {
  name: string;
  title: string;
  image: string;
  gallery: string[];
  bio: string;
  achievements: string[];
  stats: {
    icon: any;
    value: string;
    label: string;
  }[];
  cta: {
    text: string;
    href: string;
  };
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  company?: string;
}

export interface Audience {
  title: string;
  icon: any;
}

export interface Differentiator {
  number: number;
  title: string;
  description: string;
  icon: any;
}

export interface Module {
  title: string;
  items: string[];
  icon: any;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
export const HERO_DATA: HeroData = {
  logo: {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=60&fit=crop",
    alt: "EddyTools Tech Solutions",
  },
  badge: "🎯 Live AI SaaS Cohort · Every Friday 7 PM IST",
  heading: {
    line1: "Build AI SaaS",
    highlight: "Products.",
    line2: "Launch Globally.",
    underline: "Get Paid In Dollars.",
  },
  description:
    "Join a hands-on AI SaaS Cohort where you build a real product, launch it with GTM systems, and learn how to earn in global markets. While working from India.",
  sessionInfo: "Live Cohort Sessions Every Friday — 7 PM IST",
  duration: "2 Hours Each Day",
  frequency: "Weekly • Live • Interactive",
  cta: {
    primary: "Apply Now",
    secondary: "Watch Overview",
    href: "#apply",
  },
  trust: {
    clients: "500+ AI Builders",
    rating: "4.9/5",
  },
};

export const MENTOR: Mentor = {
  name: "Ashish Namdeo",
  title: "AI SaaS Builder & GTM Strategist",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
  ],
  bio: "Built and launched AI products across multiple niches while helping founders and professionals understand how to turn AI into real business opportunities.",
  achievements: [
    "A working AI SaaS product",
    "A validated problem and niche",
    "Landing page + positioning",
    "AI workflows and automations",
    "Go-to-market strategy",
    "User acquisition systems",
    "Distribution playbook",
    "Portfolio proof for global opportunities",
    "The ability to charge in dollars",
  ],
  stats: [
    {
      icon: Users,
      value: "500+",
      label: "AI Builders Trained",
    },
    {
      icon: Rocket,
      value: "200+",
      label: "Products Launched",
    },
    {
      icon: Globe,
      value: "$1M+",
      label: "Revenue Generated",
    },
    {
      icon: Award,
      value: "4.9/5",
      label: "Student Rating",
    },
  ],
  cta: {
    text: "Apply For The Cohort",
    href: "#apply",
  },
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah",
    role: "Product Builder",
    content:
      "This cohort transformed my understanding of product building. I went from idea to launch in 8 weeks.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    company: "TechStart AI",
  },
  {
    name: "Raj",
    role: "Founder",
    content:
      "The GTM strategies taught here are gold. We acquired 500 users in the first month after launch.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    company: "AI Automation Co",
  },
  {
    name: "Emma",
    role: "Developer",
    content:
      "Best investment I made. Now earning in dollars and feeling confident about my AI SaaS.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    company: "Global Tech Solutions",
  },
];

export const AUDIENCE: Audience[] = [
  { title: "Developers who want to build SaaS products", icon: Code },
  { title: "AI enthusiasts stuck in tutorial loops", icon: Zap },
  { title: "Freelancers wanting recurring revenue", icon: TrendingUp },
  { title: "Working professionals exploring global income", icon: Globe },
  { title: "Indie hackers and startup aspirants", icon: Rocket },
  { title: "Students who want practical AI execution skills", icon: GraduationCap },
  { title: "Founders validating AI product ideas", icon: Target },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: 1,
    title: "Product Thinking",
    description: "How to identify real market problems worth solving.",
    icon: Target,
  },
  {
    number: 2,
    title: "AI SaaS Execution",
    description: "Build workflows, MVPs, integrations, and usable products quickly.",
    icon: Code,
  },
  {
    number: 3,
    title: "GTM & Distribution",
    description: "Learn how to get users instead of building in silence.",
    icon: Rocket,
  },
  {
    number: 4,
    title: "Global Positioning",
    description: "How to package your work for international markets and clients.",
    icon: Globe,
  },
  {
    number: 5,
    title: "Real Shipping Culture",
    description: "Weekly accountability, launch deadlines, and live feedback.",
    icon: Zap,
  },
];

export const MODULES: Module[] = [
  {
    title: "Module 1 — AI SaaS Fundamentals",
    items: [
      "AI business models",
      "Picking profitable niches",
      "MVP planning",
      "Validation frameworks",
    ],
    icon: Target,
  },
  {
    title: "Module 2 — Building Your Product",
    items: [
      "AI APIs",
      "No-code + low-code stack",
      "Automation workflows",
      "Prompt systems",
      "Frontend launch stack",
    ],
    icon: Code,
  },
  {
    title: "Module 3 — Launch & GTM",
    items: [
      "Landing pages",
      "Offer creation",
      "Product positioning",
      "Viral loops",
      "Content distribution",
      "AI SEO",
      "Founder-led growth",
    ],
    icon: Rocket,
  },
  {
    title: "Module 4 — Monetization",
    items: [
      "Pricing strategy",
      "Subscription models",
      "Getting first paying users",
      "Selling to global customers",
    ],
    icon: TrendingUp,
  },
  {
    title: "Module 5 — Career & Dollar Opportunities",
    items: [
      "Building authority online",
      "Product portfolio",
      "Remote opportunities",
      "International freelancing",
      "Startup positioning",
    ],
    icon: Globe,
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "A working AI SaaS product", description: "" },
  { title: "A validated problem and niche", description: "" },
  { title: "Landing page + positioning", description: "" },
  { title: "AI workflows and automations", description: "" },
  { title: "Go-to-market strategy", description: "" },
  { title: "User acquisition systems", description: "" },
  { title: "Distribution playbook", description: "" },
  { title: "Portfolio proof for global opportunities", description: "" },
  { title: "The ability to charge in dollars", description: "" },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do I need coding skills?",
    answer: "No. Both technical and non-technical participants can join.",
  },
  {
    question: "Will we build real products?",
    answer: "Yes. The cohort is execution-focused.",
  },
  {
    question: "Is this live or recorded?",
    answer: "Live sessions with implementation support.",
  },
  {
    question: "Will I get help with GTM?",
    answer: "Yes. GTM and distribution are core parts of the cohort.",
  },
  {
    question: "Is this for beginners?",
    answer: "Yes, if you are willing to implement consistently.",
  },
  {
    question: "Will you provide startup ideas?",
    answer: "You'll learn frameworks to identify and validate ideas yourself.",
  },
  {
    question: "How long is the cohort?",
    answer: "Typically 6–8 weeks depending on the format.",
  },
];

export const PAIN_POINTS: string[] = [
  "You haven't launched a real product",
  "You don't know what people will pay for",
  "You struggle with positioning and GTM",
  "You keep learning but never shipping",
  "You want global income, not local salary ceilings",
  "You want to build leverage, not depend only on jobs",
];

export const SOLUTIONS: string[] = [
  "Build a real, validated product",
  "Launch with proven GTM systems",
  "Position for global markets",
  "Earn in dollars",
  "Create lasting leverage",
];

export const WHY_MATTERS =
  "AI is reducing repetitive jobs. But it is also creating massive opportunities for builders. The people who will benefit most are those who can identify problems, build quickly, launch consistently, and distribute effectively. This cohort helps you develop those skills.";

export const CHALLENGES = [
  {
    icon: "🔴",
    title: "Building in Silence",
    description: "Many developers build AI products without any GTM strategy, resulting in zero users and zero revenue.",
  },
  {
    icon: "📉",
    title: "No Market Validation",
    description: "You're building features nobody asked for. Without validation frameworks, you're just guessing.",
  },
  {
    icon: "💸",
    title: "Unable to Monetize",
    description: "Even if you build something cool, you don't know how to charge for it or reach paying customers.",
  },
];
