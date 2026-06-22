import React from "react";
import { HeroSection } from "@/components/templates/cohortnew/hero-section";
import { BenefitsSection } from "@/components/templates/cohortnew/benefits-section";
import { ProgramSection } from "@/components/templates/cohortnew/program-section";
//import { ChallengesSection } from "@/components/templates/cohortnew/challenges-section";
import { MentorGallery } from "@/components/templates/cohortnew/mentor-gallery";
import { TestimonialsCarousel } from "@/components/templates/cohortnew/testimonials-carousel";
import { FAQSection } from "@/components/templates/cohortnew/faq-section";
import { CTASection } from "@/components/templates/cohortnew/cta-section";
import { Footer } from "@/components/templates/cohortnew/footer";
import { CohortData } from "@/lib/data/cohortnew/index";
interface NewCohortTemplateProps {
  data: CohortData;
}

export default function NewCohortTemplate({
  data,
}: NewCohortTemplateProps) {
  return (
    <main className="w-full overflow-hidden bg-slate-900">
      <HeroSection hero={data.hero} mentor={data.mentor} />

      <BenefitsSection

        painPoints={data.painPoints}
      />

      <ProgramSection
        modules={data.modules as any}
      />

      <MentorGallery
        mentor={data.mentor}
      />

      <TestimonialsCarousel
        testimonials={data.testimonials}
      />

      <FAQSection
        faqs={data.faqs}
      />

      <CTASection
        finalCTA={data.finalCTA}
        offer={data.offer}
      />

      <Footer />
    </main>
  );
}