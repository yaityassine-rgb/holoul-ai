import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";

export default function PrivacyPage() {
  const { t } = useTranslation();
  const sections = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      <SEOHead title={t("privacy.title")} />

      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("privacy.title")}</h1>
            <p className="text-gray-400">{t("privacy.lastUpdated")}</p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((s) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <h2 className="text-xl font-bold text-white mb-4">{t(`privacy.sections.s${s}.title`)}</h2>
                <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                  {t(`privacy.sections.s${s}.content`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
