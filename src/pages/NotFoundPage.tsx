import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import SEOHead from "../components/SEOHead";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead title="404" />

      <section className="py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-8xl font-bold gradient-text mb-4">{t("notFound.title")}</h1>
            <h2 className="text-2xl font-bold text-white mb-4">{t("notFound.subtitle")}</h2>
            <p className="text-gray-400 mb-8">{t("notFound.text")}</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-colors"
            >
              <Home className="w-4 h-4" />
              {t("notFound.cta")}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
