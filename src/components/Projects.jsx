import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Zap } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "AI Hospital Recommendation System",
      description: "Revolutionary blockchain-integrated platform using AI to predict hospital costs and enable secure fundraising for medical treatments.",
      image: "/ai.webp",
      technologies: ["AI", "Blockchain", "Python", "Machine Learning", "Smart Contracts"],
      category: "ai",
      github: "#",
      demo: "#",
      gradient: "from-[#8b5cf6] to-[#a855f7]"
    },
    {
      title: "Weather Analysis",
      description: "Intelligent weather data processing tool with interactive UI plus an engaging 2D obstacle-avoidance game with physics engine.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
      technologies: ["HTML", "CSS" , "JAVASCRIPT" , "WEB DEVELOPMENT"],
      category: "game",
      github: "https://github.com/Pavithramv/Weather-project",
      demo: "https://weather-project-rouge-alpha.vercel.app",
      gradient: "from-[#a855f7] to-[#c084fc]"
    },
    {
      title: "3D Spatial Data Processor",
      description: "Advanced geometric computation engine for processing complex 3D spatial datasets with real-time visualization capabilities.",
      image: " /lidar.jpg ",
      technologies: ["C++", "3D Graphics", "Spatial Analysis", "Real-time Processing", "Qt Creator", "OpenGL"],
      category: "geo",
      github: "#",
      demo: "#",
      gradient: "from-[#c084fc] to-[#e879f9]"
    },
    {
      title: "Kannada Hate Speech Detection",
      description: "A machine learning pipeline to detect offensive or hate speech in Kannada using NLP models and labeled datasets.",
      image: " /hate.png ",
      technologies: ["Python", "NLP", "Pandas", "Sklearn", "Jupyter Notebook"],
      category: "data",
      github: "https://github.com/Pavithramv/Hate-Speech-in-Kannada",
      demo: "https://github.com/Pavithramv/Hate-Speech-in-Kannada",
      gradient: "from-[#6b21a8] to-[#9333ea]"
    },
    {
      title: "Agriculture Analysis & Yield Prediction",
      description: "Used regression and clustering to analyze crop yields and weather patterns for optimized agricultural planning.",
      image: " /agriculture.jpg ",
      technologies: ["Python", "Data Science", "Jupyter", "Matplotlib", "Scikit-learn"],
      category: "data",
      github: "https://github.com/Pavithramv/Agriculture",
      demo: "https://github.com/Pavithramv/Agriculture",
      gradient: "from-[#15803d] to-[#4ade80]"
    },
    {
      title: "Flood Prediction & Risk Analysis",
      description: "Predicted flood events using rainfall and topographical data to support disaster risk management.",
      image: " /flood.jpg ",
      technologies: ["Machine Learning", "Python", "Seaborn", "Geopandas", "Jupyter Notebook"],
      category: "data",
      github: "https://github.com/Pavithramv/Flood",
      demo: "https://github.com/Pavithramv/Flood",
      gradient: "from-[#0284c7] to-[#38bdf8]"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: 'AI & ML' },
    { key: 'game', label: 'Web Project' },
    { key: 'data', label: 'Data Analysis' },
    { key: 'geo', label: 'Geospatial Project'}
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative z-10 bg-gradient-to-b from-transparent to-[#1a0d2e]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] bg-clip-text text-transparent neon-text">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge technology with creative problem-solving
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform-gpu hover:scale-105 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white neon-glow'
                  : 'bg-[#1a0d2e]/50 text-[#8b5cf6] border border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]/60'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a0d2e]/80 to-[#2d1b4e]/80 rounded-xl overflow-hidden border border-[#8b5cf6]/30 backdrop-blur-sm transform-gpu hover:scale-105 transition-all duration-500 card-3d neon-border hover:neon-glow"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d2e]/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`}></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e879f9] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-[#8b5cf6]/20 to-[#c084fc]/20 text-[#c084fc] rounded-full border border-[#8b5cf6]/30 hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-[#e879f9] transition-all duration-300 hover:scale-110 transform-gpu"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-300 hover:text-[#e879f9] transition-all duration-300 hover:scale-110 transform-gpu"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#8b5cf6] rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300"></div>
              <Zap className="absolute bottom-4 right-4 w-5 h-5 text-[#c084fc] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Floating Decorations */}
        <Sparkles className="absolute top-20 right-20 w-6 h-6 text-[#8b5cf6] animate-pulse opacity-40" />
        <div className="absolute bottom-10 left-1/4 w-5 h-5 bg-[#e879f9] rounded-full animate-float-slow opacity-30"></div>
      </div>
    </section>
  );
};

export default Projects;
