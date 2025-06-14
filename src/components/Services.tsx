
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Purpose",
    description: "Finally gain crystal-clear clarity in complex situations and make confident decisions without the exhausting second-guessing that's been holding you back.",
    features: ["Decisive leadership under pressure", "Unshakeable career direction", "Confident choices that accelerate results"]
  },
  {
    icon: Zap,
    title: "Presence",
    description: "Develop the magnetic leadership presence and influential communication that commands respect and opens doors to executive opportunities.",
    features: ["Executive presence that gets noticed", "Influence that drives results", "Confidence that inspires teams"]
  },
  {
    icon: Users,
    title: "People",
    description: "Master the art of navigating organizational politics and leading teams while maintaining the work-life balance you've been sacrificing for too long.",
    features: ["Effortless team leadership", "Political savvy that protects your interests", "Sustainable success without burnout"]
  },
  {
    icon: TrendingUp,
    title: "Progress",
    description: "Create your personalized roadmap to the next level with proven strategies that put you in control of your career trajectory and promotion timeline.",
    features: ["Accelerated career advancement", "Promotion-ready positioning", "Sustainable growth you can control"]
  }
];

const challenges = [
  "Feel stuck watching others get promoted while you're passed over despite your technical brilliance?",
  "Lie awake at night stressed about high-pressure decisions and team conflicts that seem impossible to navigate?",
  "Feel frustrated by organizational politics that seem designed to keep you from advancing?",
  "Know you're capable of more but lack the clear roadmap to get there?",
  "Have that nagging inner voice convincing you that you're not ready for the next level?",
  "Want to lead with confidence but feel like you're missing the executive presence others seem to have naturally?"
];

export const Services = () => {
  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        {/* Challenge Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            If You're a Tech Leader Who Feels Stuck Despite Your Brilliance, This Message Is For You
          </h2>
          <p className="text-xl text-[var(--text-color)] max-w-4xl mx-auto mb-8">
            You're brilliant. Your technical skills are undeniable. But somehow, you're still stuck watching others advance while you wonder what you're missing. Sound familiar?
          </p>
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
          <div className="mt-8 p-6 glass-card rounded-xl max-w-4xl mx-auto">
            <p className="text-xl text-[var(--text-color)] font-semibold">
              If you nodded "yes" to any of these, you're not alone. And more importantly, <span className="gradient-text">you're exactly where I can help.</span>
            </p>
          </div>
        </div>

        {/* 4P Program Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text section-divider relative pb-6">
            The 4P Leadership Compass: Your Blueprint to Executive Success
          </h2>
          <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto mb-8">
            Stop leaving your career to chance. In just 3 months, you'll master the four pillars that separate good managers from executive leaders who get promoted, respected, and rewarded.
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
          <h3 className="text-2xl font-bold gradient-text mb-6">The Transformation My Clients Experience</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-3xl">⚡</div>
              <h4 className="font-semibold text-[var(--text-color)]">Lightning-Fast Decision Making</h4>
              <p className="text-[var(--text-color-secondary)]">No more analysis paralysis - make confident choices that accelerate results</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🎯</div>
              <h4 className="font-semibold text-[var(--text-color)]">Magnetic Executive Presence</h4>
              <p className="text-[var(--text-color-secondary)]">Command respect and influence in every room you enter</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🚀</div>
              <h4 className="font-semibold text-[var(--text-color)]">Promotion-Ready Positioning</h4>
              <p className="text-[var(--text-color-secondary)]">Strategic career advancement on your timeline, not theirs</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--primary-light)]/10 rounded-xl">
            <p className="text-lg text-[var(--text-color)] font-medium">
              <strong>Here's what I promise:</strong> In 90 days, you'll either have the promotion conversation you've been avoiding, or you'll have the unshakeable confidence to demand the recognition you deserve. <em>That's not just a goal—it's your new reality.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
