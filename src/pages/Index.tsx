
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { LeadMagnet } from "@/components/LeadMagnet";
import { AboutCoach } from "@/components/AboutCoach";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

const Index = () => {
  console.log("Index component is rendering");

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <LeadMagnet />
      <CTASection variant="compact" />
      <div id="about">
        <AboutCoach />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <CTASection />
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
