import type { RemoteJobWebinarData } from "@/lib/data/remotejob";
import AnnouncementBar from "@/components/templates/remotejobwebinar/AnnouncementBar";
import HeroSection from "@/components/templates/remotejobwebinar/HeroSection";
import SocialProofSection from "@/components/templates/remotejobwebinar/SocialProofSection";
import ResultsSection from "@/components/templates/remotejobwebinar/ResultsSection";
import ProblemsSection from "@/components/templates/remotejobwebinar/ProblemsSection";
import WhatYouLearnSection from "@/components/templates/remotejobwebinar/WhatYouLearnSection";
import MentorSection from "@/components/templates/remotejobwebinar/MentorSection";
import ChallengesSection from "@/components/templates/remotejobwebinar/ChallengesSection";
import FaqSection from "@/components/templates/remotejobwebinar/FaqSection";
import FinalCtaSection from "@/components/templates/remotejobwebinar/FinalCtaSection";
import Footer from "@/components/templates/remotejobwebinar/Footer";

interface RemotejobwebinarProps {
  data: RemoteJobWebinarData;
}

export default function Remotejobwebinar({ data }: RemotejobwebinarProps) {
  return (
    <main>
      {/* Sticky countdown + CTA bar */}
      <AnnouncementBar />

      {/* 1. Hero — headline, mentor image, stats, CTA */}
      <HeroSection
        heroData={data.heroData}
        mentor={data.mentor}
        heroStats={data.heroStats}
      />

      {/* 2. Social Proof — register button, ratings, avatars */}
      <SocialProofSection />

      {/* 3. Results / Success Stories */}
      <ResultsSection successStories={data.successStories} />

      {/* 4. Problems — pain points the user faces */}
      <ProblemsSection painPoints={data.painPoints} />

      {/* 5 & 6. What You'll Learn — program modules */}
      <WhatYouLearnSection learningModules={data.learningModules} />

      {/* 7. Mentor — About Shikkhar Suri */}
      <MentorSection mentor={data.mentor} brands={data.mentorBrands} />

      {/* 8. Challenges — what happens if you don't act */}
      <ChallengesSection challenges={data.challenges} />

      {/* 9. FAQ */}
      <FaqSection faqItems={data.faqItems} />

      {/* 10. Final CTA with countdown */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
