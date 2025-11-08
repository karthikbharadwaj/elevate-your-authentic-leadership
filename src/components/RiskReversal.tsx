import { Card } from "@/components/ui/card";
import { Shield, Clock, Target, TrendingUp } from "lucide-react";

export const RiskReversal = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "My Personal Commitment",
      description: "If you show up, do the work, and don't see measurable progress in your clarity, confidence, and career trajectory within 90 days, I'll work with you for free until you do."
    },
    {
      icon: Clock,
      title: "Time Investment Protected",
      description: "Weekly 1-on-1 sessions that fit your schedule. No wasted time on generic advice, every session is tailored to your specific challenges and goals."
    },
    {
      icon: Target,
      title: "Clear Success Metrics",
      description: "We'll define your success criteria in our first session. Whether it's a promotion conversation, executive presence, or strategic positioning, we track real progress."
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "32 promotions in the last 12 months. 50+ tech leaders transformed. This isn't theory, it's a battle-tested system that works."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              This Isn't Risky. <span className="gradient-text">Staying Where You Are Is.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm so confident in the 4P Leadership Accelerator that I'm putting my reputation on the line. Here's what you can count on:
            </p>
          </div>

          {/* Guarantees Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {guarantees.map((guarantee, index) => (
              <Card
                key={index}
                className="p-8 border-2 border-gray-200 hover:border-[#3B82F6] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex-shrink-0">
                    <guarantee.icon className="w-8 h-8 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] rounded-3xl p-10 md:p-12 text-center border-2 border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Real Risk? Waiting Another Year
            </h3>
            <div className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
              <p>
                Think about it: How much is another year of being overlooked worth to you?
              </p>
              <p>
                How much longer will you watch less-qualified people get promoted while you wonder what you're doing wrong?
              </p>
              <p className="text-xl font-bold text-gray-900 pt-4">
                The only risk is doing nothing.
              </p>
            </div>
          </div>

          {/* Testimonial Proof */}
          <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="text-6xl">💬</div>
              <div>
                <p className="text-lg text-gray-700 italic mb-4">
                  "I was skeptical at first, another coach promising results? But Karthik's approach is different. Within 4 months, I wasn't just promoted to Director; I gained the confidence to own my leadership. The investment paid for itself 10x over."
                </p>
                <p className="font-bold text-gray-900">Asha Kini</p>
                <p className="text-sm text-gray-600">Senior Manager → Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
