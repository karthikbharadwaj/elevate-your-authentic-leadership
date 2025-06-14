
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Leaders Coached" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: BookOpen, value: "50+", label: "Certifications" },
  { icon: Clock, value: "10,000+", label: "Coaching Hours" }
];

export const About = () => {
  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              About Your Leadership Coach
            </h2>
            <div className="space-y-6 text-lg text-[var(--text-color)] leading-relaxed">
              <p>
                With over 15 years of experience in executive leadership and coaching, I've dedicated my career to helping leaders unlock their full potential and create lasting organizational change.
              </p>
              <p>
                My approach combines proven methodologies with personalized strategies, ensuring each leader develops the skills and mindset needed to thrive in today's complex business environment.
              </p>
              <p>
                I believe that authentic leadership starts from within. Through our work together, you'll discover your unique leadership style, overcome limiting beliefs, and develop the confidence to lead with purpose and impact.
              </p>
            </div>
            <Button 
              size="lg" 
              className="golden-button mt-8 px-8 py-4 rounded-full font-semibold"
            >
              Learn More About My Approach
            </Button>
          </div>
          
          <div className="space-y-8 animate-fade-in-up">
            {/* Profile image placeholder */}
            <div className="glass-card rounded-2xl aspect-square flex items-center justify-center text-4xl font-bold gradient-text relative overflow-hidden">
              Your Photo
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 rounded-xl text-center hover-lift relative overflow-hidden">
                  <stat.icon className="w-8 h-8 text-[var(--primary-color)] mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-[var(--text-color-secondary)] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
