
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WorkExperience } from "@/components/WorkExperience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const backgroundStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background decoration with red theme */}
      <div className="absolute inset-0 opacity-40" style={backgroundStyle}></div>
      
      {/* Enhanced red glow effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-red-500/4 to-red-600/4 rounded-full blur-3xl"></div>
      
      {/* Additional atmospheric red glows */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-red-400/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-red-600/4 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <Navigation />
      
      {/* Main content sections with consistent black/red theme */}
      <div className="relative z-10">
        <Hero />
        <About />
        <WorkExperience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
