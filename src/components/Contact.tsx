import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const username = "fgonzalezurriola";
    const domain = "gmail.com";
    setEmail(`${username}@${domain}`);
  }, []);

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="py-10 bg-gray-100 dark:bg-gray-800 transition-color">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t('contact.title')}</h2>
        <div className="flex justify-center space-x-8">
          {/* Gmail */}
          <button onClick={handleEmailClick} 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 
          transition-all duration-300 hover:scale-125 flex flex-col items-center">
            <FaEnvelope className="text-5xl" />
            <p className="text-center mt-2">{t('contact.email')}</p>
          </button>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/fgonzalezurriola/" target="_blank" rel="noreferrer noopener" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500
          transition-all duration-300 hover:scale-125 flex flex-col items-center">
            <FaLinkedin className="text-5xl ml-2" />
            <p className="text-center mt-2 ml-2">LinkedIn</p>
          </a>
          {/* Telegram */}
          <a href="https://t.me/fgonzalezurriola" target="_blank" rel="noreferrer noopener" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500
          transition-all duration-300 hover:scale-125 flex flex-col items-center">
            <FaTelegram className="text-5xl mr-0" />
            <p className="text-center mt-2">Telegram</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
