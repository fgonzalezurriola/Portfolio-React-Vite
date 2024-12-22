import { Sun, Moon, Globe } from "lucide-react";

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
    <div className="flex space-x-3 right-4 z-20 absolute md:fixed top-16 md:top-1.5">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full transition-colors ${
          isDarkMode
            ? "bg-gray-200 hover:bg-gray-400 text-gray-800"
            : "bg-gray-600 hover:bg-gray-800 text-yellow-300"
        }`}
      >
        {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      <button
        onClick={toggleLanguage}
        className={`p-2 rounded-full transition-colors ${
          isDarkMode
            ? "bg-gray-200 hover:bg-gray-400 text-gray-800"
            : "bg-gray-600 hover:bg-gray-800 text-white"
        }`}
      >
        <Globe size={20} />
      </button>
    </div>
  );
};

export default ToggleButtons;
