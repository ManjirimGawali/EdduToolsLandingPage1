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

export const cohortData: CohortData = {
  hero: {
    mainHeadline: "Build AI SaaS Products. Launch Globally. Get Paid In Dollars.",
    subheadline: "While Working From India",
    description:
      "Join a hands-on AI SaaS Cohort where you build a real product, launch it with GTM systems, and learn how to earn in global markets.",
    sessionInfo: "Live Cohort Sessions Every Sunday — 11 AM",
    tagline: "Build With Mentors. Ship Fast. Learn Real Distribution.",
    cta1: "Apply Now",
    cta2: "Watch Overview",
    limitation: "Launch your first AI SaaS in 60–90 days",
  },
  offer: {
    expiryDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    priceIncrease: 2000,
    seatsLimited: 25,
  },
  mentor: {
    name: "Ashish Namdeo",
    title: "AI SaaS Builder & GTM Strategist",
    image: "/teachingprofessional.png",
    gallery: [
      "/mentor-speaking.jpg",
      "/mentor-teaching.jpg",
      "/mentor-working.jpg",
      "/mentor-coaching.jpg",
      "/mentor-headshot.jpg",
    ],
    linkedin: "https://linkedin.com",
    bio: "Built and launched AI products across multiple niches while helping founders and professionals understand how to turn AI into real business opportunities.",
  },
  achievements: [
    {
      title: "A working AI SaaS product",
      description: "",
    },
    {
      title: "A validated problem and niche",
      description: "",
    },
    {
      title: "Landing page + positioning",
      description: "",
    },
    {
      title: "AI workflows and automations",
      description: "",
    },
    {
      title: "Go-to-market strategy",
      description: "",
    },
    {
      title: "User acquisition systems",
      description: "",
    },
    {
      title: "Distribution playbook",
      description: "",
    },
    {
      title: "Portfolio proof for global opportunities",
      description: "",
    },
    {
      title: "The ability to charge in dollars",
      description: "",
    },
  ],
  audience: [
    { title: "Developers who want to build SaaS products" },
    { title: "AI enthusiasts stuck in tutorial loops" },
    { title: "Freelancers wanting recurring revenue" },
    { title: "Working professionals exploring global income" },
    { title: "Indie hackers and startup aspirants" },
    { title: "Students who want practical AI execution skills" },
    { title: "Founders validating AI product ideas" },
  ],
  differentiators: [
    {
      number: 1,
      title: "Product Thinking",
      description: "How to identify real market problems worth solving.",
    },
    {
      number: 2,
      title: "AI SaaS Execution",
      description:
        "Build workflows, MVPs, integrations, and usable products quickly.",
    },
    {
      number: 3,
      title: "GTM & Distribution",
      description: "Learn how to get users instead of building in silence.",
    },
    {
      number: 4,
      title: "Global Positioning",
      description:
        "How to package your work for international markets and clients.",
    },
    {
      number: 5,
      title: "Real Shipping Culture",
      description: "Weekly accountability, launch deadlines, and live feedback.",
    },
  ],
  modules: [
    {
      title: "Module 1 — AI SaaS Fundamentals",
      items: [
        "AI business models",
        "Picking profitable niches",
        "MVP planning",
        "Validation frameworks",
      ],
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
    },
    {
      title: "Module 4 — Monetization",
      items: [
        "Pricing strategy",
        "Subscription models",
        "Getting first paying users",
        "Selling to global customers",
      ],
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
    },
  ],
  products: [
    { title: "AI automation SaaS" },
    { title: "AI lead generation tools" },
    { title: "AI internal workflow products" },
    { title: "AI content systems" },
    { title: "AI research assistants" },
    { title: "AI sales tools" },
    { title: "AI support agents" },
    { title: "AI productivity apps" },
  ],
  results: [
    { metric: "Launch their first AI product", description: "" },
    { metric: "Get first users", description: "" },
    { metric: "Start earning online", description: "" },
    { metric: "Build public credibility", description: "" },
    { metric: "Create global opportunities", description: "" },
    { metric: "Transition from consumer to creator", description: "" },
  ],
  faqs: [
    {
      question: "Do I need coding skills?",
      answer:
        "No. Both technical and non-technical participants can join.",
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
      answer:
        "You'll learn frameworks to identify and validate ideas yourself.",
    },
    {
      question: "How long is the cohort?",
      answer:
        "Typically 6–8 weeks depending on the format.",
    },
  ],
  process: [
    {
      title: "Application review",
      description: "",
    },
    {
      title: "Cohort onboarding",
      description: "",
    },
    {
      title: "Access to community",
      description: "",
    },
    {
      title: "Weekly live build sessions",
      description: "",
    },
    {
      title: "Launch support",
      description: "",
    },
  ],
  testimonials: [
    {
      name: "Sarah",
      role: "Product Builder",
      content:
        "This cohort transformed my understanding of product building. I went from idea to launch in 8 weeks.",
    },
    {
      name: "Raj",
      role: "Founder",
      content:
        "The GTM strategies taught here are gold. We acquired 500 users in the first month after launch.",
    },
    {
      name: "Emma",
      role: "Developer",
      content:
        "Best investment I made. Now earning in dollars and feeling confident about my AI SaaS.",
    },
  ],
  painPoints: [
    "You haven't launched a real product",
    "You don't know what people will pay for",
    "You struggle with positioning and GTM",
    "You keep learning but never shipping",
    "You want global income, not local salary ceilings",
    "You want to build leverage, not depend only on jobs",
  ],
  solutions: [
    "Build a real, validated product",
    "Launch with proven GTM systems",
    "Position for global markets",
    "Earn in dollars",
    "Create lasting leverage",
  ],
  whyMatters:
    "AI is reducing repetitive jobs. But it is also creating massive opportunities for builders. The people who will benefit most are those who can identify problems, build quickly, launch consistently, and distribute effectively. This cohort helps you develop those skills.",
  finalCTA: {
    headline: "Ready To Build Your First AI SaaS?",
    description1: "Stop consuming endless AI content.",
    description2: "Start building products people actually use.",
    cta: "Apply For The Cohort",
    footer: "Limited Seats • Execution Focused • Build & Launch With Guidance",
  },
};
