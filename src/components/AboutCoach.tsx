import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const AboutCoach = () => {

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Meet <span className="gradient-text">Karthik</span>
            </h2>
            <p className="text-xl text-gray-600">From Tech Builder to Executive Coach</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Profile Image Section */}
            <div className="text-center lg:text-left animate-fade-in-up lg:pt-20">
              <div className="relative inline-block">
                <div className="w-96 h-96 md:w-[500px] md:h-[500px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/lovable-uploads/coach_profile_pic.jpeg"
                    alt="Karthik Bharadwaj - Executive Coach"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] opacity-10 rounded-2xl -z-10"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-gray-700 leading-relaxed">
                After <strong>15 years building high-performance tech teams</strong>, I discovered something crucial:
              </p>
              <p className="text-2xl font-semibold text-gray-900 leading-tight">
                Technical brilliance doesn't equal leadership success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The best engineers often struggle as leaders, not because they can't lead, but because no one taught them how. I was working with AI way before it became mainstream, and I understand firsthand where tech leadership is heading.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As an Executive Coach, I help tech leaders overcome self-doubt, build executive presence, and accelerate their careers. That often means getting promoted faster and successfully navigating new roles, but it starts with overcoming what you can't even see holding you back.
              </p>

              <Card className="border-0 shadow-lg bg-white mt-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Why Leaders Choose to Work With Me
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">15+ Years in the Trenches</div>
                        <div className="text-gray-600">I've built high-performance tech teams and navigated every challenge you're facing</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Proven Results</div>
                        <div className="text-gray-600">50+ leaders coached, 32 promotions in the last 12 months</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">AI & Tech Expertise</div>
                        <div className="text-gray-600">I understand the unique challenges of tech leadership in an AI-driven world</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Personal Attention</div>
                        <div className="text-gray-600">You work directly with me, no junior coaches or generic programs</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <p className="text-lg text-gray-900 font-medium">
                  I help you through a <span className="font-bold gradient-text">3-month intensive 4P Leadership Compass program</span>, enabling you to expand your leadership across the dimensions of Purpose, People, Presence & Progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
