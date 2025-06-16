
import { Code, Database, Globe, Server, Zap, Cpu, Terminal, Star } from "lucide-react";

export const Skills = () => {
  const technologies = [
    { name: "Python", icon: <Code size={18} />, category: "Language" },
    { name: "C/C++", icon: <Code size={18} />, category: "Language" },
    { name: "Java", icon: <Code size={18} />, category: "Language" },
    { name: "React", icon: <Globe size={18} />, category: "Frontend" },
    { name: "Django", icon: <Server size={18} />, category: "Backend" },
    { name: "FastAPI", icon: <Server size={18} />, category: "Backend" },
    { name: "Kafka", icon: <Server size={18} />, category: "Data Platform" },
    { name: "PostgreSQL", icon: <Database size={18} />, category: "Database" },
    { name: "Vector DB", icon: <Database size={18} />, category: "Database" },
    { name: "AI & ML", icon: <Cpu size={18} />, category: "Field" },
    { name: "Machine Learning", icon: <Cpu size={18} />, category: "Field" },
    { name: "LLMs", icon: <Cpu size={18} />, category: "AI/ML" },
    { name: "LangChain", icon: <Cpu size={18} />, category: "AI/ML" },
    { name: "llama.cpp", icon: <Cpu size={18} />, category: "AI/ML" },
    { name: "Ollama", icon: <Cpu size={18} />, category: "AI/ML" },
    { name: "Git", icon: <Terminal size={18} />, category: "Version Control" },
    { name: "Docker", icon: <Terminal size={18} />, category: "DevOps" },
    { name: "Model Deployment", icon: <Server size={18} />, category: "MLOps" },
    { name: "Triton Server", icon: <Server size={18} />, category: "MLOps" },
    { name: "Problem Solving", icon: <Star size={18} />, category: "Skill" },
    { name: "Prompt Engineering", icon: <Star size={18} />, category: "Skill" },
    { name: "Team Collaboration", icon: <Star size={18} />, category: "Skill" },
  ];

  const achievements = [
    { title: "LeetCode Rating", value: "1657", icon: <Star size={16} />, link: "https://leetcode.com/u/vignesh244/" },
    { title: "HackerRank", value: "5⭐ Problem Solving", icon: <Star size={16} />, link: "https://www.hackerrank.com/profile/vigneshnarayana3" },
    { title: "AMCAT", value: "95th Percentile", icon: <Star size={16} /> },
    { title: "CoCubes", value: "93rd Percentile", icon: <Star size={16} /> }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full">
            <Zap className="text-red-400" size={20} />
            <span className="text-red-400 font-bold uppercase tracking-widest text-sm font-montserrat">Technical Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-oswald font-black mb-6 text-white">
            SKILLS & 
            <span className="block gradient-text-red">TECHNOLOGIES</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-montserrat">
            Proficient in cutting-edge technologies and frameworks
          </p>
        </div>

        {/* Technology Stack - Pill Style */}
        <div className="animate-fade-in-up mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-oswald font-bold text-white mb-4 uppercase tracking-wide">Technology Stack</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 px-6 py-3 bg-gray-900/60 backdrop-blur-sm border border-red-500/20 rounded-full hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300 cursor-pointer"
              >
                <div className="text-red-400 group-hover:text-red-300 transition-colors">
                  {tech.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-montserrat font-semibold text-sm">{tech.name}</span>
                  <span className="text-red-400/70 font-montserrat text-xs">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements - Card Style */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-oswald font-bold text-white mb-4 uppercase tracking-wide">Coding Profiles</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const cardContent = (
                <div 
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 hover:scale-105 transition-all duration-300 text-center h-full"
                >
                  <div className="flex justify-center mb-3">
                    <div className="text-red-400 group-hover:text-red-300 transition-colors">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="text-white font-montserrat font-semibold text-sm mb-2">{achievement.title}</h4>
                  <p className="text-red-400 font-montserrat font-bold text-lg">{achievement.value}</p>
                </div>
              );

              if (achievement.link) {
                return (
                  <a
                    key={index}
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                );
              }
              
              return (
                <div key={index}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
