import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Capture lead data
    const leadData = { name, email, phone, linkedin };
    console.log("Lead captured:", leadData);

    // TODO: Integrate with email service (e.g., ConvertKit, Mailchimp, SendGrid)
    // This should trigger an automated email with the PDF attachment
    // Example:
    // await fetch('/api/send-lead-magnet', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(leadData)
    // });

    setSubmitted(true);
  };

  const benefits = [
    "Assess your readiness for executive leadership roles",
    "Identify your leadership strengths and development areas",
    "Get a clear picture of where you stand today",
    "Discover the exact gaps holding you back from promotion"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Offer */}
            <div className="text-white">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider">Free Download</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Executive Readiness Scorecard
              </h2>

              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                A comprehensive self-assessment to evaluate your readiness for executive leadership roles and identify the exact areas you need to develop.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-50 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <p className="text-white font-semibold mb-2">
                  <span className="text-2xl">5,000+</span> tech leaders have already downloaded this
                </p>
                <p className="text-blue-100 text-sm">
                  Join them in taking control of your career trajectory
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              {!submitted ? (
                <>
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center">
                      <Download className="w-10 h-10 text-[#3B82F6]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Get Your Free Assessment
                    </h3>
                    <p className="text-gray-600">
                      Enter your email to download instantly
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your first name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3B82F6] focus:ring-0"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3B82F6] focus:ring-0"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3B82F6] focus:ring-0"
                      />
                    </div>

                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-semibold text-gray-700 mb-2">
                        LinkedIn Profile
                      </label>
                      <Input
                        id="linkedin"
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#3B82F6] focus:ring-0"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full golden-button px-8 py-6 text-lg font-semibold rounded-xl shadow-xl"
                    >
                      <Download className="mr-2 w-5 h-5" />
                      Download Free Assessment
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Check Your Email!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We've sent the Executive Readiness Scorecard to <strong>{email}</strong>. Check your email (and spam folder) to download your free assessment.
                  </p>
                  <p className="text-sm text-gray-500">
                    Didn't receive it? <a href="mailto:coach.karthikbharadwaj@gmail.com" className="text-[#3B82F6] font-semibold hover:underline">Contact us</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
