
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
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
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
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto">
            Take the first step towards becoming the leader you were meant to be. Schedule your complimentary consultation today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-fade-in-up">
          {/* Contact Form */}
          <Card className="glass-card border-0 relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold gradient-text">
                Get Started Today
              </CardTitle>
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
                    How can I help you? *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[var(--background)]/50 border-[var(--primary-color)]/30 text-[var(--text-color)]"
                    placeholder="Tell me about your leadership challenges and goals..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="golden-button w-full py-4 rounded-full font-semibold"
                >
                  Send Message & Schedule Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card border-0 relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Let's Connect
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-[var(--primary-color)] mr-4" />
                    <div>
                      <div className="font-medium text-[var(--text-color)]">Email</div>
                      <div className="text-[var(--text-color-secondary)]">coach@leadership.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-[var(--primary-color)] mr-4" />
                    <div>
                      <div className="font-medium text-[var(--text-color)]">Phone</div>
                      <div className="text-[var(--text-color-secondary)]">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-[var(--primary-color)] mr-4" />
                    <div>
                      <div className="font-medium text-[var(--text-color)]">Location</div>
                      <div className="text-[var(--text-color-secondary)]">San Francisco, CA</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-[var(--primary-color)] mr-4" />
                    <div>
                      <div className="font-medium text-[var(--text-color)]">Response Time</div>
                      <div className="text-[var(--text-color-secondary)]">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-light)] text-black relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Free Consultation
                </h3>
                <p className="mb-6 opacity-90">
                  Not sure where to start? Book a complimentary 30-minute consultation to discuss your leadership goals and explore how we can work together.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-800 font-semibold"
                >
                  Schedule Free Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
