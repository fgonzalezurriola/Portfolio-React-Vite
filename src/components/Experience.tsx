import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiChalkboardTeacherLight } from "react-icons/pi";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      icon: AiOutlineUsergroupAdd,
      title: "experiences.experience1.title",
      company: "experiences.experience1.company",
      date: "experiences.experience1.date",
      description: "experiences.experience1.description",
    },
    {
      icon: PiChalkboardTeacherLight,
      title: "experiences.experience2.title",
      company: "experiences.experience2.company",
      date: "experiences.experience2.date",
      description: "experiences.experience2.description",
    },
  ];

  return (
    <section className="py-6 max-w-3xl transition-color container mx-auto px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center py-6 mb-12">
        {t("experiences.title")}
      </h1>

      {experiences.map((experience, index) => (
        <motion.div
          className="w-full items-center bg-slate-900 p-6
          rounded-lg mb-20"
          whileHover={{
            scale: 1.07,
            transition: { duration: 0.2, type: "tween" },
          }}
          initial={{ backgroundColor: "#111827" }}
          animate={{ backgroundColor: "#13384f" }}
          transition={{
            backgroundColor: {
              ease: "easeInOut",
              duration: 5.5,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
        >
          <article key={index} className="">
            <div className="p-6 flex items-center">
              <experience.icon size={48} className="text-blue-500 mr-4" />
              <motion.h2>{t(experience.title)}</motion.h2>
            </div>
            <h3 className="text-gray-600 dark:text-gray-300 text-opacity-50 mb-6">
              {t(experience.company)}
              <span> {t(experience.date)} </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t(experience.description)}
            </p>
          </article>
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;
