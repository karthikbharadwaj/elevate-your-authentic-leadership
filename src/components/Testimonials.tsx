import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Asha Kini",
    role: "Senior Manager → Director",
    metric: "Promoted in 4 months",
    content: "I had the privilege of working with Karthik during a critical point in my career. His deep presence and compassionate approach helped me navigate challenges I hadn't fully acknowledged. What stood out most was how he helped me stop minimizing my value and own my leadership. That clarity gave me the confidence to have the promotion conversation I'd been avoiding. Within 4 months, I was promoted to Director.",
    results: ["Promoted to Director", "30% salary increase", "Leading 15-person team"],
  },
  {
    name: "Anu Thakur",
    role: "Executive Coach",
    metric: "Built confidence to expand practice",
    content: "Every coach needs a coach, and I found mine in Karthik. His deep understanding of coaching principles and empathetic approach made each session insightful. Karthik helped me identify my strengths, step out of my comfort zone and build confidence. His practical suggestions equipped me to navigate challenges more effectively and expand my own coaching practice.",
    results: ["Expanded coaching practice", "Increased confidence", "Better client outcomes"],
  },
  {
    name: "Aniket Anjali Pohekar",
    role: "Tech Leader",
    metric: "Clarity and actionable strategy",
    content: "Every session was impactful. His approach helped me gain clarity and move forward with a clear action plan, which is exactly what good coaching should do. What stands out about Karthik is his ability to bring a thoughtful, strategic perspective into conversations. It adds depth to his coaching and makes him an insightful and steady thinking partner for anyone facing professional challenges.",
    results: ["Clear action plan", "Strategic clarity", "Confident decision-making"],
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Wall of Love: <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what happens when tech leaders invest in themselves
          </p>
        </div>

        {/* Masonry Grid Layout - Wall of Love Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto animate-fade-in-up">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Metric Badge */}
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full mb-4">
                  <span className="text-xs font-semibold gradient-text">{testimonial.metric}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-4 leading-relaxed text-sm">
                  "{testimonial.content}"
                </blockquote>

                {/* Results - Compact */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs font-semibold text-gray-900 mb-2">Results:</div>
                  <div className="space-y-1">
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#3B82F6] rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-[#3B82F6] font-medium text-xs">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
              <span className="font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600 text-sm">from 47 clients</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="font-semibold text-gray-900">50+ Leaders Coached</span>
            <span className="text-gray-400">•</span>
            <span className="font-semibold gradient-text">32 Promotions This Year</span>
          </div>
        </div>
      </div>
    </section>
  );
};
