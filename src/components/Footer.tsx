import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="hero-section py-16 border-t border-[var(--primary-color)]/20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Leadership Excellence</h3>
            <p className="text-[var(--text-color-secondary)] mb-6 max-w-md">
              Empowering leaders to unlock their potential and drive meaningful change in their organizations through proven coaching methodologies.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 glass-card rounded-full hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-[var(--primary-color)] hover:text-black" />
              </div>
              <div className="p-2 glass-card rounded-full hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-[var(--primary-color)] hover:text-black" />
              </div>
              <div className="p-2 glass-card rounded-full hover:bg-[var(--primary-color)] transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-[var(--primary-color)] hover:text-black" />
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-[var(--primary-color)]/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[var(--text-color-secondary)] text-sm">
          <p>&copy; 2024 Leadership Excellence. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-[var(--primary-color)] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[var(--primary-color)] transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-[var(--primary-color)] transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
