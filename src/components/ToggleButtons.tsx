import React from 'react';
import { Sun, Moon, Globe } from 'lucide-react';

interface ToggleButtonsProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({
  isDarkMode,
  toggleTheme,
  toggleLanguage,
}) => {
  return (
    <div className="fixed top-16 right-4 flex space-x-2 sm:top-1.5 z-20">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full transition-colors ${
          isDarkMode
          ? 'bg-gray-200 hover:bg-gray-400 text-gray-800'
          : 'bg-gray-600 hover:bg-gray-800 text-yellow-300'}`}
      >
        {isDarkMode 
        ? <Moon size={20} /> 
        : <Sun size={20} />}
      </button>

      <button
        onClick={toggleLanguage}
        className={`p-2 rounded-full transition-colors ${
          isDarkMode
          ? 'bg-gray-200 hover:bg-gray-400 text-gray-800'
          : 'bg-gray-600 hover:bg-gray-800 text-white'}`}
      >
        <Globe size={20} />
      </button>
    </div>
  );
};

export default ToggleButtons;