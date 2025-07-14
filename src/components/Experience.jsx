import React from 'react';
import { Calendar, MapPin, Briefcase, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Q-gate Infotech Private Limited",
      location: "Bengaluru, Karnataka",
      position: "Software Developer Trainee",
      duration: "November 2024 - Present",
      type: "Full-time",
      responsibilities: [
        "Designed and implemented optimized algorithms for advanced data transformations and spatial computations, enhancing performance by 40%",
        "Developed cutting-edge solutions for 3D spatial data analysis and geometric computations with 99.9% accuracy",
        "Led breakthrough projects in spatial data processing, ensuring scalability for enterprise-level applications"
      ],
      gradient: "from-[#8b5cf6] to-[#a855f7]"
    },
    {
      company: "AI Bricks",
      location: "Bengaluru, Karnataka", 
      position: "Data Analyst Intern",
      duration: "October 2023 - April 2024",
      type: "Internship",
      responsibilities: [
        "Performed comprehensive exploratory data analysis (EDA) on massive datasets using Python and SQL",
        "Identified critical patterns and trends that improved model accuracy by 25% and enhanced system reliability",
        "Collaborated with cross-functional teams to deliver data-driven insights for strategic decision making"
      ],
      gradient: "from-[#a855f7] to-[#c084fc]"
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10 bg-gradient-to-b from-[#1a0d2e]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] bg-clip-text text-transparent neon-text">
            Professional Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Building the future through innovative technology solutions and data-driven excellence
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8b5cf6] via-[#a855f7] to-[#c084fc] transform md:-translate-x-1/2 rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-16 md:mb-20 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              {/* Timeline Node */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] rounded-full border-4 border-[#1a0d2e] transform md:-translate-x-1/2 z-10 pulse-glow"></div>
              
              {/* Experience Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                <div 
                  className="group bg-gradient-to-br from-[#1a0d2e]/80 to-[#2d1b4e]/80 p-6 rounded-xl border border-[#8b5cf6]/30 backdrop-blur-sm transform-gpu hover:scale-105 transition-all duration-500 card-3d neon-border hover:neon-glow cursor-pointer slide-in-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Duration Badge */}
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-[#8b5cf6] mr-2" />
                    <span className={`px-3 py-1 text-sm font-bold bg-gradient-to-r ${exp.gradient} text-white rounded-full`}>
                      {exp.duration}
                    </span>
                    <span className="ml-3 px-3 py-1 text-xs font-medium bg-[#8b5cf6]/20 text-[#c084fc] rounded-full border border-[#8b5cf6]/30">
                      {exp.type}
                    </span>
                  </div>
                  
                  {/* Position & Company */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#e879f9] transition-colors duration-300 neon-text">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg font-semibold text-[#8b5cf6] mb-2 group-hover:text-[#c084fc] transition-colors duration-300">
                    {exp.company}
                  </h4>
                  
                  {/* Location */}
                  <div className="flex items-center mb-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <div key={respIndex} className="flex items-start group/item hover:scale-105 transition-transform duration-200">
                        <Zap className="w-3 h-4 text-[#8b5cf6] mr-3 mt-1 flex-shrink-0 group-hover/item:text-[#e879f9] transition-colors duration-300" />
                        <span className="text-gray-300 group-hover:text-white group-hover/item:text-white transition-colors duration-300">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Company Icon
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div> */}
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 to-[#e879f9]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] bg-clip-text text-transparent neon-text">
            Educational Background
          </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] mx-auto rounded-full mb-8 shadow-lg shadow-[#e879f9]/50"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                institution: "T John Institute of Technology",
                degree: "B.E. Computer Science",
                duration: "2020 - 2024",
                grade: "CGPA: 8.43",
                gradient: "from-[#8b5cf6] to-[#a855f7]"
              },
              {
                institution: "NMKRV PU College",
                degree: "Pre-University (PCMCs)",
                duration: "2018 - 2020",
                grade: "73.8%",
                gradient: "from-[#a855f7] to-[#c084fc]"
              },
              {
                institution: "St Joseph Public School",
                degree: "High School",
                duration: "2018",
                grade: "89.6%",
                gradient: "from-[#c084fc] to-[#e879f9]"
              }
            ].map((edu, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-[#1a0d2e]/80 to-[#2d1b4e]/80 p-6 rounded-xl border border-[#8b5cf6]/30 backdrop-blur-sm transform-gpu hover:scale-105 transition-all duration-500 card-3d neon-border hover:neon-glow cursor-pointer slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-full h-1 bg-gradient-to-r ${edu.gradient} rounded-full mb-4`}></div>
                <h4 className="font-bold text-white mb-2 group-hover:text-[#e879f9] transition-colors duration-300">
                  {edu.degree}
                </h4>
                <p className="text-[#8b5cf6] text-sm font-medium mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{edu.duration}</span>
                  <span className={`px-3 py-1 text-xs font-bold bg-gradient-to-r ${edu.gradient} text-white rounded-full`}>
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Decorations */}
        <div className="absolute top-10 right-10 w-6 h-6 bg-[#8b5cf6] rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-4 h-4 bg-[#e879f9] rounded-full animate-float-slow opacity-40"></div>
      </div>
    </section>
  );
};

export default Experience;
