
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Leaders Coached" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: BookOpen, value: "50+", label: "Certifications" },
  { icon: Clock, value: "10,000+", label: "Coaching Hours" }
];

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Your Leadership Coach
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                With over 15 years of experience in executive leadership and coaching, I've dedicated my career to helping leaders unlock their full potential and create lasting organizational change.
              </p>
              <p>
                My approach combines proven methodologies with personalized strategies, ensuring each leader develops the skills and mindset needed to thrive in today's complex business environment.
              </p>
              <p>
                I believe that authentic leadership starts from within. Through our work together, you'll discover your unique leadership style, overcome limiting beliefs, and develop the confidence to lead with purpose and impact.
              </p>
            </div>
            <Button 
              size="lg" 
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold"
            >
              Learn More About My Approach
            </Button>
          </div>
          
          <div className="space-y-8">
            {/* Profile image placeholder */}
            <div className="bg-gradient-to-br from-blue-200 to-indigo-300 rounded-2xl aspect-square flex items-center justify-center text-4xl font-bold text-blue-800 shadow-xl">
              Your Photo
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
