import Hero from "@/components/templates/gtm-checklist/Hero";
import SocialProof from "@/components/templates/gtm-checklist/SocialProof";
import AuthorSection from "@/components/templates/gtm-checklist/AuthorSection";
import Benefits from "@/components/templates/gtm-checklist/Benefits";
import Features from "@/components/templates/gtm-checklist/Features";
import WhatsIncluded from "@/components/templates/gtm-checklist/WhatsIncluded";
import WorkflowSection from "@/components/templates/gtm-checklist/WorkflowSection";
import Testimonials from "@/components/templates/gtm-checklist/Testimonials";
import FitSection from "@/components/templates/gtm-checklist/FitSection";
import Pricing from "@/components/templates/gtm-checklist/Pricing";
import FAQ from "@/components/templates/gtm-checklist/FAQ";
import FinalCTA from "@/components/templates/gtm-checklist/FinalCTA";
import type { GTMChecklistData } from "@/lib/data/gtm-checklist";
import "@/components/templates/gtm-checklist/gtm-theme.css";
interface GTMChecklistTemplateProps {
  data: GTMChecklistData;
}

export default function GTMChecklistTemplate({ data }: GTMChecklistTemplateProps) {
  return (
    <main className="gtm-page antialiased">
      {/* 1. Hero */}
      <Hero data={data.hero} />

      {/* 2. Social Proof Banner */}
      <SocialProof data={data.socialProofBanner} />

      {/* 3. Author + Problem Framing */}
      <AuthorSection data={data.author} />

      {/* 4. Benefits Grid */}
      <Benefits data={data.benefits} />

      {/* 5. Core Feature Highlights */}
      <Features data={data.features} />

      {/* 6. What's Included breakdown */}
      <WhatsIncluded data={data.whatsIncluded} />

      {/* 7. Workflow / Compatibility */}
      <WorkflowSection data={data.workflow} />

      {/* 8. Testimonials */}
      <Testimonials data={data.testimonials} />

      {/* 9. Who it's for */}
      <FitSection data={data.fit} />

      {/* 10. Pricing */}
      <Pricing data={data.pricing} />

      {/* 11. FAQ */}
      <FAQ data={data.faq} />

      {/* 12. Final CTA */}
      <FinalCTA data={data.finalCTA} />
    </main>
  );
}
