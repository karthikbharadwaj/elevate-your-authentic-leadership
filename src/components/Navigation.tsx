import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold"
            >
              <span
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                Karthik Bharadwaj
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className={`font-medium transition-colors hover:text-[#3B82F6] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              4P Framework
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors hover:text-[#3B82F6] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`font-medium transition-colors hover:text-[#3B82F6] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className={`font-medium transition-colors hover:text-[#3B82F6] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              FAQ
            </button>
            <Button
              onClick={() =>
                window.open(
                  "https://calendly.com/coach-karthikbharadwaj/coaching_discovery",
                  "_blank"
                )
              }
              className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white hover:from-[#1E3A8A] hover:to-[#2563EB] font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Discovery Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#3B82F6] font-medium transition-colors"
              >
                4P Framework
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#3B82F6] font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#3B82F6] font-medium transition-colors"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#3B82F6] font-medium transition-colors"
              >
                FAQ
              </button>
              <div className="px-4">
                <Button
                  onClick={() =>
                    window.open(
                      "https://calendly.com/coach-karthikbharadwaj/coaching_discovery",
                      "_blank"
                    )
                  }
                  className="w-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white hover:from-[#1E3A8A] hover:to-[#2563EB] font-semibold px-6 py-2 rounded-full transition-all duration-300"
                >
                  Book Discovery Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
