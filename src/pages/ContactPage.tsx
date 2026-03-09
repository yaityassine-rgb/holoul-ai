import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Clock } from "lucide-react";
import SEOHead from "../components/SEOHead";
import { COMPANY } from "../lib/constants";

export default function ContactPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = data.get("subject") as string;
    const name = data.get("name") as string;
    const body = data.get("message") as string;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject + " from " + name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <SEOHead title={t("contact.title")} description={t("contact.subtitle")} />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("contact.title")}</h1>
            <p className="text-lg text-gray-400">{t("contact.subtitle")}</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-2xl p-8">
                {sent ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-brand mx-auto mb-4" />
                    <p className="text-lg text-gray-300">{t("contact.form.success")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("contact.form.name")}
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors"
                        placeholder={t("contact.form.name")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("contact.form.email")}
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors"
                        placeholder={t("contact.form.email")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("contact.form.subject")}
                      </label>
                      <select
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-xl text-white focus:outline-none focus:border-brand transition-colors"
                      >
                        {["general", "sales", "support", "partnership", "press"].map((key) => (
                          <option key={key} value={t(`contact.form.subjects.${key}`)}>
                            {t(`contact.form.subjects.${key}`)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors resize-none"
                        placeholder={t("contact.form.message")}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      {t("contact.form.send")}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-white">{t("contact.info.title")}</h3>
                {[
                  { icon: Mail, label: t("contact.info.email"), value: COMPANY.email },
                  { icon: MapPin, label: t("contact.info.address"), value: t("contact.info.addressValue") },
                  { icon: Clock, label: t("contact.info.hours"), value: t("contact.info.hoursValue") },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-400">{item.label}</div>
                      <div className="text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
