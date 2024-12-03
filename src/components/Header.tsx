import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const navItems = [
    { href: '#home', label: 'header.home' },
    { href: '#about', label: 'header.about' },
    { href: '#projects', label: 'header.projects' },
    { href: '#contact', label: 'header.contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors">
      <nav className="container mx-auto px-4 py-3" aria-label="Main navigation">
        <ul className="flex flex-wrap justify-center space-x-6 sm:space-x-10">
          {navItems.map((item) => (
            <li key={item.href} className="transition-transform hover:scale-115">
              <a
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-transform hover:scale-115"
                onClick={(e) => handleClick(e, item.href)}
              >
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
