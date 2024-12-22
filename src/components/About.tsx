import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import TechnologyCarousel from "./TechnologyCarousel";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      id="about"
      className="py-6 bg-gray-100 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-start mt-6 mb-2">
          {t("about.title")}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-start text-wrap py-4">
          {t("about.description")}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-start text-wrap py-4">
          {t("about.description1")}
        </p>
      </div>
      <TechnologyCarousel />
    </motion.section>
  );
};

export default About;
