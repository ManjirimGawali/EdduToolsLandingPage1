import { CohortData } from "@/lib/data/cohort";
interface CohortTemplateProps {
  data: CohortData;
}
import { HeroShowcase } from "@/components/templates/cohort/HeroShowcase";
import { CountdownTimer } from "@/components/templates/cohort/CountdownTimer";
import { TrustBar } from "@/components/templates/cohort/TrustBar";
import { BuiltFor } from "@/components/templates/cohort/BuiltFor";
import { Achievements } from "@/components/templates/cohort/Achievements";
import { Audience } from "@/components/templates/cohort/Audience";
import { Differentiators } from "@/components/templates/cohort/Differentiators";
import { Curriculum } from "@/components/templates/cohort/Curriculum";
import { WhatYouBuild } from "@/components/templates/cohort/WhatYouBuild";
import { Results } from "@/components/templates/cohort/Results";
import { WhyMatters } from "@/components/templates/cohort/WhyMatters";
import { MentorProfile } from "@/components/templates/cohort/MentorProfile";
import { MentorGallery } from "@/components/templates/cohort/MentorGallery";
import { Testimonials } from "@/components/templates/cohort/Testimonials";
import { FAQ } from "@/components/templates/cohort/FAQ";
import { AfterApply } from "@/components/templates/cohort/AfterApply";
import { FinalCTA } from "@/components/templates/cohort/FinalCTA";
import { StickyCTABar } from "@/components/templates/cohort/StickyCTABar";

export default function CohortTemplate({ data }: CohortTemplateProps) {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Showcase */}
      <HeroShowcase hero={data.hero} mentor={data.mentor} />

      {/* Trust Bar */}
      <TrustBar />

      {/* Built For */}
      <BuiltFor painPoints={data.painPoints} />

      {/* Achievements */}
      <Achievements achievements={data.achievements} />
      {/* Audience */}
      <Audience audience={data.audience} />

      {/* Differentiators */}
      <Differentiators differentiators={data.differentiators} />

      {/* Curriculum */}
      <Curriculum modules={data.modules} />

      {/* What You Build */}
      <WhatYouBuild products={data.products} />

      {/* Results */}
      <Results results={data.results} />

      {/* Why Matters */}
      <WhyMatters whyMatters={data.whyMatters} />

      {/* Mentor Profile */}
      <MentorProfile mentor={data.mentor} />

      {<MentorGallery mentor={data.mentor} />}

      {/* Testimonials */}
      <Testimonials testimonials={data.testimonials} />

      {/* FAQ */}
      <FAQ faqs={data.faqs} />

      {/* After Apply */}
      <AfterApply process={data.process} />

      {/* Final CTA */}
      <FinalCTA finalCTA={data.finalCTA} />

      {/* Sticky CTA Bar */}
      <StickyCTABar offer={data.offer} hero={data.hero} />
    </main>
  );
}
