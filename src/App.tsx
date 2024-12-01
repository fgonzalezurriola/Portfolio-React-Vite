import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToggleButtons from './components/ToggleButtons';
import { useDarkMode } from './hooks/useDarkMode';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { isDarkMode, toggleTheme } = useDarkMode();
  const { toggleLanguage } = useLanguage();
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-1000">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ToggleButtons
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
        />
      </div>
    </div>
  );
}

export default App;
