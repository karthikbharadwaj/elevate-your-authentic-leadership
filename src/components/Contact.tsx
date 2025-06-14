
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
        
        <div className="flex justify-center animate-fade-in-up">
          {/* Direct Calendly Section */}
          <Card className="glass-card border-0 relative overflow-hidden max-w-xl w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold gradient-text">
                Ready for Your Promotion? Start Here.
              </CardTitle>
              <p className="text-[var(--text-color-secondary)]">
                In a focused 30-minute strategy call, we'll diagnose what's holding you back and build a concrete action plan to secure your next leadership role.
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
        </div>
      </div>
    </section>
  );
};
