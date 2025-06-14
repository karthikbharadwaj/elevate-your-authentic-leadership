
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Asha Kini",
    role: "Senior Manager",
    content: "I had the privilege of working with Karthik during a one-hour coaching session in the Himalayas—a setting as grounding as the experience itself. In that brief yet powerful time, he helped me navigate a grief I hadn’t fully acknowledged. What stood out most was Karthik’s deep presence and compassionate approach. He gently guided me to stop minimizing my emotions or comparing them to others' experiences, reminding me that grief is not something to be ranked or rationalized—it's something to be honored. That session gave me clarity, emotional permission, and a sense of peace that I hadn’t been able to access on my own. If you're seeking a coach who can create a safe space, meet you where you are, and help you reconnect with your emotional truth, I wholeheartedly recommend Karthik.",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text section-divider relative pb-6">
            Success Story from a Tech Leader
          </h2>
          <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto">
            Discover how a tech professional accelerated their career and transformed their leadership through the 4P Leadership Compass program.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-0 hover-lift relative overflow-hidden">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-[var(--primary-color)] mb-4 opacity-50" />
                
                <blockquote className="text-[var(--text-color)] mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-[var(--primary-color)]/20 pt-4">
                  <div className="font-semibold text-[var(--text-color)]">{testimonial.name}</div>
                  <div className="text-[var(--primary-color)] font-medium">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
