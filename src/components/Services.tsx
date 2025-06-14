
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Purpose",
    description: "Gain clarity in complex situations and make confident decisions without second-guessing yourself.",
    features: ["Strategic decision-making", "Career clarity & direction", "Confident leadership choices"]
  },
  {
    icon: Zap,
    title: "Presence",
    description: "Develop the leadership presence, influence, and communication skills to thrive in high-pressure situations.",
    features: ["Executive presence", "Influential communication", "Leadership confidence"]
  },
  {
    icon: Users,
    title: "People",
    description: "Master navigating organizational politics, influence, and work-life balance while leading effectively.",
    features: ["Team leadership", "Organizational politics", "Work-life integration"]
  },
  {
    icon: TrendingUp,
    title: "Progress",
    description: "Understand and plan your next career step with sustainable success strategies that control the pace.",
    features: ["Career acceleration", "Promotion readiness", "Sustainable growth"]
  }
];

const challenges = [
  "Feel stuck or uncertain about their next career move",
  "Are dealing with conflict, high-pressure decisions, or team challenges",
  "Struggling to navigate organizational politics",
  "Lack clarity and a roadmap for the next chapter of their career",
  "Have an inner critic that's using up too much mental energy",
  "Want to strengthen their confidence, communication, and leadership presence"
];

export const Services = () => {
  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        {/* Challenge Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Are You a Tech Leader Who...
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 glass-card rounded-lg">
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[var(--text-color)]">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4P Program Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text section-divider relative pb-6">
            The 4P Leadership Compass Program
          </h2>
          <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto mb-8">
            A 3-month intensive program that expands your leadership across four critical dimensions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift border-0 relative overflow-hidden group"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-[var(--primary-color)]/20 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-[var(--primary-color)] transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[var(--primary-color)] group-hover:text-black transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-[var(--text-color)] mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-[var(--text-color-secondary)] text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[var(--text-color)]">
                      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Section */}
        <div className="glass-card p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold gradient-text mb-6">What My Clients Achieve</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-3xl">⚡</div>
              <h4 className="font-semibold text-[var(--text-color)]">Faster Decision-Making</h4>
              <p className="text-[var(--text-color-secondary)]">Clear, confident choices in high-pressure situations</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🎯</div>
              <h4 className="font-semibold text-[var(--text-color)]">Stronger Leadership Presence</h4>
              <p className="text-[var(--text-color-secondary)]">Increased influence in critical conversations</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🚀</div>
              <h4 className="font-semibold text-[var(--text-color)]">Sustainable Career Success</h4>
              <p className="text-[var(--text-color-secondary)]">Growth without stress, controlling your pace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
