
import React from 'react';
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

export const FourPProgram = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text section-divider relative pb-6">
          The 4P Leadership Compass: Your Personalized Blueprint to Executive Success
        </h2>
        <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto mb-8">
          Stop leaving your career to chance. Through 6 personalized coaching sessions over 3 months, you'll master the four dimensions of authentic leadership that separate good managers from executive leaders who get promoted, respected, and rewarded.
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
    </>
  );
};
