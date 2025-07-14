import React from 'react';
import { Code, Database, Wrench, Award, Zap, Sparkles, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Java", "C/C++", "SQL", "React"],
      color: "from-[#8b5cf6] to-[#a855f7]",
      level: 90
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["PyCharm", "VS Code", "Jupyter Notebook", "Power BI", "Git"],
      color: "from-[#c084fc] to-[#e879f9]",
      level: 85
    },
    {
      title: "Specializations      ",
      icon: Zap,
      skills: ["3D Computing", "Software Development", "AI/ML" , "Data Analysis"],
      color: "from-[#a855f7] to-[#c084fc]",
      level: 88
    },
    {
      title: "Other Skills   ",
      icon: BrainCircuit,
      skills: ["Team Leadership", "Problem Solving", "Logical Reasoning"],
      color: "from-[#c084fc] to-[#e879f9]",  // Deep purple to indigo blue
      level: 92
    }
  ];

  const certifications = [
    { name: "Python Certification", issuer: "Industry Standard", year: "2023" },
    { name: "Data Analyst Certification", issuer: "Professional Body", year: "2023" },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] bg-clip-text text-transparent neon-text">
            Skills & Technologies
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build tomorrow's solutions
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a0d2e]/80 to-[#2d1b4e]/80 p-6 rounded-xl border border-[#8b5cf6]/30 backdrop-blur-sm transform-gpu hover:scale-105 transition-all duration-500 card-3d neon-border hover:neon-glow cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon Header */}
              <div className="flex flex-col items-center mb-6 space-y-2">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transform-gpu transition-transform duration-300 mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#e879f9] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="w-full bg-[#2d1b4e] rounded-full h-2 mt-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ width: `${category.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-2 bg-[#8b5cf6]/10 rounded-lg border border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-[#c084fc] font-medium text-sm">{skill}</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300"></div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 to-[#e879f9]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="slide-in-left bg-gradient-to-br from-[#1a0d2e]/80 to-[#2d1b4e]/80 p-8 rounded-xl border border-[#8b5cf6]/30 backdrop-blur-sm neon-border hover:neon-glow transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center neon-text">
              <Award className="w-7 h-7 text-[#8b5cf6] mr-3 animate-pulse" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="group p-4 bg-[#8b5cf6]/10 rounded-lg border border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-[#e879f9] transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-[#c084fc] text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-[#8b5cf6] font-bold text-sm bg-[#8b5cf6]/20 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div className="slide-in-right bg-gradient-to-br from-[#1a0d2e]/80 to-[#2d1b4e]/80 p-8 rounded-xl border border-[#8b5cf6]/30 backdrop-blur-sm neon-border hover:neon-glow transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center neon-text">
              <Sparkles className="w-7 h-7 text-[#8b5cf6] mr-3 animate-pulse" />
              Achievements
            </h3>
            <div className="space-y-4">
              <div className="group p-4 bg-[#8b5cf6]/10 rounded-lg border border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                <h4 className="font-semibold text-white group-hover:text-[#e879f9] transition-colors duration-300 mb-2">
                  Sentinel Hack Participant
                </h4>
                <p className="text-gray-300 text-sm">
                  Active participant in Sentinel Hack 3.0 and 4.0 (2022, 2023) - 
                  Competing in advanced cybersecurity challenges
                </p>
              </div>
              
              <div className="group p-4 bg-[#8b5cf6]/10 rounded-lg border border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                <h4 className="font-semibold text-white group-hover:text-[#e879f9] transition-colors duration-300 mb-2">
                  Innovation Excellence
                </h4>
                <p className="text-gray-300 text-sm">
                  Recognized for innovative approaches in 3D spatial data processing 
                  and algorithm optimization
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorations */}
        <div className="absolute top-10 left-10 w-5 h-5 bg-[#8b5cf6] rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-[#e879f9] rounded-full animate-float-slow opacity-30"></div>
        <Zap className="absolute top-1/3 right-1/4 w-8 h-8 text-[#c084fc] animate-pulse opacity-20" />
      </div>
    </section>
  );
};

export default Skills;
