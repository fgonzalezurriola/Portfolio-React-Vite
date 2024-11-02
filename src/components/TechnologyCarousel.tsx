import React from 'react';
import { FaPython, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaNodeJs} from 'react-icons/fa';
import { SiDjango, SiFlask, SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript} from 'react-icons/si';

const technologies = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
];

const TechnologyCarousel: React.FC = () => {
  const doubledTechnologies = Array(12).fill(technologies).flat();

  return (
    <div className="relative h-30 overflow-hidden sm:w-1/2 w-full mx-auto mb-2">
      {/* Fade out and fade in */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-gray-100 dark:from-gray-800 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-gray-100 dark:from-gray-800 to-transparent z-10" />
      </div>

      {/* Rows with icons and names */}
      <div className="flex items-center h-full space-x-8 animate-scroll-mobile sm:animate-scroll-fast md:animate-scroll">
        {doubledTechnologies.map((tech, index) => (
          <div key={index} className="flex-shrink-0 w-20 flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 text-6xl">
            {tech.icon}
            <p className="text-sm mt-2 text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyCarousel;
