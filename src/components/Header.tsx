import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-1000">
      <nav className="container mx-auto px-4 py-3">
        <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-6">
          <li>
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              {t('header.home')}
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              {t('header.about')}
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              {t('header.projects')}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              {t('header.contact')}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;