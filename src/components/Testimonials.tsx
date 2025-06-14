
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering, TechStart Inc.",
    content: "The 4P Leadership Compass program transformed how I navigate organizational politics. I got promoted to VP within 4 months and now lead with confidence in high-pressure situations.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Director, Global Tech Corp",
    content: "Working together helped me overcome imposter syndrome and develop the executive presence I needed. My team engagement improved by 40% and I finally feel in control of my career.",
    rating: 5
  },
  {
    name: "Emily Park",
    role: "CTO, AI Innovations",
    content: "The clarity I gained on Purpose and Progress was game-changing. I stopped second-guessing myself and made confident decisions that accelerated both my career and our company's growth.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Engineering Manager, Scale Ventures",
    content: "The People dimension of the program helped me navigate complex team dynamics and organizational challenges. I now influence at the executive level with confidence.",
    rating: 5
  },
  {
    name: "Lisa Kim",
    role: "Principal Engineer, Future Systems",
    content: "I developed the leadership presence and communication skills that were missing from my toolkit. It's been instrumental in my transition to engineering leadership.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Head of Product, Enterprise Corp",
    content: "The program gave me a clear roadmap for my next career step. I learned to control the pace of my growth while maintaining work-life balance. Highly recommend!",
    rating: 5
  },
  {
    name: "A. G.",
    role: "Tech Professional",
    content: "I had the privilege of working with Karthik during a one-hour coaching session in the Himalayas—a setting as grounding as the experience itself. In that brief yet powerful time, he helped me navigate a grief I hadn’t fully acknowledged. What stood out most was Karthik’s deep presence and compassionate approach. He gently guided me to stop minimizing my emotions or comparing them to others' experiences, reminding me that grief is not something to be ranked or rationalized—it's something to be honored. That session gave me clarity, emotional permission, and a sense of peace that I hadn’t been able to access on my own. If you're seeking a coach who can create a safe space, meet you where you are, and help you reconnect with your emotional truth, I wholeheartedly recommend Karthik.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text section-divider relative pb-6">
            Success Stories from Tech Leaders
          </h2>
          <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto">
            Discover how ambitious tech professionals have accelerated their careers and transformed their leadership through the 4P Leadership Compass program.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-0 hover-lift relative overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
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
