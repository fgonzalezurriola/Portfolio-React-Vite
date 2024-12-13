import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const Experience = [
    {
      icon: AiOutlineUsergroupAdd,
      title: 'experience.experience1.title',
      Company: 'experience.experience1.Company',
      date: 'experience.experience1.date',
      description: 'experience.experience1.description',
    }
  ]

  return (
    <section>
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('experience.title')}
        </h2>
        <div className="p-6 flex flex-col h-full">
          {Experience.map((experience, index) => (
            <article key={index}>
              <h3>
                {t(experience.title)}
              </h3>
              <div>
                <p>{t(experience.Company)}</p>
                <p>{t(experience.date)}</p>
                <p>{t(experience.description)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;