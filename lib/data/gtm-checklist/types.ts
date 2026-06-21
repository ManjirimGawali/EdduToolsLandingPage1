export interface HeroData {
  badge: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  ctaPrimaryHref: string;
  image: string;
  socialProofCount: string;
  socialProofLabel: string;
  deliveryNote: string;
  availableLabel: string;
  avatars: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface BenefitsData {
  sectionTitle: string;
  items: BenefitItem[];
  ctaText: string;
  ctaHref: string;
}

export interface PainItem {
  emoji: string;
  text: string;
}

export interface AuthorData {
  name: string;
  image: string;
  bio: string;
  pains: PainItem[];
  transitionText: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  image: string;
  stat?: string;
  statLabel?: string;
}

export interface AiModel {
  name: string;
  icon: string;
}

export interface FeaturesData {
  sectionTitle: string;
  sectionSubtitle: string;
  items: FeatureItem[];
  aiModels: AiModel[];
  aiLabel: string;
  ctaText: string;
  ctaHref: string;
}

export interface IncludedItem {
  title: string;
  description: string;
  image: string;
  stat: string;
  statUnit: string;
}

export interface WhatsIncludedData {
  sectionTitle: string;
  subtitle: string;
  items: IncludedItem[];
  ctaText: string;
  ctaHref: string;
}

export interface CompatibilityTool {
  name: string;
  icon: string;
}

export interface WorkflowData {
  sectionTitle: string;
  description: string;
  image: string;
  tools: CompatibilityTool[];
  note: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  handle: string;
  platform: string;
  content: string;
  avatar: string;
  featured?: boolean;
}

export interface TestimonialsData {
  sectionTitle: string;
  items: TestimonialItem[];
  wallOfLoveText: string;
  wallOfLoveHref: string;
}

export interface FitItem {
  emoji: string;
  text: string;
}

export interface FitData {
  sectionTitle: string;
  subtitle: string;
  items: FitItem[];
  closingText: string;
  ctaText: string;
  ctaHref: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
  isBonus?: boolean;
}

export interface PricingTier {
  title: string;
  originalPrice?: string;
  price: string;
  priceNote?: string;
  description?: string;
  features: PricingFeature[];
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
}

export interface PricingData {
  sectionTitle: string;
  subtitle: string;
  tiers: PricingTier[];
  paymentNote: string;
  paymentIcons: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  sectionTitle: string;
  items: FaqItem[];
}

export interface FinalCTAData {
  headline: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image?: string;
}

export interface SocialProofBannerData {
  count: string;
  label: string;
  stars: number;
  avatars: string[];
  partnerLogos: string[];
  partnerLabel: string;
}

export interface GTMChecklistData {
  hero: HeroData;
  socialProofBanner: SocialProofBannerData;
  author: AuthorData;
  benefits: BenefitsData;
  features: FeaturesData;
  whatsIncluded: WhatsIncludedData;
  workflow: WorkflowData;
  testimonials: TestimonialsData;
  fit: FitData;
  pricing: PricingData;
  faq: FaqData;
  finalCTA: FinalCTAData;
}
