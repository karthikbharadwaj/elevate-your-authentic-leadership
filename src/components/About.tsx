
import { Button } from "@/components/ui/button";
import { Award, Code, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "15+", label: "Years Building Tech Teams" },
  { icon: Award, value: "100+", label: "Tech Leaders Coached" },
  { icon: Code, value: "AI", label: "Early Adopter & Expert" },
  { icon: Clock, value: "3 Month", label: "Intensive Program" }
];

export const About = () => {
  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              I've Been in the Trenches
            </h2>
            <div className="space-y-6 text-lg text-[var(--text-color)] leading-relaxed">
              <p>
                For the last 15 years, I've been building high-performance tech teams and working with AI way before it became mainstream. I understand firsthand its true potential and where it's heading.
              </p>
              <p>
                As an Executive Coach, I help tech leaders gain career clarity, build confidence, and leverage executive presence to accelerate their careers. That often looks like getting those exciting promotions faster and successfully navigating your new role.
              </p>
              <p>
                But it also means overcoming self-doubt, imposter syndrome, and anything else getting in the way that you might not even see. I help ambitious technology leaders who are ready to take control of their career trajectory.
              </p>
            </div>
            <Button 
              size="lg" 
              className="golden-button mt-8 px-8 py-4 rounded-full font-semibold"
            >
              Learn About My Approach
            </Button>
          </div>
          
          <div className="space-y-8 animate-fade-in-up">
            {/* Profile image placeholder */}
            <div className="glass-card rounded-2xl aspect-square flex items-center justify-center text-4xl font-bold gradient-text relative overflow-hidden">
              Tech Leadership Coach
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
