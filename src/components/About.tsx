
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
        {/* Stats section only */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  );
};
