import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { BookMarked, BookUser, Bird } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { TbSandbox } from "react-icons/tb";
import { GrPlan } from "react-icons/gr";
import TechnologyCarousel from "./TechnologyCarousel";

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
      deploy: "https://mallas-fcfm-fgonzalezurriola.vercel.app/",
    },
    {
      icon: Bird,
      title: "projects.project3.title",
      description: "projects.project3.description",
      githubLink: "https://github.com/fgonzalezurriola/Chilean-birds",
      deploy: "https://chilean-birds-eight.vercel.app/",
    },
    {
      icon: BookUser,
      title: "projects.project4.title",
      description: "projects.project4.description",
      githubLink: "https://github.com/fgonzalezurriola/Portfolio-React-Vite",
      deploy: "https://users.dcc.uchile.cl/~fragonza/",
    },
    {
      icon: TbSandbox,
      title: "projects.project5.title",
      description: "projects.project5.description",
      githubLink: "https://github.com/fgonzalezurriola/Zona-de-Pruebas-de-Rust",
      deploy: "https://zona-de-pruebas-de-rust.vercel.app/",
    },
  ];

  return (
    <section className="py-12 transition-color">
      <TechnologyCarousel />
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("projects.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md flex flex-col h-full transition-transform duration-200 hover:scale-105"
            >
              <div className="p-6 flex-grow">
                <project.icon size={48} className="text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {t(project.title)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t(project.description)}
                </p>
              </div>

              <div className="p-6 pt-0 flex flex-wrap gap-4">
                {project.githubLink && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm text-white rounded-lg bg-blue-500 hover:bg-blue-700"
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
                    className="inline-flex items-center px-4 py-2 text-sm text-white rounded-lg bg-yellow-400 hover:bg-yellow-600"
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
