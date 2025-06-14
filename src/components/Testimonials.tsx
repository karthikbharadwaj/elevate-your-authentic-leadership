
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Asha Kini",
    role: "Senior Manager",
    content: "I had the privilege of working with Karthik during a one-hour coaching session in the Himalayas—a setting as grounding as the experience itself. In that brief yet powerful time, he helped me navigate a grief I hadn’t fully acknowledged. What stood out most was Karthik’s deep presence and compassionate approach. He gently guided me to stop minimizing my emotions or comparing them to others' experiences, reminding me that grief is not something to be ranked or rationalized—it's something to be honored. That session gave me clarity, emotional permission, and a sense of peace that I hadn’t been able to access on my own. If you're seeking a coach who can create a safe space, meet you where you are, and help you reconnect with your emotional truth, I wholeheartedly recommend Karthik.",
  },
  {
    name: "Anu Thakur",
    role: "",
    content: "Every coach needs a coach, and I found mine in Karthik. I met Karthik through an online peer-to-peer coaching platform. Karthik's deep understanding of coaching principles and empathetic approach made each session insightful. Karthik helped me identify my strengths, step out of my comfort zone and build confidence. His practical suggestions equipped me to navigate some events in my life more effectively. Thank you Karthik for all the support and for enabling me!",
  },
  {
    name: "Aniket Anjali Pohekar",
    role: "",
    content: "Every session was impactful. His approach has helped me gain clarity and move forward with a clear action plan, which is exactly what good coaching should do. What also stands out about Karthik is his ability to bring a thoughtful, spiritual perspective into conversations. It adds depth to his coaching and makes him an insightful and steady thinking partner. I highly recommend Karthik to anyone facing personal or professional challenges and looking for a coach who can help them navigate their way forward.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text section-divider relative pb-6">
            Success Stories
          </h2>
          <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto">
            Here's what clients are saying about their coaching experience.
          </p>
        </div>
        
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto animate-fade-in-up"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1 h-full">
                  <Card className="glass-card border-0 hover-lift relative overflow-hidden flex flex-col h-full">
                    <CardContent className="p-8 flex flex-col flex-grow">
                      <Quote className="w-8 h-8 text-[var(--primary-color)] mb-4 opacity-50" />
                      
                      <blockquote className="text-[var(--text-color)] mb-6 leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="border-t border-[var(--primary-color)]/20 pt-4 mt-auto">
                        <div className="font-semibold text-[var(--text-color)]">{testimonial.name}</div>
                        {testimonial.role && <div className="text-[var(--primary-color)] font-medium">{testimonial.role}</div>}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
