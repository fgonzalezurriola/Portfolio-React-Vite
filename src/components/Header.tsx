import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const navItems = [
    { href: "#home", label: "header.home" },
    { href: "#about", label: "header.about" },
    { href: "#projects", label: "header.projects" },
    { href: "#contact", label: "header.contact" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="bg-white dark:bg-gray-800 shadow-md transition-colors"
    >
      <nav className="container mx-auto px-4 py-3" aria-label="Main navigation">
        <ul className="flex flex-wrap justify-center space-x-6 sm:space-x-10">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="transition-transform hover:scale-115"
            >
              <a
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-[#22D37F] dark:hover:text-[#B9FF66] transition-transform hover:scale-115"
                onClick={(e) => handleClick(e, item.href)}
              >
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
