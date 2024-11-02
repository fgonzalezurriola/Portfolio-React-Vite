import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <div className="fixed top-16 right-4 flex space-x-2 sm:top-1.5 z-20">          
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-200 text-gray-800' : 'bg-gray-600 text-yellow-300'
            }`}
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-200 text-gray-800' : 'bg-gray-600 text-white'
            }`}
          >
            <Globe size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
