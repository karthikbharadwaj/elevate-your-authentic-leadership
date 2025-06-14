
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AboutCoach } from "@/components/AboutCoach";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  console.log("Index component is rendering");
  
  return (
    <div className="min-h-screen hero-section">
      <Hero />
      <Services />
      <AboutCoach />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
