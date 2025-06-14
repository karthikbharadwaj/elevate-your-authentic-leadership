
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Leadership Excellence</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering leaders to unlock their potential and drive meaningful change in their organizations through proven coaching methodologies.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Executive Coaching</li>
              <li className="hover:text-white transition-colors cursor-pointer">Leadership Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Team Transformation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Performance Coaching</li>
              <li className="hover:text-white transition-colors cursor-pointer">Strategic Thinking</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>coach@leadership.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 Leadership Excellence. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
