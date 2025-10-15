import React from 'react';
import './about.css'; // make sure you have animations in CSS

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 pt-[180px] sm:pt-[200px] lg:pt-32 flex flex-col items-center">
      {/* pt-[180px] for mobile, sm:pt-[200px] for small screens, lg:pt-32 for desktop */}

      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-10 animate-fade-in">
        About TechXtract
      </h1>

      {/* Society Description Box */}
      <div className="relative bg-gray-900 border-2 border-cyan-400 rounded-2xl p-8 max-w-4xl w-full sm:w-3/4 mb-10 animate-border-glow">
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4">
          Who We Are
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          TechXtract is the official technology society of the CST Department, a hub for innovation, collaboration, and engineering creativity. 
          Our mission is to provide students with the platform to explore, experiment, and implement cutting-edge technology solutions, while fostering teamwork and learning.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full sm:w-3/4">
        {/* Mission */}
        <div className="relative bg-gray-900 border-2 border-cyan-400 rounded-2xl p-6 animate-border-glow">
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-3">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            To empower students with technical knowledge, hands-on experience, and collaboration opportunities that inspire innovation and professional growth.
          </p>
        </div>

        {/* Vision */}
        <div className="relative bg-gray-900 border-2 border-cyan-400 rounded-2xl p-6 animate-border-glow">
          <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-3">Our Vision</h3>
          <p className="text-lg leading-relaxed">
            To become the leading technology society of the department, nurturing future leaders, innovators, and problem solvers in the field of technology.
          </p>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="relative bg-gray-900 border-2 border-cyan-400 rounded-2xl p-8 max-w-4xl w-full sm:w-3/4 mt-10 animate-border-glow">
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4">
          Our Achievements
        </h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Organized multiple tech workshops and hackathons for students.</li>
          <li>Participated and won national-level coding and robotics competitions.</li>
          <li>Created innovative projects in AI, IoT, and Web Development.</li>
          <li>Engaged with the student community through events and social media.</li>
        </ul>
      </div>
    </div>
  );
}
