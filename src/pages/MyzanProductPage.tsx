import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Scale, Check, Globe, BookOpen, Languages } from "lucide-react";
import SEOHead from "../components/SEOHead";
import CTASection from "../components/CTASection";

export default function MyzanProductPage() {
  const { t } = useTranslation();
  const features = [1, 2, 3, 4, 5, 6];

  const stats = [
    { icon: BookOpen, ...parseStatKey("laws") },
    { icon: Globe, ...parseStatKey("countries") },
    { icon: Languages, ...parseStatKey("languages") },
  ];

  function parseStatKey(key: string) {
    return { value: t(`products.myzan.stats.${key}`) };
  }

  return (
    <>
      <SEOHead title={t("products.myzan.name")} description={t("products.myzan.description")} />

      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-16 h-16 rounded-2xl bg-myzan/10 flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-myzan" />
              </div>
              <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium text-myzan bg-myzan/10 border border-myzan/20 mb-4">
                {t("products.live")}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("products.myzan.name")}</h1>
              <p className="text-xl text-myzan font-medium mb-4">{t("products.myzan.tagline")}</p>
              <p className="text-gray-400 max-w-2xl mx-auto">{t("products.myzan.description")}</p>
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
                <stat.icon className="w-6 h-6 text-myzan mx-auto mb-2" />
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
            <h2 className="text-2xl font-bold text-white mb-8">{t("products.myzan.features.title")}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-myzan mt-0.5 shrink-0" />
                  <span className="text-gray-300">{t(`products.myzan.features.f${f}`)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{t("products.myzan.coverage")}</h2>
            <p className="text-gray-400">{t("products.myzan.coverageDesc")}</p>
          </motion.div>
        </div>
      </section>

      <CTASection
        title={t("products.myzan.name")}
        subtitle={t("products.myzan.tagline")}
        ctaText={t("products.myzan.cta")}
        ctaLink="https://myzan.ai"
        external
      />
    </>
  );
}
