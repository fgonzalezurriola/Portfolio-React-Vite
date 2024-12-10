import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('experience.title')}</h2>
      <p>{t('experience.description')}</p>
    </div>
  );
};

export default Experience;