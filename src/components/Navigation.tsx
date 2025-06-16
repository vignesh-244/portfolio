import { useState, useEffect, useCallback } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
  ];

  const contactNavItem = { name: "Contact", href: "#contact" };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = [...navItems, contactNavItem].map(item => document.querySelector(item.href));
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    let currentSection = "";
    for (const section of sections) {
      if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
        currentSection = `#${section.id}`;
      }
    }

    if (currentSection) {
      setActiveSection(currentSection);
    } else if (window.scrollY < 200) {
      setActiveSection("#hero");
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-lg shadow-lg shadow-red-500/10 border-b border-red-500/20' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('#hero')}>
            <Zap className="text-red-500 group-hover:text-red-400 transition-colors animate-red-pulse" size={24} />
            <div className="font-oswald font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent transition-all duration-300 tracking-wider text-2xl">
              VIGNESH S
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 rounded-md transition-all duration-200 font-montserrat font-semibold relative group tracking-wide text-sm ${
                    activeSection === item.href
                        ? 'text-red-400'
                        : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center ${activeSection === item.href ? 'scale-x-100' : ''}`}></span>
              </button>
            ))}
             <Button
                size="sm"
                onClick={() => scrollToSection(contactNavItem.href)}
                className="ml-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/20 text-xs px-5 py-2 uppercase"
              >
                {contactNavItem.name}
              </Button>
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-red-500/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-red-500" /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-[500px] opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          <div className="bg-black/95 backdrop-blur-lg border-t border-red-500/30 rounded-b-lg shadow-lg">
            <div className="px-4 py-6 space-y-1">
              {[...navItems, contactNavItem].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-montserrat font-semibold tracking-wide ${
                    activeSection === item.href ? 'text-red-400 bg-red-500/10' : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
