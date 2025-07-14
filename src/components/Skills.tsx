
import React from 'react';
import { Code, Database, Wrench, Award, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C++", "C", "SQL", "JavaScript"],
      level: 90
    },
    {
      title: "Data & Analytics",
      icon: Database,
      skills: ["Machine Learning", "EDA", "Spatial Analysis", "Big Data"],
      level: 85
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["PyCharm", "VS Code", "Jupyter", "Power BI", "Git", "Docker"],
      level: 88
    },
    {
      title: "Specializations",
      icon: Zap,
      skills: ["3D Computing", "Blockchain", "Web Development", "AI/ML"],
      level: 92
    }
  ];

  const certifications = [
    { name: "Python Certification", issuer: "Industry Standard", year: "2023" },
    { name: "Data Analyst Certification", issuer: "Professional Body", year: "2023" },
    { name: "Machine Learning Specialist", issuer: "Tech Institute", year: "2024" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build tomorrow's solutions
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Icon Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                      style={{ width: `${category.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-2 bg-purple-600/10 rounded-lg border border-purple-600/20 hover:bg-purple-600/20 transition-colors duration-300"
                  >
                    <span className="text-purple-300 font-medium text-sm">{skill}</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-purple-600/30">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Award className="w-6 h-6 text-purple-400 mr-3" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-purple-600/10 rounded-lg border border-purple-600/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-white">
                        {cert.name}
                      </h4>
                      <p className="text-purple-300 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-purple-400 font-bold text-sm bg-purple-600/20 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-purple-600/30">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 text-purple-400 mr-3" />
              Achievements
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-purple-600/10 rounded-lg border border-purple-600/20">
                <h4 className="font-semibold text-white mb-2">
                  Sentinel Hack Participant
                </h4>
                <p className="text-gray-300 text-sm">
                  Active participant in Sentinel Hack 3.0 and 4.0 (2022, 2023) - 
                  Competing in advanced cybersecurity challenges
                </p>
              </div>
              
              <div className="p-4 bg-purple-600/10 rounded-lg border border-purple-600/20">
                <h4 className="font-semibold text-white mb-2">
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
      </div>
    </section>
  );
};

export default Skills;
