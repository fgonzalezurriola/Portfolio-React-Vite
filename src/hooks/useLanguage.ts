import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const getSystemLanguagePreference = (): string => {
    if (typeof window !== 'undefined') {
      return window.navigator.language.split('-')[0];
    }
    return 'es';
  }

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage === null) {
      const systemLanguage = getSystemLanguagePreference();
      i18n.changeLanguage(systemLanguage);
      localStorage.setItem('language', systemLanguage);
    } else {
      i18n.changeLanguage(savedLanguage);
    }
    
  },[i18n])

  return { toggleLanguage };
}