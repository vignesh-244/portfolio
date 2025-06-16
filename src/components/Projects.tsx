import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Code, Zap, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "RF-Based UAV Classification",
      description: "Developed a machine learning-based solution to classify UAVs using RF signals. Implemented AdaBoost and XGBoost with classifiers like Random Forest and Decision Tree. Performed multi-class classification on a public drone RF dataset (10 classes). Evaluated metrics including accuracy, F1-score, and recall across models like MLP, CNN, DNN, and LightGBM. Achieved 79% accuracy and 72% F1-score with XGBoost; binary classification showed higher precision. Enhanced UAV detection for improved security in sensitive zones.",
      tech: ["Machine Learning", "Python", "CNN", "Scikit-Learn", "Boosting"],
      github: "https://github.com/vignesh-244",
      demo: "#",
      image: "/placeholder.svg",
      status: "Completed",
    },
    {
      title: "MSEC Canteen",
      description: "Developed a comprehensive canteen management system featuring a user-friendly menu page for students to browse food items and prices. Implemented Django's authentication system for secure order placement.",
      tech: ["HTML/CSS", "JavaScript", "Django", "Authentication"],
      github: "https://github.com/vignesh-244",
      demo: "#",
      image: "/placeholder.svg",
      status: "Completed",
    },
    {
      title: "Predict Engine Failure using Telematics data",
      description: "Machine learning project that secured third place in Mepco Techno Innovate 2022. Predicted machine failure time using linear regression with telematics dataset. Built a web app with pleasant UI that fetches data from Python API deployed on localhost using FastAPI. 🏆 Third Place Winner",
      tech: ["HTML/CSS", "JavaScript", "Python", "FastAPI", "Pandas", "Linear Regression", "Machine Learning"],
      github: "https://github.com/vignesh-244",
      demo: "#",
      image: "/placeholder.svg",
      status: "Completed",
    },
    {
      title: "Traffic Control Management using VANET",
      description: "Implemented VANETs to enhance transportation system efficiency and safety by providing real-time information. Developed vehicle-to-vehicle communication for optimal traffic management and collision prediction. Utilized SUMO and NS2 to simulate VANET behavior.",
      tech: ["VANET", "SUMO", "NS2", "C++", "Python", "Networking"],
      github: "https://github.com/vignesh-244",
      demo: "#",
      image: "/placeholder.svg",
      status: "Completed",
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            <span className="text-red-400 font-bold uppercase tracking-widest text-sm font-montserrat">Portfolio</span>
            <div className="w-8 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-oswald font-black mb-6 gradient-text-red uppercase tracking-wider">
            PROJECTS
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-montserrat">
            Showcasing 
            <span className="font-bold text-red-400"> innovative solutions</span> and 
            <span className="font-bold text-red-300"> technical expertise</span> through real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group card-hover bg-gray-900/80 backdrop-blur-sm border border-red-500/20 shadow-xl animate-fade-in-up stagger-${index + 1} hover:border-red-500/50 overflow-hidden`}>
              <CardContent className="p-0 relative">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-red-900/20 to-red-800/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <Code className="text-red-400 opacity-50" size={64} />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      project.status === 'Completed' 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-red-600/20 text-red-300 border border-red-600/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-oswald font-bold text-white group-hover:text-red-400 transition-colors uppercase tracking-wide mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed font-montserrat mb-4 text-sm min-h-[100px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded text-red-300 font-montserrat font-medium text-xs hover:bg-red-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white flex-1 font-montserrat font-bold uppercase tracking-wide text-xs"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-red-500 text-red-400 bg-black/50 hover:bg-red-500/10 hover:text-red-300 flex-1 font-montserrat font-bold uppercase tracking-wide text-xs"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="text-red-500 animate-pulse" size={24} />
            <span className="text-lg text-white/80 font-montserrat font-medium tracking-wider uppercase">More Projects Coming Soon</span>
            <Zap className="text-red-500 animate-pulse" size={24} />
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 text-lg font-bold btn-glow uppercase tracking-wider font-montserrat"
            onClick={() => window.open('https://github.com/vignesh-244', '_blank')}
          >
            <GitBranch className="mr-2" size={20} />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
