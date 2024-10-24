import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCode } from "react-icons/fa";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  const resumeFile = t('header.resume') === 'Download Resume'
    ? 'cv-en.pdf'
    : 'cv-es.pdf';
  
  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <FaCode size={64} className="mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          {t('hero.greeting')} <span className="text-yellow-300">{t('hero.name')}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">{t('hero.title')}</p>
        <a 
          href="#contact"
          className="bg-white mx-4 text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
        >
          {t('header.contact')}
        </a>

        
        <a
          href={resumeFile}
          download
          type="application/pdf"
          className="bg-white mx-4 text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
        >
          {t('header.resume')}
        </a>
        <a 
          href="https://github.com/fgonzalezurriola" target="_blank" rel="noreferrer noopener"
          className="bg-white mx-4 text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
        >
          Github
        </a>
      </div>
    </section>
  );
};

export default Hero;