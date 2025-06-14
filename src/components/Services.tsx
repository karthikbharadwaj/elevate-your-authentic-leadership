
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb, TrendingUp, Brain, Heart } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Executive Coaching",
    description: "One-on-one coaching sessions designed to enhance your leadership capabilities and drive organizational success.",
    features: ["Strategic thinking", "Decision making", "Team leadership"]
  },
  {
    icon: Target,
    title: "Leadership Development",
    description: "Comprehensive programs that build essential leadership skills for current and aspiring leaders.",
    features: ["Communication skills", "Emotional intelligence", "Change management"]
  },
  {
    icon: Lightbulb,
    title: "Team Transformation",
    description: "Transform your team dynamics and create high-performing, collaborative work environments.",
    features: ["Team building", "Conflict resolution", "Performance optimization"]
  },
  {
    icon: TrendingUp,
    title: "Performance Coaching",
    description: "Maximize your potential and achieve breakthrough results in your professional and personal life.",
    features: ["Goal setting", "Accountability", "Results tracking"]
  },
  {
    icon: Brain,
    title: "Strategic Thinking",
    description: "Develop the mindset and skills needed to think strategically and lead organizational transformation.",
    features: ["Vision development", "Strategic planning", "Innovation mindset"]
  },
  {
    icon: Heart,
    title: "Authentic Leadership",
    description: "Discover your unique leadership style and lead with authenticity, purpose, and emotional intelligence.",
    features: ["Self-awareness", "Values alignment", "Purpose-driven leadership"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leadership Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coaching solutions designed to unlock your leadership potential and drive meaningful change in your organization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
