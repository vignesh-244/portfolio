
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Zap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics and Communication Engineering",
      institution: "Mepco Schlenk Engineering College",
      location: "Sivakasi, Tamil Nadu",
      period: "Aug 2020 - May 2024",
      grade: "8.5 CGPA",
      description: "Specialized in electronics and communication systems with strong foundation in digital signal processing, embedded systems, and telecommunications.",
      achievements: ["8.5/10 CGPA", "Third Place in Mepco Techno Innovate 2022", "Finalist in DevJam Hackathon at Gravitas 2022"],
      type: "Undergraduate"
    }
  ];

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            <span className="text-red-400 font-bold uppercase tracking-widest text-sm font-montserrat">Education</span>
            <div className="w-8 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-oswald font-black mb-6 gradient-text-red uppercase tracking-wider">
            EDUCATION
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-montserrat">
            Building a strong 
            <span className="font-bold text-red-400"> academic foundation</span> with 
            <span className="font-bold text-red-300"> continuous learning</span> and excellence.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className={`group card-hover bg-gray-900/80 backdrop-blur-sm border border-red-500/20 shadow-xl animate-fade-in-up stagger-${index + 1} hover:border-red-500/50`}>
              <CardContent className="p-8 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left side - Icon and Type */}
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-red-600 to-red-700 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <GraduationCap className="text-white" size={28} />
                    </div>
                    <div className="mt-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-red-500/20 text-red-400 border border-red-500/30">
                        {edu.type}
                      </span>
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-oswald font-bold text-white group-hover:text-red-400 transition-colors uppercase tracking-wide mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-red-400 font-montserrat font-semibold mb-1">
                          <BookOpen size={16} />
                          {edu.field}
                        </div>
                        <div className="flex items-center gap-2 text-white/70 font-montserrat mb-1">
                          <Award size={16} />
                          {edu.institution}
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-white/70 font-montserrat">
                          <Calendar size={16} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2 text-white/70 font-montserrat">
                          <MapPin size={16} />
                          {edu.location}
                        </div>
                        <div className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/40 rounded-lg text-red-300 font-montserrat font-bold text-sm">
                          {edu.grade}
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 leading-relaxed text-lg font-montserrat mb-6">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-oswald font-bold text-red-400 mb-3 uppercase tracking-wide">Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <span 
                            key={achievementIndex}
                            className="px-3 py-1 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-lg text-red-300 font-montserrat font-medium text-sm hover:bg-red-500/20 transition-colors"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-red-600/20 to-red-700/20 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-red-500 animate-pulse" size={24} />
            <span className="text-lg text-white/80 font-montserrat font-medium tracking-wider uppercase">Lifelong Learner</span>
            <Zap className="text-red-500 animate-pulse" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};
