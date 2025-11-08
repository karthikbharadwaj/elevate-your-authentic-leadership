import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap, TrendingUp, CheckCircle2 } from "lucide-react";

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

const innerThoughts = [
  "Why don't they see my value?",
  "Do I even belong in this room?",
  "Am I really ready for this level?"
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Problem Section - Visual Storytelling */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Powerful Headline */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                You're a brilliant tech leader with one problem:
              </h2>
              <h3 className="text-5xl md:text-6xl font-bold leading-tight gradient-text">
                No one else can see it.
              </h3>

              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  You're technically sharp. You deliver results. But when it comes to <strong>executive presence</strong>, you feel invisible.
                </p>
                <p>
                  You know you're capable, but in high-stakes meetings, you hesitate. Your ideas get overlooked. Others with less expertise command the room.
                </p>
                <p>
                  The truth is, <strong>it's not a skill problem</strong>, it's a <em>visibility and confidence problem</em>.
                </p>
                <p>
                  Showing up with authentic leadership presence is hard. Articulating your value without sounding arrogant feels impossible.
                </p>
                <p>
                  For many, it's <strong>imposter syndrome</strong> whispering you're not ready.
                </p>
                <p>
                  For others, it's simply not knowing <strong>how</strong> to build the clarity and presence that opens doors.
                </p>
                <p className="text-xl font-semibold text-gray-900 pt-4">
                  You need an experienced guide to help you step into the leader you already are.
                </p>
              </div>
            </div>

            {/* Right: Professional Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl max-w-[1000px] max-h-[1000px]">
                <img
                  src="/lovable-uploads/confused_client.jpg"
                  alt="Professional tech leader feeling stuck and confused"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4P Program Section */}
        <div id="program" className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] py-20 px-6 rounded-3xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                The 4P Leadership Accelerator: <span className="gradient-text">Your Blueprint to Executive Success</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Stop leaving your career to chance. In just <strong>3 months</strong>, you'll master the four pillars that separate good managers from executive leaders who get promoted, respected, and rewarded.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl w-16 h-16 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-[#3B82F6]" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Results Promise */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
                The Transformation You'll Experience
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center space-y-3">
                  <div className="text-5xl">⚡</div>
                  <h4 className="font-bold text-xl text-gray-900">Lightning-Fast Decisions</h4>
                  <p className="text-gray-600">No more analysis paralysis, make confident choices that accelerate results</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-5xl">🎯</div>
                  <h4 className="font-bold text-xl text-gray-900">Magnetic Presence</h4>
                  <p className="text-gray-600">Command respect and influence in every room you enter</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-5xl">🚀</div>
                  <h4 className="font-bold text-xl text-gray-900">Promotion-Ready</h4>
                  <p className="text-gray-600">Strategic career advancement on your timeline, not theirs</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <p className="text-lg text-gray-900 text-center font-medium leading-relaxed">
                  <strong>Imagine this:</strong> In just 90 days, you'll either be confidently leading the promotion conversation you've been putting off, or you'll possess the unwavering self-assurance to demand the recognition you deserve. <span className="gradient-text font-bold">This isn't just a promise; it's your guaranteed path to a new reality.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
