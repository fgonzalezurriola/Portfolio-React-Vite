import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <Code size={64} className="mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          {t('hero.greeting')} <span className="text-yellow-300">{t('hero.name')}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">{t('hero.title')}</p>
        <a href="#contact" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
          {t('header.contact')}
        </a>
      </div>
    </section>
  );
};

export default Hero;