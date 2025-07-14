
import React from 'react';
import { Code, Database, Cpu, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] bg-clip-text text-transparent neon-text">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="slide-in-left">
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-6 neon-text">
                Crafting Digital Excellence
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate Software Developer specializing in cutting-edge technologies 
                  and innovative solutions. With expertise in 3D spatial data analysis and 
                  advanced algorithms, I transform complex challenges into elegant digital experiences.
                </p>
                <p>
                  Currently pushing boundaries at Q-gate Infotech, where I design optimized 
                  algorithms for spatial computations and geometric data processing, ensuring 
                  scalability and precision in every project.
                </p>
              </div>
              
              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { number: '1+', label: 'Years Experience' },
                  { number: '10+', label: 'Projects Completed' },
                  { number: '5+', label: 'Technologies Mastered' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl font-black bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-[#8b5cf6] transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side - 3D Cards */}
          <div className="slide-in-right">
            <div className="grid gap-6">
              {[
                {
                  icon: Code,
                  title: 'Software Development',
                  description: 'Expert in Python, Java, C++, and modern frameworks with a focus on scalable solutions.',
                  color: 'from-[#8b5cf6] to-[#a855f7]'
                },
                {
                  icon: Database,
                  title: 'Data Analysis',
                  description: 'Advanced EDA, machine learning, and spatial data processing expertise.',
                  color: 'from-[#a855f7] to-[#c084fc]'
                },
                {
                  icon: Cpu,
                  title: '3D Spatial Computing',
                  description: 'Specialized in geometric computations and 3D data visualization.',
                  color: 'from-[#c084fc] to-[#e879f9]'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#1a0d2e]/80 to-[#2d1b4e]/80 p-6 rounded-xl border border-[#8b5cf6]/30 backdrop-blur-sm transform-gpu hover:scale-105 transition-all duration-500 card-3d neon-border hover:neon-glow cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} group-hover:scale-110 transform-gpu transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#e879f9] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating decoration */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300"></div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 to-[#e879f9]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-6 h-6 bg-[#8b5cf6] rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-20 left-10 w-4 h-4 bg-[#e879f9] rounded-full animate-float-slow opacity-60"></div>
        <Sparkles className="absolute top-1/2 left-1/4 w-8 h-8 text-[#c084fc] animate-pulse opacity-30" />
      </div>
    </section>
  );
};

export default About;
