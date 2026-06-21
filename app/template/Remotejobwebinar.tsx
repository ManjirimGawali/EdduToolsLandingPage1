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

export default function HomePage() {
  return (
    <main>
      {/* Sticky countdown + CTA bar */}
      <AnnouncementBar />

      {/* 1. Hero — headline, mentor image, stats, CTA */}
      <HeroSection />

      {/* 2. Social Proof — register button, ratings, avatars */}
      <SocialProofSection />

      {/* 3. Results / Success Stories */}
      <ResultsSection />

      {/* 4. Problems — pain points the user faces */}
      <ProblemsSection />

      {/* 5 & 6. What You'll Learn — program modules */}
      <WhatYouLearnSection />

      {/* 7. Mentor — About Shikkhar Suri */}
      <MentorSection />

      {/* 8. Challenges — what happens if you don't act */}
      <ChallengesSection />

      {/* 9. FAQ */}
      <FaqSection />

      {/* 10. Final CTA with countdown */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
