import React from 'react';
import { FaPython, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiDjango, SiFlask, SiMongodb, SiPostgresql, SiTailwindcss} from 'react-icons/si';

const technologies = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Flask', icon: <SiFlask /> },
];

const TechnologyCarousel: React.FC = () => {
  const doubledTechnologies = [...technologies, ...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="relative h-20 overflow-hidden w-1/2 mx-auto mb-2">
      {/* Fade out and fade in */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-gray-100 dark:from-gray-800 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-gray-100 dark:from-gray-800 to-transparent z-10" />
      </div>

      {/* Rows with icons */}
      <div className="flex items-center h-full space-x-8 animate-scroll">
        {doubledTechnologies.map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-20 h-20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-6xl"
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyCarousel;
