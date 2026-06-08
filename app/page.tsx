import { HeroShowcase } from '@/components/sections/HeroShowcase';
import { CountdownTimer } from '@/components/sections/CountdownTimer';
import { TrustBar } from '@/components/sections/TrustBar';
import { BuiltFor } from '@/components/sections/BuiltFor';
import { Achievements } from '@/components/sections/Achievements';
import { Audience } from '@/components/sections/Audience';
import { Differentiators } from '@/components/sections/Differentiators';
import { Curriculum } from '@/components/sections/Curriculum';
import { WhatYouBuild } from '@/components/sections/WhatYouBuild';
import { Results } from '@/components/sections/Results';
import { WhyMatters } from '@/components/sections/WhyMatters';
import { MentorProfile } from '@/components/sections/MentorProfile';
import { MentorGallery } from '@/components/sections/MentorGallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { AfterApply } from '@/components/sections/AfterApply';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { StickyCTABar } from '@/components/sections/StickyCTABar';

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
