//─── Types ────────────────────────────────────────────────────────────────────
import type {
  HeroData,
  Mentor,
  SuccessStory,
  PainPoint,
  LearningModule,
  FaqItem,
  Challenge,
} from "./type";

// ─── Data ─────────────────────────────────────────────────────────────────────
export const HERO_DATA: HeroData = {
  badge: "🔴 Live Webinar · Sunday 11 AM IST",

  heading: {
    line1: "Get Your",
    highlight: "Salary",
    line2: "in Dollars While Working From",
    underline: "Home",
  },

  description:
    "Use Shikkhar Suri's proven hacks to get a 3x salary hike by landing an international remote job — without relocating, without years of waiting.",

  webinarInfo: {
    date: "Sunday, 11 AM IST",
    qa: "Live Q&A with Shikkhar Suri",
    location: "All the hacks in one place",
  },

  cta: {
    text: "🔥 Register Now — Only ₹99 →",
    href: "#register",
  },

  trust: {
    clients: "25k+ satisfied clients",
    rating: "4.9",

    avatars: [
      {
        initials: "MG",
        color: "#FF5A36",
      },
      {
        initials: "RS",
        color: "#3B82F6",
      },
      {
        initials: "MA",
        color: "#10B981",
      },
      {
        initials: "NS",
        color: "#8B5CF6",
      },
    ],
  },

  mentorCard: {
    badge: "Live Webinar",
    multiplier: "3×",
  },

  floatingCards: [
    {
      icon: "TrendingUp",
      value: "₹60 LPA",
      label: "Highest Package",
      color: "#FF5A36",
    },
    {
      icon: "Users",
      value: "25,000+",
      label: "Students Trained",
      color: "#10B981",
    },
  ],
};
export const MENTOR: Mentor = {
  name: "Shikkhar Suri",

  designation: "Marketing Head · HootBoard (US)",

  image: "/suri.png",

  headline:
    "My Top Priority Is Your SALARY Growth — Not Vanity Metrics",

  about: [
    "I was Heading Growth at HootBoard, a US based company, in an International Remote Job Role, before I started helping others to find remote jobs like me.",

    "I am a silver medalist in MBA from IMT Ghaziabad and have worked with top brands not just in India but globally.",

    "To Grow Your Salary As Fast As Possible, In The Shortest Possible Time — and I ensure you get growth beyond your expectations, or we work till you see it.",
  ],

  brands: [
    "Zomato",
    "Uber",
    "Amazon",
    "Google",
    "Amex",
    "Group M",
    "HootBoard",
  ],

  stats: [
    {
      icon: "Users",
      value: "25,000+",
      label: "Students Helped",
    },
    {
      icon: "TrendingUp",
      value: "₹60 LPA",
      label: "Highest Placement",
    },
    {
      icon: "Award",
      value: "Silver",
      label: "MBA Medalist",
    },
    {
      icon: "Building2",
      value: "7+",
      label: "Global Brands",
    },
  ],

  achievement: {
    icon: "GraduationCap",
    title: "Silver Medalist, MBA",
    description:
      "from IMT Ghaziabad — one of India's top management institutions.",
  },

  cta: {
    text: "Register Now For Just ₹99 →",
    href: "#register",
  },
};

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    name: "Ms. Goley",
    fromSalary: "3 LPA",
    toSalary: "25 LPA",
    role: "International Marketing Manager",
    company: "US-Based SaaS Company",
    testimonial:
      "I was completely stuck at 3 LPA with zero hope of growth. After this program I landed an international remote role within 6 weeks. The resume and LinkedIn strategy was game-changing.",
    initials: "MG",
    color: "#FF5A36",
  },
  {
    name: "Ms. Sachdeva",
    fromSalary: "8 LPA",
    toSalary: "32 LPA",
    role: "Remote Product Manager",
    company: "UK-Based Tech Startup",
    testimonial:
      "The hidden job strategy was something I had never heard of. I got 4 international interview calls in just 2 weeks of implementing the framework. Absolutely life-changing.",
    initials: "MS",
    color: "#3B82F6",
  },
  {
    name: "Mr. Sasmit",
    fromSalary: "12 LPA",
    toSalary: "48 LPA",
    role: "Senior Tech Lead (Remote)",
    company: "Singapore Fintech",
    testimonial:
      "The salary negotiation secrets gave me the confidence to ask for what I truly deserve. I nearly doubled my expected offer just by applying one technique from the program.",
    initials: "RS",
    color: "#10B981",
  },
  {
    name: "Mr. Ahmed",
    fromSalary: "22 LPA",
    toSalary: "60 LPA",
    role: "Head of Growth (Remote)",
    company: "US E-commerce Brand",
    testimonial:
      "I was earning well but felt completely capped in Indian market. This showed me an entirely different market. Got to 60 LPA working remotely from my home in Hyderabad.",
    initials: "MA",
    color: "#8B5CF6",
  },
];
export const MENTOR_BRANDS = [
  "Zomato",
  "Uber",
  "Amazon",
  "Google",
  "Amex",
  "Group M",
  "HootBoard",
];
export const PAIN_POINTS: PainPoint[] = [
  {
    icon: "📊",
    highlight: "Unable to Grow Your Salary",
    title: "Salary Growth Plateau",
    description:
      "You're already drawing above market standards for Indian companies and feel completely stuck with no path to grow further.",
  },
  {
    icon: "⏳",
    highlight: "No Growth For Years",
    title: "Years of Stagnation",
    description:
      "You haven't seen a meaningful salary increment in years. Same role, same pay band, same frustration — year after year.",
  },
  {
    icon: "🕳️",
    highlight: "You Have A Career Gap",
    title: "Career Gap Blocking You",
    description:
      "A gap in your career history is making it nearly impossible to land new opportunities, even when you're clearly qualified.",
  },
  {
    icon: "🏠",
    highlight: "You Cannot Work From Office",
    title: "Can't Return to Office",
    description:
      "Due to personal circumstances, office work isn't possible — yet every remote job listing seems to want someone else.",
  },
  {
    icon: "🔍",
    highlight: "Tried Everything",
    title: "LinkedIn, Portals, Referrals — Nothing Works",
    description:
      "You've spent months on LinkedIn, job portals, and chasing referrals. You're still exactly where you started. Something is missing.",
  },
  {
    icon: "😤",
    highlight: "Office Politics & Daily Commute",
    title: "Toxic Culture & Commute Fatigue",
    description:
      "Tired of navigating office politics and wasting 2–3 hours every day commuting. There has to be a better way to work.",
  },
];

export const LEARNING_MODULES: LearningModule[] = [
  {
    icon: "🗺️",
    title: "Step-by-Step Blueprint to Get International Remote Jobs",
    description:
      "A complete, battle-tested roadmap to land one or more international remote roles — no guesswork, no fluff.",
  },
  {
    icon: "🕵️",
    title: "Secrets to Finding Hidden Remote Jobs",
    description:
      "Discover high-paying roles that never appear on public job portals. Only insiders know how to find these.",
  },
  {
    icon: "🎯",
    title: "Make Remote Jobs Come to YOU",
    description:
      "Positioning and personal brand strategies that make international recruiters approach you — not the other way around.",
  },
  {
    icon: "📄",
    title: "International Resume Overhaul",
    description:
      "Specific, actionable changes to make your resume irresistible to global hiring managers and ATS systems.",
  },
  {
    icon: "🏆",
    title: "7-Step Professional Brand Framework",
    description:
      "Build unshakeable authority and a recognisable personal brand that makes you stand out in a globally competitive market.",
  },
  {
    icon: "💰",
    title: "Secrets to Demanding a Premium Salary",
    description:
      "Proven negotiation tactics and scripts to confidently command the salary you deserve in any remote or international role.",
  },
];

export const CHALLENGES: Challenge[] = [
  {
    icon: "🤖",
    title: "Declining Job Openings Due to AI",
    description:
      "AI is eliminating roles faster than companies are creating new ones. Your position could become redundant very soon.",
  },
  {
    icon: "📉",
    title: "Sub-Par Salary Without Any Growth Prospect",
    description:
      "Staying where you are means watching peers and juniors grow past you — compounding every single year.",
  },
  {
    icon: "😔",
    title: "Stuck in the Same Role Forever",
    description:
      "Without a strategic shift, you risk spending another decade feeling undervalued, overlooked, and underpaid.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "After registration, how will I get the joining link?",
    answer:
      "You will receive the joining link via email and WhatsApp immediately after completing your registration. Please check your spam/promotions folder if you don't see it within a few minutes of registering.",
  },
  {
    question: "Why does this workshop cost so low?",
    answer:
      "Shikkhar believes financial constraints should never prevent someone from transforming their career. The ₹99 fee ensures commitment — the value delivered is worth several times more. This is an introductory price before it goes to its full price.",
  },
  {
    question: "Is there a community group I can join after registering?",
    answer:
      "Yes! After registering, you will be added to an exclusive WhatsApp community where you can interact directly with Shikkhar and connect with like-minded professionals on the same journey.",
  },
  {
    question: "Is remote work appropriate for my profile and job domain?",
    answer:
      "Remote work is available across virtually every profession today — marketing, tech, finance, HR, design, sales, operations and more. During the program, Shikkhar will show you the specific path for your domain.",
  },
  {
    question: "I have a query that is not mentioned here.",
    answer:
      "Please reach out on WhatsApp or email. Shikkhar's team is happy to answer any questions before you register. You can also drop your query in the chat after joining the community.",
  },
];

export const HERO_STATS = [
  { value: "25,000+", label: "Students Trained" },
  { value: "₹60 LPA", label: "Highest Package" },
  { value: "4.9 / 5", label: "Average Rating" },
  { value: "6 Weeks", label: "Avg. Time to Offer" },
];
export const remoteJobWebinarData = {
  heroData: HERO_DATA,
  mentor: MENTOR,
  successStories: SUCCESS_STORIES,
  mentorBrands: MENTOR_BRANDS,
  painPoints: PAIN_POINTS,
  learningModules: LEARNING_MODULES,
  challenges: CHALLENGES,
  faqItems: FAQ_ITEMS,
  heroStats: HERO_STATS,
};
