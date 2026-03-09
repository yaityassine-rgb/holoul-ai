import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Trophy, Check, Tv, Users, BarChart3 } from "lucide-react";
import SEOHead from "../components/SEOHead";

export default function TactiqProductPage() {
  const { t } = useTranslation();
  const features = [1, 2, 3, 4, 5, 6];

  const stats = [
    { icon: Tv, value: t("products.tactiq.stats.leagues") },
    { icon: Users, value: t("products.tactiq.stats.players") },
    { icon: BarChart3, value: t("products.tactiq.stats.matches") },
  ];

  return (
    <>
      <SEOHead title={t("products.tactiq.name")} description={t("products.tactiq.description")} />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-16 h-16 rounded-2xl bg-tactiq/10 flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-tactiq" />
              </div>
              <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium text-tactiq bg-tactiq/10 border border-tactiq/20 mb-4">
                {t("products.comingSoon")}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("products.tactiq.name")}</h1>
              <p className="text-xl text-tactiq font-medium mb-4">{t("products.tactiq.tagline")}</p>
              <p className="text-gray-400 max-w-2xl mx-auto">{t("products.tactiq.description")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-6 h-6 text-tactiq mx-auto mb-2" />
                <div className="text-xl font-bold text-white">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-white mb-8">{t("products.tactiq.features.title")}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-tactiq mt-0.5 shrink-0" />
                  <span className="text-gray-300">{t(`products.tactiq.features.f${f}`)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">{t("products.comingSoon")}</h2>
            <p className="text-gray-400 mb-6">{t("products.tactiq.tagline")}</p>
            <span className="inline-flex px-6 py-3 bg-tactiq/10 text-tactiq font-semibold rounded-xl border border-tactiq/20">
              {t("products.tactiq.cta")}
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
