import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCode } from "react-icons/fa";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  // const resumeFile = t('header.resume') === 'Download resume'
  //   ? 'cv-en.pdf'
  //   : 'cv-es.pdf';
  
  return (
    <section id="home" className="bg-gradient-to-r text-white py-12
    from-blue-500 to-purple-800
    dark:from-sky-400 dark:to-purple-600
    transition-colors
    ">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <FaCode size={48} className="mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          {t('hero.greeting')} <span className="text-yellow-300">{t('hero.name')}</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">{t('hero.title')}</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contact"
            className="bg-white text-blue-600 py-2 px-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-115"
          >
            {t('header.contact')}
          </a>
          {/* <a
            href={resumeFile}
            download
            type="application/pdf"
            className="bg-white text-blue-600 py-2 px-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-115"
          >
            {t('header.resume')}
          </a> */}
          <a 
            href="https://github.com/fgonzalezurriola" target="_blank" rel="noreferrer noopener"
            className="bg-white text-blue-600 py-2 px-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-115"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;