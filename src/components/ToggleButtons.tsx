import { motion } from "motion/react";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="flex space-x-3 right-4 z-20 absolute md:fixed top-16 md:top-1.5"
    >
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={toggleTheme}
        className={`p-2 rounded-full transition-colors ${
          isDarkMode
            ? "bg-gray-200 hover:bg-gray-400 text-gray-800"
            : "bg-gray-600 hover:bg-gray-800 text-yellow-300"
        }`}
      >
        {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={toggleLanguage}
        className={`p-2 rounded-full transition-colors ${
          isDarkMode
            ? "bg-gray-200 hover:bg-gray-400 text-gray-800"
            : "bg-gray-600 hover:bg-gray-800 text-white"
        }`}
      >
        <Globe size={20} />
      </motion.button>
    </motion.div>
  );
};

export default ToggleButtons;
