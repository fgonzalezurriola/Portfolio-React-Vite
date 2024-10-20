import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookMarked, ListChecks, BookUser } from 'lucide-react';
import { FaGithub } from 'react-icons/fa'; 

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    { 
      icon: BookMarked, 
      title: 'projects.project1.title', 
      description: 'projects.project1.description', 
      githubLink: '' 
    },
    { 
      icon: ListChecks, 
      title: 'projects.project2.title', 
      description: 'projects.project2.description', 
      githubLink: 'https://github.com/fgonzalezurriola/Projecto-Express' 
    },
    { 
      icon: BookUser, 
      title: 'projects.project3.title', 
      description: 'projects.project3.description', 
      githubLink: 'https://github.com/fgonzalezurriola/Portfolio-React-Vite' 
    }
  ];

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
            >
              <project.icon size={48} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t(project.title)}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t(project.description)}</p>

              {/* Gh button only if the link is defined */}
              {project.githubLink && (
                <a
                  href={project.githubLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 z-10 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Código
                  <FaGithub className="ml-2" size={20} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
