import { useState, useEffect } from 'react';
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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true';
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('darkMode', JSON.stringify(newTheme)); 
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); 
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

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
              isDarkMode 
              ? 'bg-gray-200 hover:bg-gray-400 text-gray-800'
              : 'bg-gray-600 hover:bg-gray-800 text-yellow-300'
            }`}
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode 
              ? 'bg-gray-200 hover:bg-gray-400 text-gray-800' 
              : 'bg-gray-600 hover:bg-gray-800 text-white'
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
