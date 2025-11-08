import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

interface CTASectionProps {
  variant?: "default" | "compact";
}

export const CTASection = ({ variant = "default" }: CTASectionProps) => {
  if (variant === "compact") {
    return (
      <div className="py-16 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Stop Being Overlooked and Start Being Promoted?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Book your free 30-minute strategy call. No pressure. No obligation. Just clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-[#1E40AF] hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-xl group"
                onClick={() =>
                  window.open(
                    "https://calendly.com/coach-karthikbharadwaj/coaching_discovery",
                    "_blank"
                  )
                }
              >
                Book My Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-blue-100">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Only 3 discovery calls available this week</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Claim Your Next Promotion?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-4">
            Book your free 30-minute strategy call today.
          </p>
          <p className="text-lg text-blue-200 mb-10">
            We'll diagnose what's holding you back and create your roadmap to the next level.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-[#1E40AF] hover:bg-gray-100 px-10 py-7 text-lg font-semibold rounded-full shadow-2xl group"
              onClick={() =>
                window.open(
                  "https://calendly.com/coach-karthikbharadwaj/coaching_discovery",
                  "_blank"
                )
              }
            >
              Book My Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-blue-100 mb-6">
            <Clock className="w-5 h-5 text-[#F59E0B]" />
            <span className="font-medium">Only 3 discovery calls available this week</span>
          </div>

          <p className="text-sm text-blue-200">
            No pressure • No obligation • Just clarity on your path forward
          </p>
        </div>
      </div>
    </section>
  );
};
