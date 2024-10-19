import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookMarked, ListChecks, BookUser } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    { icon: BookMarked, title: 'projects.project1.title', description: 'projects.project1.description' },
    { icon: ListChecks, title: 'projects.project2.title', description: 'projects.project2.description' },
    { icon: BookUser, title: 'projects.project3.title', description: 'projects.project3.description' },
  ];

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <project.icon size={48} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t(project.title)}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t(project.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;