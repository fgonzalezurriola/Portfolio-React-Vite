import { useState, useEffect } from 'react';

export const useDarkMode = (): {
  isDarkMode: boolean;
  toggleTheme: () => void;
} => {

  const getSystemThemePreference = (): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode');
      return savedTheme !== null ? savedTheme === 'true' : getSystemThemePreference();
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleThemeChange = (e: MediaQueryListEvent): void => {
      const newTheme = e.matches;
      if (!localStorage.getItem('darkMode')) {
        setIsDarkMode(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleThemeChange);
      
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  const toggleTheme = (): void => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('darkMode', JSON.stringify(newTheme));
  };

  return { isDarkMode, toggleTheme };
};