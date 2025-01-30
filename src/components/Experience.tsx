import { useTranslation } from "react-i18next";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiChalkboardTeacherLight } from "react-icons/pi";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const Experience = [
    {
      icon: AiOutlineUsergroupAdd,
      title: "experience.experience1.title",
      company: "experience.experience1.Company",
      date: "experience.experience1.date",
      description: "experience.experience1.description",
    },
    {
      icon: PiChalkboardTeacherLight,
      title: "experience.experience2.title",
      company: "experience.experience2.Company",
      date: "experience.experience2.date",
      description: "experience.experience2.description",
    },
  ];

  return (
    <section className="py-12 transition-color">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center py-6 mb-6">
          {t("Experience.title")}
        </h2>
        <div>
          {Experience.map((experience, index) => (
            <article key={index} className="">
              <div className="p-6 flex-grow">
                <experience.icon size={48} className="text-blue-500 mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t(experience.title)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t(experience.company)}
                <span> {t(experience.date)} </span>
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t(experience.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
