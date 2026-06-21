import React from "react";
import { HeroSection } from "@/components/templates/cohortnew/hero-section";
import { BenefitsSection } from "@/components/templates/cohortnew/benefits-section";
import { ProgramSection } from "@/components/templates/cohortnew/program-section";
import { ChallengesSection } from "@/components/templates/cohortnew/challenges-section";
import { MentorGallery } from "@/components/templates/cohortnew/mentor-gallery";
import { TestimonialsCarousel } from "@/components/templates/cohortnew/testimonials-carousel";
import { FAQSection } from "@/components/templates/cohortnew/faq-section";
import { CTASection } from "@/components/templates/cohortnew/cta-section";
import { Footer } from "@/components/templates/cohortnew/footer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-slate-900">
      <HeroSection />
      <BenefitsSection />
      <ProgramSection />
      <ChallengesSection />
      <MentorGallery />
      <TestimonialsCarousel />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
