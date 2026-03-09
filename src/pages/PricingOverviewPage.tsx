import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp, Scale, Building2, Trophy } from "lucide-react";
import SEOHead from "../components/SEOHead";

export default function PricingOverviewPage() {
  const { t } = useTranslation();
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const myzanPlans = [
    {
      key: "free",
      features: ["f1", "f2", "f3", "f4"],
      highlight: false,
    },
    {
      key: "pro",
      features: ["f1", "f2", "f3", "f4", "f5", "f6"],
      highlight: true,
    },
    {
      key: "enterprise",
      features: ["f1", "f2", "f3", "f4", "f5", "f6"],
      highlight: false,
    },
  ];

  return (
    <>
      <SEOHead title={t("pricing.title")} description={t("pricing.subtitle")} />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("pricing.title")}</h1>
            <p className="text-lg text-gray-400 mb-8">{t("pricing.subtitle")}</p>

            {/* Billing toggle */}
            <div className="inline-flex items-center gap-3 bg-dark-card border border-dark-border rounded-xl p-1">
              <button
                onClick={() => setYearly(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !yearly ? "bg-brand text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {t("pricing.monthly")}
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  yearly ? "bg-brand text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {t("pricing.yearly")}
                <span className="ms-2 text-xs text-green-400">{t("pricing.save")}</span>
              </button>
            </div>
          </motion.div>

          {/* Myzan AI Pricing */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-myzan/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-myzan" />
              </div>
              <h2 className="text-2xl font-bold text-white">Myzan AI</h2>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-myzan/10 text-myzan">
                {t("products.live")}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {myzanPlans.map((plan, i) => {
                const price = t(`pricing.myzan.${plan.key}.price`);
                const isCustom = price === "Custom" || price === "مخصص" || price === "Sur mesure";
                const displayPrice = yearly && !isCustom && plan.key === "pro"
                  ? t(`pricing.myzan.${plan.key}.priceYearly`)
                  : price;

                return (
                  <motion.div
                    key={plan.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`glass-card rounded-2xl p-8 relative ${
                      plan.highlight ? "border-brand/40 ring-1 ring-brand/20" : ""
                    }`}
                  >
                    {plan.highlight && (
                      <span className="absolute -top-3 start-1/2 -translate-x-1/2 px-3 py-1 bg-brand text-white text-xs font-semibold rounded-full">
                        {t("pricing.popular")}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`pricing.myzan.${plan.key}.name`)}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {t(`pricing.myzan.${plan.key}.desc`)}
                    </p>
                    <div className="mb-6">
                      {isCustom ? (
                        <span className="text-3xl font-bold text-white">{displayPrice}</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold text-white">${displayPrice}</span>
                          <span className="text-gray-400 text-sm">
                            {yearly ? t("pricing.perYear") : t("pricing.perMonth")}
                          </span>
                        </>
                      )}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                          <span>{t(`pricing.myzan.${plan.key}.${f}`)}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                        plan.highlight
                          ? "bg-brand hover:bg-brand-dark text-white"
                          : "bg-white/5 hover:bg-white/10 text-white border border-dark-border"
                      }`}
                    >
                      {t("pricing.getStarted")}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Rawasi & TACTIQ Coming Soon */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {[
              { name: "Rawasi AI", icon: Building2, color: "rawasi" },
              { name: "TACTIQ", icon: Trophy, color: "tactiq" },
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${product.color}/10 flex items-center justify-center mx-auto mb-4`}
                  style={{ backgroundColor: product.color === "rawasi" ? "rgba(16,185,129,0.1)" : "rgba(57,255,20,0.1)" }}
                >
                  <product.icon
                    className="w-6 h-6"
                    style={{ color: product.color === "rawasi" ? "#10b981" : "#39ff14" }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <span
                  className="inline-flex px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: product.color === "rawasi" ? "rgba(16,185,129,0.1)" : "rgba(57,255,20,0.1)",
                    color: product.color === "rawasi" ? "#10b981" : "#39ff14",
                  }}
                >
                  {t("products.comingSoon")}
                </span>
              </motion.div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">{t("pricing.faq.title")}</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-start"
                  >
                    <span className="font-medium text-white">{t(`pricing.faq.q${i}.q`)}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-400">{t(`pricing.faq.q${i}.a`)}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
