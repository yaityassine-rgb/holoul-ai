import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../lib/constants";

export default function ProductsPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead title={t("products.overview")} description={t("products.overviewSubtitle")} />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("products.overview")}</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t("products.overviewSubtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
