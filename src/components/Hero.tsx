import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, X, Check } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF] pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1E40AF 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="text-left space-y-8">
              {/* Category Label */}
              <div className="inline-block">
                <span className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider">
                  Executive Leadership Career Coaching
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up text-gray-900">
                Stop Waiting for Permission. Claim Your Next Promotion.
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up max-w-xl">
                The proven 90-day system that transforms brilliant tech minds into executive leaders who command respect—and corner offices.
              </p>

              {/* CTA Button */}
              <div className="animate-fade-in-up">
                <Button
                  size="lg"
                  className="golden-button px-10 py-7 text-lg font-semibold rounded-full group shadow-xl"
                  onClick={() => window.open('https://calendly.com/coach-karthikbharadwaj/coaching_discovery', '_blank')}
                >
                  Book Free Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-2 text-sm animate-fade-in-up">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="font-medium text-gray-700">50+ Tech Leaders Coached</span>
              </div>
            </div>

            {/* Right Column - Before/After Transformation */}
            <div className="relative animate-fade-in-up">
              {/* Curved Arrow at top connecting the two boxes */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <svg width="200" height="80" viewBox="0 0 200 80" className="text-gray-300">
                  <path d="M20,60 Q100,20 180,60" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <path d="M180,60 L170,55 M180,60 L175,70" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Top row - Before and After labels */}
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-red-100 border-2 border-red-300 text-red-900 font-bold text-sm rounded-full">
                    Before 4P Leadership
                  </span>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-green-100 border-2 border-green-300 text-green-900 font-bold text-sm rounded-full">
                    After 4P Leadership
                  </span>
                </div>
              </div>

              {/* Side by side boxes */}
              <div className="grid grid-cols-2 gap-6">
                {/* Before Box */}
                <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-5 shadow-md">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium">Lack of confidence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium">Overlooked for promotion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium">Invisible in the room</span>
                    </div>
                  </div>
                </div>

                {/* After Box */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-5 shadow-md">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium">Confident</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium">Promotion ready</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium">Executive presence</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom results row */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="text-center">
                  <p className="text-lg font-bold text-red-600">Stuck & Frustrated 😔</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-green-600">Leading & Thriving 🚀</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-16 pt-8 border-t border-gray-200 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-gray-600">Tech Leaders Coached</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">32</div>
                <div className="text-sm text-gray-600">Promotions in 12 Months</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
