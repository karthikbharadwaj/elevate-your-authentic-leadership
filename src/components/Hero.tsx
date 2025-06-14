
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
            Lead with Authentic Power: Master the Clarity, Confidence, and Executive Presence That Transforms Careers and Commands Respect
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-color)] mb-12 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up">
            You're already brilliant. You just need the powerful self-discovery and accountability partnership to transform your potential into promotions, influence, and the career breakthrough you deserve. No more second-guessing, no more waiting for the "perfect moment."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button 
              size="lg" 
              className="golden-button px-8 py-4 text-lg font-semibold rounded-full group"
              onClick={() => window.open('https://calendly.com/coach-karthikbharadwaj/coaching_discovery', '_blank')}
            >
              Yes, I'm Ready to Be an Authentic Leader
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-[var(--primary-color)] text-[var(--text-color)] hover:bg-[var(--primary-color)] hover:text-black transition-all duration-300"
              onClick={() => window.open('https://calendly.com/coach-karthikbharadwaj/coaching_discovery', '_blank')}
            >
              Claim Your Free Strategy Session
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="mt-16 pt-8 border-t border-[var(--primary-color)]/20 animate-fade-in">
            <p className="text-[var(--text-color-secondary)] mb-6">Join tech leaders who've accelerated their careers at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-[var(--text-color-secondary)]">Microsoft</div>
              <div className="text-2xl font-bold text-[var(--text-color-secondary)]">Google</div>
              <div className="text-2xl font-bold text-[var(--text-color-secondary)]">Apple</div>
              <div className="text-2xl font-bold text-[var(--text-color-secondary)]">Amazon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
