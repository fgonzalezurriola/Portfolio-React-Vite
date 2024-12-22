import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-6 border-t-4 border-gray-100 dark:border-gray-300">
      <div className="container mx-auto px-6 text-center">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
