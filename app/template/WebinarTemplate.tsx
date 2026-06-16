import Navbar from '@/components/templates/webinar/Navbar'
import Hero from '@/components/templates/webinar/Hero'
import CountdownTimer from '@/components/templates/webinar/CountdownTimer'
import TrustBar from '@/components/templates/webinar/TrustBar'
import ProblemsSection from '@/components/templates/webinar/ProblemsSection'
import OpportunitySection from '@/components/templates/webinar/OpportunitySection'
import FeaturesSection from '@/components/templates/webinar/FeaturesSection'
import MentorSection from '@/components/templates/webinar/MentorSection'
import StudentResults from '@/components/templates/webinar/StudentResults'
import VideoTestimonials from '@/components/templates/webinar/VideoTestimonials'
import CurriculumSection from '@/components/templates/webinar/CurriculumSection'
import BonusesSection from '@/components/templates/webinar/BonusesSection'
import PricingSection from '@/components/templates/webinar/PricingSection'
import FAQSection from '@/components/templates/webinar/FAQSection'
import FinalCTA from '@/components/templates/webinar/FinalCTA'
import Footer from '@/components/templates/webinar/Footer'
import { landingPageData } from '@/lib/data/landingPageData'

export default function Home() {
  return (
    <main className="bg-white">
      {/* Navbar */}
      <Navbar
        logoText="App Academy"
        ctaText={landingPageData.hero.ctaText}
        ctaPrice={landingPageData.hero.price}
      />

      {/* Hero Section */}
      <Hero
        title={landingPageData.hero.title}
        subtitle={landingPageData.hero.subtitle}
        ctaText={landingPageData.hero.ctaText}
        price={landingPageData.hero.price}
        badge={landingPageData.hero.badge}
        socialProof={landingPageData.hero.socialProof}
      />

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Trust Bar */}
      <TrustBar stats={landingPageData.marketStats} />

      {/* Problems Section */}
      <ProblemsSection problems={landingPageData.problems} />

      {/* Opportunity Section */}
      <OpportunitySection
        title={landingPageData.opportunity.title}
        items={landingPageData.opportunity.items}
      />

      {/* Features Section */}
      <FeaturesSection
        title={landingPageData.aboutBootcamp.title}
        description={landingPageData.aboutBootcamp.description}
        features={landingPageData.features}
      />

      {/* Mentor Section */}
      <MentorSection
        name={landingPageData.mentor.name}
        designation={landingPageData.mentor.designation}
        bio={landingPageData.mentor.bio}
        achievements={landingPageData.mentor.achievements}
      />

      {/* Student Results */}
      <StudentResults results={landingPageData.studentResults} />

      {/* Video Testimonials */}
      <VideoTestimonials testimonials={landingPageData.videoTestimonials} />

      {/* Curriculum Section */}
      <CurriculumSection curriculum={landingPageData.curriculum} />

      {/* Bonuses Section */}
      <BonusesSection bonuses={landingPageData.bonuses} />

      {/* Pricing Section */}
      <PricingSection
        originalPrice={landingPageData.pricing.originalPrice}
        discountedPrice={landingPageData.pricing.discountedPrice}
        gst={landingPageData.pricing.gst}
        savings={landingPageData.pricing.savings}
        savingsPercent={landingPageData.pricing.savingsPercent}
        guarantee={landingPageData.pricing.guarantee}
        features={landingPageData.pricing.features}
      />

      {/* FAQ Section */}
      <FAQSection faqItems={landingPageData.faq} />

      {/* Final CTA */}
      <FinalCTA
        title={landingPageData.cta.title}
        subtitle={landingPageData.cta.subtitle}
        buttonText={landingPageData.cta.buttonText}
        urgency={landingPageData.cta.urgency}
      />

      {/* Footer */}
      <Footer
        company={landingPageData.footer.company}
        links={landingPageData.footer.links}
        social={landingPageData.footer.social}
      />
    </main>
  )
}
