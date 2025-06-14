
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Your Strategy Session is Reserved!",
      description: "I'll personally reach out within 24 hours to schedule your breakthrough session.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text section-divider relative pb-6">
            Your Career Breakthrough Starts with One Decision
          </h2>
          <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto mb-6">
            You've read this far because something resonated. You're tired of being overlooked. You're ready to stop waiting for "someday" and start creating the leadership career you deserve.
          </p>
          <div className="p-6 glass-card rounded-xl max-w-4xl mx-auto">
            <p className="text-lg text-[var(--text-color)] font-medium">
              <strong>Here's the truth:</strong> Every day you delay is another day watching others advance while you stay stuck. But here's the good news: <span className="gradient-text">you're one conversation away from changing everything.</span>
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-fade-in-up">
          {/* Contact Form */}
          <Card className="glass-card border-0 relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold gradient-text">
                Claim Your FREE Strategy Session (Value: $500)
              </CardTitle>
              <p className="text-[var(--text-color-secondary)]">
                In 30 minutes, we'll identify your biggest leadership obstacles and create a clear action plan for your next promotion.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[var(--background)]/50 border-[var(--primary-color)]/30 text-[var(--text-color)]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[var(--background)]/50 border-[var(--primary-color)]/30 text-[var(--text-color)]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                    Company / Organization
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[var(--background)]/50 border-[var(--primary-color)]/30 text-[var(--text-color)]"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
                    What's your biggest leadership challenge right now? *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[var(--background)]/50 border-[var(--primary-color)]/30 text-[var(--text-color)]"
                    placeholder="I'm struggling with... / I want to achieve... / My biggest frustration is..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="golden-button w-full py-4 rounded-full font-semibold"
                >
                  Reserve My FREE Strategy Session Now
                </Button>
                <p className="text-sm text-[var(--text-color-secondary)] text-center">
                  Limited spots available. I personally conduct every session.
                </p>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card border-0relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Why Leaders Choose to Work With Me
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full mr-4 mt-1 flex items-center justify-center">
                      <span className="text-black font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-color)]">15+ Years in the Trenches</div>
                      <div className="text-[var(--text-color-secondary)]">I've built high-performance tech teams and navigated every challenge you're facing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full mr-4 mt-1 flex items-center justify-center">
                      <span className="text-black font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-color)]">Proven Results</div>
                      <div className="text-[var(--text-color-secondary)]">My clients get promoted faster and lead with confidence</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full mr-4 mt-1 flex items-center justify-center">
                      <span className="text-black font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-color)]">AI & Tech Expertise</div>
                      <div className="text-[var(--text-color-secondary)]">I understand the unique challenges of tech leadership in an AI-driven world</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full mr-4 mt-1 flex items-center justify-center">
                      <span className="text-black font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-color)]">Personal Attention</div>
                      <div className="text-[var(--text-color-secondary)]">You work directly with me - no junior coaches or generic programs</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-light)] text-black relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Don't Wait Another Day
                </h3>
                <p className="mb-6 opacity-90">
                  Every promotion cycle you miss is another year of watching others advance. The tech leaders getting promoted aren't necessarily smarter than you - they just have the strategic advantage you're about to gain.
                </p>
                <div className="mb-6 p-4 bg-black/10 rounded-lg">
                  <p className="font-semibold">
                    "I wish I had started this journey sooner. The transformation in just 3 months was incredible." - Sarah Chen, VP of Engineering
                  </p>
                </div>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-800 font-semibold"
                >
                  Yes, I'm Ready to Transform My Leadership
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
