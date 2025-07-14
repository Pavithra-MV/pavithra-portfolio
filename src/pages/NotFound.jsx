
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0514] via-[#1a0d2e] to-[#2d1b4e]">
      <div className="text-center">
        <h1 className="text-6xl font-black text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Page not found</p>
        <a
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
