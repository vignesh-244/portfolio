
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Soft glowing gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-red-500/5 to-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left content */}
        <div className="text-left">
          <div className="animate-fade-in-up">
            {/* Professional status badge */}
            <div className="flex items-center gap-3 mb-8">
              <Badge variant="outline" className="border-red-500/40 bg-red-500/20 text-red-200 rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                Available for Work
              </Badge>
              <div className="w-px h-4 bg-white/30"></div>
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}} 
                className="flex items-center gap-1 text-white/70 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider group"
              >
                Explore
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-oswald font-black mb-6 leading-[0.9]">
              <span className="text-white">Hi, I'm</span><br />
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
                Vignesh S
              </span>
            </h1>
            
            <div className="space-y-1 mb-10">
              <p className="text-lg md:text-xl lg:text-2xl text-white/85 font-montserrat font-medium leading-relaxed">
                I'm a <span className="text-red-400 font-semibold">Software Engineer</span>,
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white/85 font-montserrat font-medium leading-relaxed">
                based in <span className="text-red-200 font-semibold">Chennai, India</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/20 hover:shadow-red-500/30"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                Hire Me
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/25 text-white bg-transparent hover:bg-white/10 px-8 py-3 text-base font-medium rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
              >
                Download CV
              </Button>
            </div>

            <div className="text-white/50 mb-5 font-montserrat">
              <p className="text-xs uppercase tracking-widest font-semibold">Connect With Me</p>
            </div>

            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com/in/vignesh-s-322b531b0" 
                className="group p-3 rounded-full bg-white/10 hover:bg-red-500/25 transition-all duration-300 hover:scale-110 border border-white/15 hover:border-red-500/40 backdrop-blur-sm"
              >
                <Linkedin className="text-white/80 group-hover:text-red-300 transition-colors" size={20} />
              </a>
              <a 
                href="https://github.com/vignesh-244" 
                className="group p-3 rounded-full bg-white/10 hover:bg-red-500/25 transition-all duration-300 hover:scale-110 border border-white/15 hover:border-red-500/40 backdrop-blur-sm"
              >
                <Github className="text-white/80 group-hover:text-red-300 transition-colors" size={20} />
              </a>
              <a 
                href="mailto:vigneshnarayanan2003@gmail.com" 
                className="group p-3 rounded-full bg-white/10 hover:bg-red-500/25 transition-all duration-300 hover:scale-110 border border-white/15 hover:border-red-500/40 backdrop-blur-sm"
              >
                <Mail className="text-white/80 group-hover:text-red-300 transition-colors" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Professional photo with glowing red border and circular UI accents */}
        <div className="relative flex justify-center items-center">
          <div className="relative">
            {/* Main professional photo container */}
            <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] xl:w-[420px] xl:h-[520px] mx-auto">
              
              {/* Glowing red border effect */}
              {/* <div className="absolute -inset-6 bg-gradient-to-r from-red-500/40 via-red-600/50 to-red-500/40 rounded-3xl blur-xl animate-pulse"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-red-500/60 via-red-600/70 to-red-500/60 rounded-2xl blur-lg"></div> */}
              
              {/* Main image container with glowing red border */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow ">
                <img 
                  src="public\unnamed.png"
                  alt="Vignesh S - Professional software engineer"
                  className="w-full object-cover object-center  filter brightness-75 "
                />
                {/* Localized red glow only near the left cheek */}
                {/* <div className="absolute top-[30%] left-[%] w-32 h-32 bg-red-100/20 blur-2xl rounded-full pointer-events-none z-10"></div> */}

             


                {/* Subtle overlay to enhance the red theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-transparent to-red-900/55 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>
              </div>
              
              {/* Circular UI accents */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-red-500/40 to-red-600/90 rounded-full shadow-xl shadow-red-500/40 animate-float backdrop-blur-sm border-2 border-red-400/40">
                <div className="w-full h-full rounded-full bg-red-500/15 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-red-400/70 to-red-500/80 rounded-full shadow-lg shadow-red-400/30 animate-float backdrop-blur-sm border-2 border-red-300/40" style={{animationDelay: '1s'}}>
                <div className="w-full h-full rounded-full bg-red-400/15 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              
              <div className="absolute top-1/4 -right-4 w-10 h-10 bg-gradient-to-br from-red-300/80 to-red-400/70 rounded-full shadow-md shadow-red-300/25 animate-float backdrop-blur-sm border border-red-200/30" style={{animationDelay: '2s'}}>
                <div className="w-full h-full rounded-full bg-red-300/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-1/3 -left-3 w-8 h-8 bg-gradient-to-br from-red-500/50 to-red-600/60 rounded-full shadow-sm shadow-red-500/20 animate-float backdrop-blur-sm" style={{animationDelay: '0.5s'}}></div>
              
              <div className="absolute top-1/2 -right-2 w-6 h-6 bg-gradient-to-br from-red-400/40 to-red-500/50 rounded-full shadow-sm shadow-red-400/15 animate-float backdrop-blur-sm" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-3 rounded-full bg-red-500/25 backdrop-blur-sm border border-red-500/40 shadow-lg shadow-red-500/20">
          <ChevronDown className="text-red-300" size={32} />
        </div>
      </div>
    </section>
  );
};
