
import { Trophy, Award, Target, Zap } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence Award",
      description: "Received recognition for outstanding academic performance with 8.5 CGPA in Electronics and Communication Engineering.",
      icon: <Trophy className="text-white" size={32} />,
      year: "2024",
      category: "Academic",
      gradient: "from-red-600 to-red-700"
    },
    {
      title: "Project Innovation Award",
      description: "Secured third place in Mepco Techno Innovate 2022.",
      icon: <Award className="text-white" size={32} />,
      year: "2022",
      category: "Innovation",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Hackathon Participant",
      description: "Participated in Devjams, a 48-hour hackathon at Gravitas 2022 conducted by VIT.",
      icon: <Zap className="text-white" size={32} />,
      year: "2022",
      category: "Hackathon",
      gradient: "from-red-700 to-red-800"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", icon: <Target size={24} /> },
    { label: "Technical Certifications", value: "8", icon: <Award size={24} /> },
    { label: "Coding Challenges Solved", value: "450+", icon: <Trophy size={24} /> }
  ];

  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full">
            <Trophy className="text-red-400" size={20} />
            <span className="text-red-400 font-bold uppercase tracking-widest text-sm font-montserrat">Recognition & Awards</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-oswald font-black mb-6 text-white uppercase">
            My <span className="gradient-text-red">Achievements</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-montserrat">
            Celebrating milestones and recognitions that mark my journey of continuous growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-oswald font-bold text-white mb-4 uppercase tracking-wide">Key Metrics</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 rounded-2xl p-6 text-center hover:border-red-500/50 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-red-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-oswald font-black text-white mb-2 gradient-text-red">
                  {stat.value}
                </div>
                <div className="text-white/80 font-montserrat font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 hover:bg-gray-900/70 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {achievement.icon}
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-300 font-montserrat font-bold text-xs uppercase tracking-wide">
                    {achievement.category}
                  </span>
                  <div className="text-white/70 font-montserrat font-semibold text-sm mt-2">
                    {achievement.year}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-oswald font-bold text-white group-hover:text-red-400 transition-colors uppercase tracking-wide mb-3 h-16">
                {achievement.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed font-montserrat text-sm min-h-[80px]">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-red-500 animate-pulse" size={24} />
            <span className="text-lg text-white/80 font-montserrat font-medium tracking-wider uppercase">Striving for Excellence</span>
            <Zap className="text-red-500 animate-pulse" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};
