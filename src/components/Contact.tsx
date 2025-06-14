import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text section-divider relative pb-6">
            Your Career Breakthrough Starts with One Decision
          </h2>
          <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto mb-6">
            You've read this far because something resonated. You're tired of being overlooked. You're ready to stop waiting for "someday" and start creating the leadership career you deserve.
          </p>
          <div className="p-6 glass-card rounded-xl max-w-4xl mx-auto">
            <p className="text-lg text-[var(--text-color)] font-medium">
              <strong>Here's the truth:</strong> Every day you delay is another day watching others advance while you stay stuck. But here's the good news: <span className="gradient-text">you're one conversation away from changing everything.</span>
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-fade-in-up">
          {/* Direct Calendly Section */}
          <Card className="glass-card border-0 relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold gradient-text">
                Book Your Strategy Session
              </CardTitle>
              <p className="text-[var(--text-color-secondary)]">
                In 30 minutes, we'll identify your biggest leadership obstacles and create a clear action plan for your next promotion.
              </p>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg"
                className="golden-button w-full py-4 rounded-full font-semibold mb-4"
                onClick={() => window.open('https://calendly.com/coach-karthikbharadwaj/coaching_discovery', '_blank')}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Your Call Instantly
              </Button>
              <p className="text-sm text-[var(--text-color-secondary)] text-center">
                Limited spots available. I personally conduct every session.
              </p>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            <Card className="glass-card border-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-light)] text-black relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Don't Wait Another Day
                </h3>
                <p className="mb-6 opacity-90">
                  Every promotion cycle you miss is another year of watching others advance. The tech leaders getting promoted aren't necessarily smarter than you - they just have the strategic advantage you're about to gain.
                </p>
                <div className="mb-6 p-4 bg-black/10 rounded-lg">
                  <p className="font-semibold">
                    "I wish I had started this journey sooner. The transformation in just 3 months was incredible." - Sarah Chen, VP of Engineering
                  </p>
                </div>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-800 font-semibold"
                  onClick={() => window.open('https://calendly.com/coach-karthikbharadwaj/coaching_discovery', '_blank')}
                >
                  Yes, I'm Ready to Transform My Leadership
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
