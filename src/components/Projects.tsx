import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "AI Hospital Recommendation System",
      description: "Revolutionary blockchain-integrated platform using AI to predict hospital costs and enable secure fundraising for medical treatments.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop&crop=center",
      technologies: ["AI", "Blockchain", "Python", "Machine Learning", "Smart Contracts"],
      category: "ai",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Analysis Gaming Suite",
      description: "Intelligent weather data processing tool with interactive UI plus an engaging 2D obstacle-avoidance game with physics engine.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center",
      technologies: ["Python", "Game Development", "Data Visualization", "Physics Engine"],
      category: "game",
      github: "#",
      demo: "#"
    },
    {
      title: "3D Spatial Data Processor",
      description: "Advanced geometric computation engine for processing complex 3D spatial datasets with real-time visualization capabilities.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop&crop=center",
      technologies: ["Python", "3D Graphics", "Spatial Analysis", "Real-time Processing"],
      category: "data",
      github: "#",
      demo: "#"
    },
    {
      title: "Kannada Hate Speech Detection",
      description: "Natural Language Processing model to classify hate speech in Kannada social media content using ML techniques in Jupyter Notebook.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=300&fit=crop&crop=center",
      technologies: ["Python", "NLP", "Jupyter", "Scikit-learn", "Pandas"],
      category: "data",
      github: "#",
      demo: "#"
    },
    {
      title: "Agriculture Yield Prediction",
      description: "Data-driven analysis and ML-based prediction of crop yields based on historical weather and soil data using Jupyter Notebook.",
      image: "https://images.unsplash.com/photo-1598514982955-e881fa7fda6d?w=500&h=300&fit=crop&crop=center",
      technologies: ["Python", "Pandas", "Matplotlib", "Machine Learning", "Jupyter"],
      category: "data",
      github: "#",
      demo: "#"
    },
    {
      title: "Flood Prediction and Risk Analysis",
      description: "Flood risk modeling using weather patterns, topographical and satellite data in Jupyter Notebook for predictive analytics.",
      image: "https://images.unsplash.com/photo-1604091642126-6f57d0c37f9f?w=500&h=300&fit=crop&crop=center",
      technologies: ["Python", "Data Analysis", "Jupyter", "NumPy", "SciPy"],
      category: "data",
      github: "#",
      demo: "#"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: 'AI & ML' },
    { key: 'game', label: 'Games' },
    { key: 'data', label: 'Data Science' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge technology with creative problem-solving
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'bg-gray-800 text-purple-400 border border-purple-600/30 hover:bg-purple-600/20'
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
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-purple-600/20 text-purple-300 rounded-full border border-purple-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
