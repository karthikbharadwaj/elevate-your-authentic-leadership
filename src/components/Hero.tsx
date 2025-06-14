import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-section overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative line */}
          <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded animate-fade-in-up"></div>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-1 mb-6 animate-fade-in-up">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-[var(--text-color-secondary)] font-medium">Trusted by Tech Leaders Who've Achieved Results</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight gradient-text animate-fade-in-up">
            Unlock Promotions, Career Breakthroughs with Authentic Leadership
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-color)] mb-12 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up">
            Develop the clarity, confidence, and executive presence that commands respect and drives results. Lead with authenticity and watch your career accelerate.
          </p>
          
          <div className="flex justify-center animate-fade-in-up">
            <Button 
              size="lg" 
              className="golden-button px-8 py-4 text-lg font-semibold rounded-full group"
              onClick={() => window.open('https://calendly.com/coach-karthikbharadwaj/coaching_discovery', '_blank')}
            >
              Yes, I'm Ready to Be an Authentic Leader
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
