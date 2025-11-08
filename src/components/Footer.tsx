import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0F172A] py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Karthik Bharadwaj</h3>
              <p className="text-gray-400 mb-6">
                Executive Coach helping tech leaders unlock promotions and career breakthroughs through authentic leadership.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-3">
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  4P Framework
                </button>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Karthik
                </button>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Success Stories
                </button>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/karthikbharadwaj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#3B82F6] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:coach.karthikbharadwaj@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#3B82F6] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Karthik Bharadwaj. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
