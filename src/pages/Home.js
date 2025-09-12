import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../pic.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <img
            src={profilePic}
            alt="Profile"
            className="w-48 h-48 rounded-full shadow-2xl object-cover mx-auto border-4 border-white"
          />
        </div>
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
          SIMUGOMWA Obald
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Full Stack Developer Intern passionate about creating modern web applications and solving complex problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Learn More About Me
          </Link>
          <Link
            to="/projects"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg border border-blue-200"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
