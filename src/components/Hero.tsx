
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'PAVITHRA M V';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 3D Avatar */}
        <div className="relative mb-8 animate-float">
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-[#1a0d2e] to-[#2d1b4e] rounded-full flex items-center justify-center transform-gpu">
              <span className="text-4xl font-bold text-white">PV</span>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#c084fc] rounded-full opacity-20 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Typewriter Title */}
        <h1 className="text-2xl md:text-4xl font-black mb-6 relative">
          <span className="bg-gradient-to-r from-[#c084fc] via-[#e879f9] to-[#8b5cf6] bg-clip-text text-transparent animate-gradient-x">
            {text}
          </span>
          <span className="animate-blink text-[#e879f9]">|</span>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] opacity-20 blur-2xl -z-10"></div>
        </h1>

        {/* Subtitle with neon effect */}
        <div className="relative mb-8">
          <p className="text-2xl md:text-3xl text-[#c084fc] font-bold mb-2 neon-text">
            Software Developer & Data Analyst
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technology, 3D spatial data analysis,
            and innovative solutions that push the boundaries of what's possible.
          </p>
        </div>

        {/* 3D Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] rounded-lg font-bold text-white overflow-hidden transform-gpu hover:scale-110 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-[#c084fc] to-[#e879f9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>

          <button className="group relative px-8 py-4 border-2 border-[#8b5cf6] rounded-lg font-bold text-[#8b5cf6] overflow-hidden transform-gpu hover:scale-110 transition-all duration-300 bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center group-hover:text-white transition-colors duration-300">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </div>
          </button>
        </div>

        {/* Social Links with 3D effect */}
        <div className="flex justify-center space-x-6">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:pavithramv064@gmail.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="group relative w-12 h-12 bg-gradient-to-r from-[#2d1b4e] to-[#1a0d2e] rounded-lg border border-[#8b5cf6]/30 flex items-center justify-center transform-gpu hover:scale-110 hover:rotate-12 transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-[#8b5cf6] group-hover:text-[#e879f9] transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
              <div className="absolute -inset-2 bg-[#8b5cf6] opacity-0 group-hover:opacity-30 blur-md rounded-lg transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#8b5cf6] rounded-full animate-float-slow opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#c084fc] rounded-full animate-float-medium opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-[#e879f9] rounded-full animate-float opacity-80"></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-[#a855f7] rounded-full animate-float-slow opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
