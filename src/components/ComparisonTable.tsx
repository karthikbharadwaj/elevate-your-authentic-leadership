import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ComparisonTable = () => {
  const comparisons = [
    {
      category: "Clarity & Direction",
      withCoach: "Clear roadmap to promotion with personalized strategy",
      alone: "Trial and error, hoping something works"
    },
    {
      category: "Time to Results",
      withCoach: "90 days to transformation",
      alone: "Years of slow progress (if at all)"
    },
    {
      category: "Executive Presence",
      withCoach: "Proven frameworks to command respect",
      alone: "Guessing what 'presence' even means"
    },
    {
      category: "Confidence Building",
      withCoach: "Systematic approach to overcome imposter syndrome",
      alone: "Struggling with self-doubt alone"
    },
    {
      category: "Accountability",
      withCoach: "Weekly check-ins keeping you on track",
      alone: "Easy to procrastinate without support"
    },
    {
      category: "Network & Visibility",
      withCoach: "Strategic positioning for recognition",
      alone: "Invisible to decision-makers"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Working With a Coach vs. <span className="gradient-text">Going It Alone</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the clear difference expert guidance makes in your career trajectory
            </p>
          </div>

          {/* Comparison Table */}
          <Card className="overflow-hidden border-2 border-gray-200 shadow-xl">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white">
              <div className="p-6 border-r border-blue-400">
                <h3 className="font-bold text-lg">What You Need</h3>
              </div>
              <div className="p-6 border-r border-blue-400 bg-white/10">
                <h3 className="font-bold text-lg text-center">✨ With 4P Leadership Coaching</h3>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-center">🚫 Going It Alone</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                {/* Category */}
                <div className="p-6 border-r border-gray-200 font-semibold text-gray-900">
                  {item.category}
                </div>

                {/* With Coach */}
                <div className="p-6 border-r border-gray-200 bg-green-50/50">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item.withCoach}</span>
                  </div>
                </div>

                {/* Alone */}
                <div className="p-6 bg-red-50/30">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item.alone}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom CTA Row */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-gray-100 to-gray-50 border-t-2 border-gray-200">
              <div className="p-6 border-r border-gray-200">
                <p className="font-bold text-gray-900 text-lg">Your Choice:</p>
              </div>
              <div className="p-6 border-r border-gray-200 bg-green-50">
                <p className="text-green-700 font-bold text-center text-lg">Leading & Thriving 🚀</p>
              </div>
              <div className="p-6 bg-red-50">
                <p className="text-red-600 font-bold text-center text-lg">Stuck & Frustrated 😔</p>
              </div>
            </div>
          </Card>

          {/* Bottom Message */}
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 mb-6">
              <strong>The math is simple:</strong> Invest 3 months with expert guidance, or spend years hoping things change.
            </p>
            <p className="text-lg gradient-text font-bold">
              Which path will you choose?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
