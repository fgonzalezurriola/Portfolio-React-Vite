import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaCode } from "react-icons/fa";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const resumeFile =
    t("header.resume") === "Download resume" ? "cv-en.pdf" : "cv-es.pdf";

  return (
    <motion.section
      animate={{ y: [5, 2.5, 0] }}
      transition={{ ease: "easeInOut", duration: 1 }}
      id="home"
      className="relative py-16 overflow-hidden text-black transition-colors bg-gradient-to-br from-white via-green-50 to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 dark:text-white"
    >
      {/* Gradient accent elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#22D37F] dark:bg-[#B9FF66] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#22D37F] dark:bg-[#B9FF66] rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: [4.5, 2.0, 0], opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center min-h-[60vh]"
      >
        <FaCode
          size={48}
          className="mx-auto mb-6 text-[#22D37F] dark:text-[#B9FF66] drop-shadow-lg dark:drop-shadow-none"
        />
        <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-7xl">
          {t("hero.greeting")}{" "}
          <span className="text-[#22D37F] dark:text-[#B9FF66]">
            {t("hero.name")}
          </span>
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-xl font-medium text-gray-600 md:text-2xl dark:text-gray-300">
          {t("hero.title")}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-[#B9FF66] text-black dark:bg-[#22D37F] dark:text-white py-3 px-8 rounded-full text-lg md:text-xl font-bold shadow-md hover:bg-[#a0e95a] dark:hover:bg-[#1bb06a] transition-colors cursor-pointer"
          >
            {t("header.contact")}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={resumeFile}
            download
            type="application/pdf"
            className="bg-[#B9FF66] text-black dark:bg-[#22D37F] dark:text-white py-3 px-8 rounded-full text-lg md:text-xl font-bold shadow-md hover:bg-[#a0e95a] dark:hover:bg-[#1bb06a] transition-colors cursor-pointer"
          >
            {t("header.resume")}
          </motion.a>{" "}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/fgonzalezurriola"
            target="_blank"
            rel="noreferrer noopener"
            className="border-2 border-[#22D37F] dark:border-[#B9FF66] text-[#22D37F] dark:text-[#B9FF66] py-3 px-8 rounded-full text-lg md:text-xl font-bold shadow-md hover:bg-[#22D37F] hover:text-white dark:hover:bg-[#B9FF66] dark:hover:text-gray-900 transition-colors cursor-pointer"
          >
            Github
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
