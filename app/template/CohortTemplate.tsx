import { HeroShowcase } from '@/components/templates/cohort/HeroShowcase';
import { CountdownTimer } from '@/components/templates/cohort/CountdownTimer';
import { TrustBar } from '@/components/templates/cohort/TrustBar';
import { BuiltFor } from '@/components/templates/cohort/BuiltFor';
import { Achievements } from '@/components/templates/cohort/Achievements';
import { Audience } from '@/components/templates/cohort/Audience';
import { Differentiators } from '@/components/templates/cohort/Differentiators';
import { Curriculum } from '@/components/templates/cohort/Curriculum';
import { WhatYouBuild } from '@/components/templates/cohort/WhatYouBuild';
import { Results } from '@/components/templates/cohort/Results';
import { WhyMatters } from '@/components/templates/cohort/WhyMatters';
import { MentorProfile } from '@/components/templates/cohort/MentorProfile';
import { MentorGallery } from '@/components/templates/cohort/MentorGallery';
import { Testimonials } from '@/components/templates/cohort/Testimonials';
import { FAQ } from '@/components/templates/cohort/FAQ';
import { AfterApply } from '@/components/templates/cohort/AfterApply';
import { FinalCTA } from '@/components/templates/cohort/FinalCTA';
import { StickyCTABar } from '@/components/templates/cohort/StickyCTABar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Showcase */}
      <HeroShowcase />


      {/* Trust Bar */}
      <TrustBar />

      {/* Built For */}
      <BuiltFor />

      {/* Achievements */}
      <Achievements />

      {/* Audience */}
      <Audience />

      {/* Differentiators */}
      <Differentiators />

      {/* Curriculum */}
      <Curriculum />

      {/* What You Build */}
      <WhatYouBuild />

      {/* Results */}
      <Results />

      {/* Why Matters */}
      <WhyMatters />

      {/* Mentor Profile */}
      <MentorProfile />

      {/* Mentor Gallery
      <MentorGallery /> */}

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* After Apply */}
      <AfterApply />

      {/* Final CTA */}
      <FinalCTA />

      {/* Sticky CTA Bar */}
      <StickyCTABar />
    </main>
  );
}
