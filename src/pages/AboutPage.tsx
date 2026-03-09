import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Lightbulb, Users, Globe, Shield, Building, Mail, MapPin, Calendar } from "lucide-react";
import SEOHead from "../components/SEOHead";

const VALUE_ICONS = [Lightbulb, Users, Globe, Shield];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead title={t("about.title")} description={t("about.subtitle")} />

      {/* Header */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("about.title")}</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t("about.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">{t("about.story.title")}</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t("about.values.title")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => {
              const Icon = VALUE_ICONS[i - 1];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t(`about.values.v${i}.title`)}
                  </h3>
                  <p className="text-sm text-gray-400">{t(`about.values.v${i}.desc`)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">{t("about.company.title")}</h2>
            <div className="space-y-4">
              {[
                { icon: Building, text: t("about.company.name") },
                { icon: MapPin, text: t("about.company.location") },
                { icon: Calendar, text: t("about.company.founded") },
                { icon: Mail, text: t("about.company.email") },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <item.icon className="w-5 h-5 text-brand shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
