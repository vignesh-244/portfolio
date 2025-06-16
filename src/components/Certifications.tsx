
import { Award, ExternalLink, Zap, BookOpen, Code, Database, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Certifications = () => {
  const certifications = [
    {
      name: "Programming in Java",
      provider: "NPTEL",
      link: "https://drive.google.com/file/d/1vIRxL2-1RXz-umD2cPoOuxNP5Lh9MEfq/view?usp=sharing",
      icon: <Code className="text-white" size={32} />,
      category: "Programming",
    },
    {
      name: "The Joy of Computing Using Python",
      provider: "NPTEL",
      link: "https://drive.google.com/file/d/17yyUzyfb5DlJ_eV43p471a5Iug4xHqI_/view?usp=sharing",
      icon: <BookOpen className="text-white" size={32} />,
      category: "Programming",
    },
    {
      name: "Problem Solving Through Programming in C",
      provider: "NPTEL",
      link: "https://drive.google.com/file/d/1E6mr75bubihxUKK_z1MtegrDvPEb1aK9/view?usp=sharing",
      icon: <Code className="text-white" size={32} />,
      category: "Programming",
    },
    {
      name: "SQL",
      provider: "HackerRank",
      link: "https://www.hackerrank.com/certificates/87a126509e07",
      icon: <Database className="text-white" size={32} />,
      category: "Database",
    },
    {
      name: "Networking Basics",
      provider: "Cisco",
      link: "https://www.credly.com/badges/ea20bba7-270d-4acb-ad80-3572a4b57786/public_url",
      icon: <Network className="text-white" size={32} />,
      category: "Networking",
    },
    {
      name: "Web Development",
      provider: "Udemy",
      link: "https://www.udemy.com/certificate/UC-373ab6eb-dad0-443b-9004-9b7e17f95215/",
      icon: <Award className="text-white" size={32} />,
      category: "Web Development",
    }
  ];

  return (
    <section id="certifications" className="py-24 px-4 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full">
            <Award className="text-red-400" size={20} />
            <span className="text-red-400 font-bold uppercase tracking-widest text-sm font-montserrat">Credentials</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-oswald font-black mb-6 text-white uppercase">
            My <span className="gradient-text-red">Certifications</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-montserrat">
            Validated expertise through professional certifications and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 hover:bg-gray-900/70 transition-all duration-300 group animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                  {cert.icon}
                </div>
                <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-300 font-montserrat font-bold text-xs uppercase tracking-wide">
                  {cert.category}
                </span>
              </div>

              <h3 className="text-xl font-oswald font-bold text-white group-hover:text-red-400 transition-colors uppercase tracking-wide mb-2 h-16">
                {cert.name}
              </h3>
              
              <div className="flex items-center gap-2 text-red-400/80 font-montserrat font-semibold mb-8">
                <Award size={16} />
                <span>{cert.provider}</span>
              </div>

              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-montserrat font-bold uppercase tracking-wide text-xs"
                onClick={() => window.open(cert.link, '_blank')}
              >
                <ExternalLink size={14} className="mr-2" />
                View Certificate
              </Button>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-red-500 animate-pulse" size={24} />
            <span className="text-lg text-white/80 font-montserrat font-medium tracking-wider uppercase">Continuous Learning Journey</span>
            <Zap className="text-red-500 animate-pulse" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};
