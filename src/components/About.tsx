import React from 'react';
import { useTranslation } from 'react-i18next';
import TechnologyCarousel from './TechnologyCarousel';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mt-4 mb-4">{t('about.title')}</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 text-justify py-6">
            {t('about.description')}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-justify m-auto">
            {t('about.description1')}
          </p>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center py-6">{t('about.technologies')}</h2>
      <TechnologyCarousel />
    </section>
  );
};

export default About;