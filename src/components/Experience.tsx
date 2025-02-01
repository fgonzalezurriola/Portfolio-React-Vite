import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { MdCastForEducation } from "react-icons/md";
import { PiChalkboardTeacherLight } from "react-icons/pi";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      icon: MdCastForEducation,
      title: "experiences.experience1.title",
      company: "experiences.experience1.company",
      date: "experiences.experience1.date",
      description1: "experiences.experience1.description1",
      description2: "experiences.experience1.description2",
      description3: "experiences.experience1.description3",
    },
    {
      icon: PiChalkboardTeacherLight,
      title: "experiences.experience2.title",
      company: "experiences.experience2.company",
      date: "experiences.experience2.date",
      description1: "experiences.experience2.description1",
      description2: "experiences.experience2.description2",
      description3: "experiences.experience2.description3",
    },
  ];

  return (
    <section className="py-6 max-w-3xl transition-color container mx-auto px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center py-6 mb-12 dark:text-white">
        {t("experiences.title")}
      </h1>

      {experiences.map((experience, index) => (
        <motion.div
          className="w-full items-center bg-white shadow-md dark:bg-slate-900 p-6 rounded-lg mb-20"
          whileHover={{
            scale: 1.07,
            transition: { duration: 0.2 },
          }}
          // initial={{ backgroundColor: "#111827" }}
          // animate={{ backgroundColor: "#13384f" }}
          // transition={{
          //   backgroundColor: {
          //     ease: "easeInOut",
          //     duration: 2.5,
          //     repeat: Infinity,
          //     repeatType: "mirror",
          //   },
          // }}
        >
          <article key={index}>
            <div className="p-6 flex items-center">
              <experience.icon size={48} className="text-blue-500 mr-4" />
              <motion.h2 className="text-3xl dark:text-white">
                {t(experience.title)}
              </motion.h2>
            </div>
            <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              {t(experience.company)}
              <span> {t(experience.date)} </span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
              {t(experience.description1)}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
              {t(experience.description2)}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
              {t(experience.description3)}
            </p>
          </article>
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;
