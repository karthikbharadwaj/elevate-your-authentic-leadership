
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "The coaching transformed how I lead my team. I've seen a 40% improvement in team engagement and our company culture has never been stronger.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "VP of Operations, Global Corp",
    content: "Working together helped me navigate complex organizational changes with confidence. The strategic thinking frameworks are invaluable.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Director, Innovation Labs",
    content: "I gained clarity on my leadership vision and learned to communicate it effectively. My team now rallies behind our shared purpose.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Founder, Scale Ventures",
    content: "The authentic leadership approach helped me build genuine connections with my team. Our productivity and morale have skyrocketed.",
    rating: 5
  },
  {
    name: "Lisa Park",
    role: "COO, Future Systems",
    content: "I developed the emotional intelligence skills that were missing from my leadership toolkit. It's been a game-changer for my career.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Senior Manager, Enterprise Corp",
    content: "The coaching gave me the confidence to take on bigger challenges. I was promoted to VP within 6 months of our program.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leaders have transformed their careers and organizations through our coaching programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-50" />
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 font-medium">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
