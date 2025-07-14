
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
      ]
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
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building the future through innovative technology solutions and data-driven excellence
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-500 transform md:-translate-x-1/2 rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-16 md:mb-20 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              {/* Timeline Node */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10"></div>
              
              {/* Experience Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                <div className="bg-gray-800/50 p-8 rounded-xl border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300">
                  {/* Duration Badge */}
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="px-3 py-1 text-sm font-semibold bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full">
                      {exp.duration}
                    </span>
                    <span className="ml-3 px-3 py-1 text-xs font-medium bg-purple-600/20 text-purple-300 rounded-full border border-purple-600/30">
                      {exp.type}
                    </span>
                  </div>
                  
                  {/* Position & Company */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg font-medium text-purple-400 mb-3">
                    {exp.company}
                  </h4>
                  
                  {/* Location */}
                  <div className="flex items-center mb-6 text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <div key={respIndex} className="flex items-start">
                        <Zap className="w-4 h-4 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Educational Background
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                institution: "T John Institute of Technology",
                degree: "B.E. Computer Science",
                duration: "2020 - 2024",
                grade: "CGPA: 8.43"
              },
              {
                institution: "NMKRV PU College",
                degree: "Pre-University (PCMCs)",
                duration: "2018 - 2020",
                grade: "73.8%"
              },
              {
                institution: "St Joseph Public School",
                degree: "High School",
                duration: "2018",
                grade: "89.6%"
              }
            ].map((edu, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 p-6 rounded-xl border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mb-4"></div>
                <h4 className="font-semibold text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-purple-400 text-sm font-medium mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{edu.duration}</span>
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
