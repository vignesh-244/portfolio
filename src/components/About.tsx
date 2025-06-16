
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb, Code, Zap, Heart } from "lucide-react";

export const About = () => {
  const cards = [
    {
      icon: <User className="text-white" size={32} />,
      title: "BACKGROUND",
      description: "Currently working as a Software Trainee with strong expertise in Python, Data Structures & Algorithms, and passion for software development.",
      gradient: "from-red-600 via-red-500 to-red-700"
    },
    {
      icon: <Target className="text-white" size={32} />,
      title: "GOALS",
      description: "Eager to contribute to the Tech Industry by developing innovative solutions and continuously learning new technologies and tools.",
      gradient: "from-red-500 via-red-600 to-red-800"
    },
    {
      icon: <Lightbulb className="text-white" size={32} />,
      title: "INNOVATION",
      description: "Interested in devising better problem-solving methods for challenging tasks and building AI-powered solutions for automation across industries.",
      gradient: "from-red-400 via-red-500 to-red-600"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            <span className="text-red-400 font-bold uppercase tracking-widest text-sm font-montserrat">About Me</span>
            <div className="w-8 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-oswald font-black mb-6 gradient-text-red uppercase tracking-wider">
            ABOUT ME
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-montserrat">
            A passionate 
            <span className="font-bold text-red-400"> SOFTWARE DEVELOPER</span> and 
            <span className="font-bold text-red-300"> ELECTRONICS ENGINEER</span> with expertise in Python development, 
            Data Structures & Algorithms, and a strong foundation in building 
            <span className="font-bold text-red-200"> SCALABLE APPLICATIONS</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <Card key={index} className={`group card-hover bg-gray-900/80 backdrop-blur-sm border border-red-500/20 shadow-xl animate-fade-in-up stagger-${index + 1} hover:border-red-500/50`}>
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Gradient background for icon */}
                <div className={`bg-gradient-to-br ${card.gradient} w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  {card.icon}
                </div>
                
                <h3 className="text-2xl font-oswald font-bold mb-4 text-white group-hover:text-red-400 transition-colors uppercase tracking-wide">
                  {card.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-lg font-montserrat">
                  {card.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-red-600/20 to-red-700/20 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info section */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          <Card className="card-hover bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 shadow-xl hover:border-red-500/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-red-400" size={28} />
                <h3 className="text-2xl font-oswald font-bold text-white uppercase tracking-wide">Technical Passion</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg font-montserrat">
                I love diving deep into complex algorithms, building efficient solutions, and exploring the latest in AI/ML technologies. 
                My journey from Electronics Engineering to Software Development has given me a unique perspective on problem-solving.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-to-br from-red-600/10 to-red-700/10 border border-red-500/30 shadow-xl hover:border-red-500/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-red-400" size={28} />
                <h3 className="text-2xl font-oswald font-bold text-white uppercase tracking-wide">Personal Values</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg font-montserrat">
                Continuous learning, collaboration, and creating meaningful impact through technology drive everything I do. 
                I believe in writing clean, maintainable code and building solutions that truly make a difference.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
