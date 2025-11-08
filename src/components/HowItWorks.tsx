import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const challenges = [
  "Lack of clarity and focus (I'm good enough, but what do I do?)",
  "Imposter syndrome (afraid of not being qualified enough)",
  "Constant frustration in effectively articulating your value",
  "Endless rejection without knowing what's the problem",
  "Being stuck in a role that doesn't value your worth",
  "Struggling to network and put yourself out there"
];

const solutions = [
  "Identify the exact path for you (clarity on purpose and direction)",
  "Build unshakeable confidence in your leadership abilities",
  "Develop executive presence that commands respect and influence",
  "Master the art of articulating your value authentically",
  "Create your personalized roadmap to promotion and recognition",
  "Build meaningful connections and expand your professional network"
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
              The system is rigged against most tech leaders{" "}
              <span className="text-gray-600">(and especially newcomers).</span>
            </h2>
            <p className="text-3xl md:text-4xl font-bold gradient-text leading-tight">
              But there's still a way to win...
            </p>
          </div>

          {/* Two Column Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Left: Challenges */}
            <Card className="p-8 md:p-10 border-2 border-red-100 bg-red-50/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                On your own you'll face...
              </h3>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-800 leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Right: Solutions */}
            <Card className="p-8 md:p-10 border-2 border-green-100 bg-green-50/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                Together we can...
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-800 leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* How The Program Works */}
          <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] p-8 md:p-12 rounded-3xl">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              How The <span className="gradient-text">4P Leadership Accelerator</span> Works
            </h3>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">Discovery Call</h4>
                <p className="text-gray-700">
                  We diagnose what's holding you back and create a clear roadmap to your next level
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">3-Month Intensive</h4>
                <p className="text-gray-700">
                  Weekly 1-on-1 sessions where we build your 4P foundation: Purpose, Presence, People, Progress
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">Your Breakthrough</h4>
                <p className="text-gray-700">
                  Step into the promotion conversation with confidence or demand the recognition you deserve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
