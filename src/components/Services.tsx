
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

export const Services = () => {
  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        {/* Persuasive Write-up Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-lg text-[var(--text-color)] space-y-6">
            <p className="text-xl font-medium text-center mb-8">
              You know authentic leadership can help in a lot of ways:
            </p>
            <div className="text-center mb-8 space-y-2">
              <div className="text-lg font-semibold text-[var(--primary-color)]">• Advance your career faster</div>
              <div className="text-lg font-semibold text-[var(--primary-color)]">• Command respect and influence</div>
              <div className="text-lg font-semibold text-[var(--primary-color)]">• Build high-performing teams</div>
            </div>
            
            <p className="text-lg leading-relaxed">
              You know to unlock these goals, you need authentic leadership skills, executive presence, and strategic thinking.
            </p>
            
            <p className="text-lg leading-relaxed">
              So you took a $49 leadership course online.
            </p>
            
            <p className="text-lg leading-relaxed">
              You learned about "servant leadership" from someone who's never managed a P&L, navigated a layoff, or led through a crisis.
            </p>
            
            <p className="text-lg leading-relaxed">
              Or more useless theory that doesn't get you any closer to that promotion.
            </p>
            
            <p className="text-lg leading-relaxed font-semibold">
              I've been there.
            </p>
            
            <p className="text-lg leading-relaxed">
              If you're new to leadership, you probably start by googling "leadership development." Then you see the 847,000,000 results, scroll for a few seconds, then jump to the first generic program you see.
            </p>
            
            <p className="text-lg leading-relaxed">
              You've read the books, watched LinkedIn Learning, and taken all the courses.
            </p>
            
            <p className="text-lg leading-relaxed">
              But actually leading authentically in real-world tech environments (and not just in hypothetical scenarios)?
            </p>
            
            <p className="text-lg leading-relaxed">
              That can seem like something other people figure out, not you.
            </p>
            
            <p className="text-lg leading-relaxed">
              Instead, you're...
            </p>
            
            <div className="bg-gray-800/50 p-6 rounded-lg my-8">
              <ul className="space-y-4 text-[var(--text-color-secondary)]">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Taking courses with no practical application to your actual tech leadership challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Wasting time on one-size-fits-all programs focused on theory—not tech leadership realities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Buying recorded courses that leave you with generic advice, outdated frameworks, and no one to help you</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Totally lost with where to focus your attention to get the concrete skills you need</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>Stressing out about actually leading effectively so you can get that promotion (or finally feel confident in your role)</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg leading-relaxed font-semibold">
              Sound about right?
            </p>
            
            <p className="text-lg leading-relaxed">
              It's one thing to "learn leadership." But it's a completely different thing to lead authentically in high-pressure tech environments.
            </p>
            
            <p className="text-lg leading-relaxed">
              For many of us, developing authentic leadership is a mystery.
            </p>
            
            <p className="text-lg leading-relaxed">
              You know there is immense power in authentic leadership, but you just can't quite figure out how to go from theory to practice.
            </p>
            
            <p className="text-lg leading-relaxed italic">
              Executive presence, organizational politics, team dynamics, stakeholder management, difficult conversations, performance reviews, strategic thinking, influence without authority...
            </p>
            
            <p className="text-lg leading-relaxed font-semibold">
              People may as well be speaking another language.
            </p>
            
            <div className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--primary-light)]/10 p-8 rounded-xl my-12 text-center">
              <p className="text-xl font-semibold mb-4">
                Hi there, I'm Karthik and I'm the creator of the 4P Leadership Compass.
              </p>
              <p className="text-lg">
                I can translate that language for you.
              </p>
              <p className="text-lg mt-4">
                I've been leading tech teams for over 15 years, building high-performance organizations, and helping leaders navigate the unique challenges of tech leadership.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed">
              Over the years, I've helped hundreds of tech professionals, engineers, and rising leaders develop authentic leadership skills through personalized coaching, team workshops, and executive mentoring.
            </p>
            
            <p className="text-lg leading-relaxed font-semibold">
              But the 4P Leadership Compass is not actually just a program.
            </p>
            
            <p className="text-lg leading-relaxed">
              It's not theory.
            </p>
            
            <p className="text-lg leading-relaxed">
              It's not generic advice.
            </p>
            
            <p className="text-lg leading-relaxed">
              It's not "leadership 101."
            </p>
            
            <div className="bg-[var(--primary-color)]/5 p-8 rounded-xl my-8">
              <p className="text-xl font-bold gradient-text mb-4 text-center">
                It's a personalized coaching program that transforms you into an authentic leader who gets promoted.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                It's a complete framework of 1:1 tailored coaching sessions that gives you:
              </p>
              
              <ul className="space-y-3 text-[var(--text-color)]">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span><strong>6 personalized coaching sessions</strong> over 3 months focused on your specific leadership challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span><strong>Tailored assessment</strong> of the 4 dimensions of authentic leadership unique to your situation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span><strong>An experienced tech leader</strong> to guide you through every challenge with real-world experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span><strong>Customized strategies</strong> you can implement immediately in your current role</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span><strong>Personalized roadmap</strong> to executive presence and promotion readiness</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span><strong>Ongoing accountability</strong> and support to help you when you hit obstacles</span>
                </li>
              </ul>
            </div>
            
            <p className="text-xl font-semibold text-center gradient-text">
              So what does all that actually mean?
            </p>
            
            <p className="text-lg leading-relaxed font-semibold">
              It means that you won't waste time learning leadership theory you can't use. It means you'll get personalized coaching for that promotion or to confidently lead at the executive level.
            </p>
            
            <p className="text-lg leading-relaxed">
              You get the same leadership tools and personalized guidance I used to build high-performing teams, navigate complex organizational politics, lead through crises, and accelerate careers.
            </p>
            
            <p className="text-lg leading-relaxed font-semibold">
              So if you're struggling to develop authentic leadership that actually gets results, this coaching program is for you.
            </p>
          </div>
        </div>

        {/* 4P Program Section */}
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

        {/* Results Section */}
        <div className="glass-card p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold gradient-text mb-6">The Transformation My Coaching Clients Experience</h3>
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
              <strong>Here's what I promise:</strong> In 90 days of personalized coaching, you'll either have the promotion conversation you've been avoiding, or you'll have the unshakeable confidence to demand the recognition you deserve. <em>That's not just a goal—it's your new reality.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
