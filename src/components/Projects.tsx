import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { BookMarked } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineTerminal } from "react-icons/md";
import { GrPlan } from "react-icons/gr";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      icon: BookMarked,
      title: "projects.project1.title",
      description: "projects.project1.description",
      githubLink: "",
      deploy: "",
    },
    {
      icon: GrPlan,
      title: "projects.project2.title",
      description: "projects.project2.description",
      githubLink:
        "https://github.com/fgonzalezurriola/Mallas-Fcfm-fgonzalezurriola",
      deploy: "https://mallas-fcfm-fgonzalezurriola.netlify.app/",
    },
    // {
    //   icon: Bird,
    //   title: "projects.project3.title",
    //   description: "projects.project3.description",
    //   githubLink: "https://github.com/fgonzalezurriola/Chilean-birds",
    //   deploy: "https://chilean-birds.netlify.app/",
    // },
    {
      icon: MdOutlineTerminal,
      title: "projects.project3.title",
      description: "projects.project3.description",
      githubLink: "https://github.com/fgonzalezurriola/dccprint",
      deploy: "",
    },
    // {
    //   icon: BookUser,
    //   title: "projects.project4.title",
    //   description: "projects.project4.description",
    //   githubLink: "https://github.com/fgonzalezurriola/Portfolio-React-Vite",
    //   deploy: "https://users.dcc.uchile.cl/~fragonza/",
    // },
  ];

  return (
    <section className="py-12 transition-color">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          {t("projects.title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="flex flex-col h-full transition-transform duration-200 rounded-lg shadow-md bg-gray-50 dark:bg-gray-700 hover:scale-105"
            >
              <div className="flex-grow p-6">
                <project.icon
                  size={48}
                  className="mb-4 text-[#22D37F] dark:text-[#B9FF66]"
                />
                <h3 className="mb-2 text-xl font-semibold">
                  {t(project.title)}
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  {t(project.description)}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 p-6 pt-0">
                {project.githubLink && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm text-white bg-[#22D37F] dark:bg-[#B9FF66] dark:text-gray-900 rounded-lg hover:bg-[#1bb06a] dark:hover:bg-[#a0e95a] transition-colors"
                  >
                    {t("projects.code")}
                    <FaGithub className="ml-2" size={16} />
                  </motion.a>
                )}
                {project.deploy && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm text-white transition-colors bg-yellow-400 rounded-lg dark:text-gray-900 hover:bg-yellow-600"
                  >
                    {t("projects.deployed")}

                    <CgWebsite className="ml-2" size={16} />
                  </motion.a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
