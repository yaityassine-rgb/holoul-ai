import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Scale, Building2, Trophy, type LucideProps } from "lucide-react";

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  Scale,
  Building2,
  Trophy,
};

interface ProductCardProps {
  id: string;
  name: string;
  color: string;
  icon: string;
  status: "live" | "coming-soon";
}

export default function ProductCard({ id, name, color, icon, status }: ProductCardProps) {
  const { t } = useTranslation();
  const Icon = ICONS[icon] || Scale;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/products/${id}`}
        className="block glass-card rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group"
      >
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon className="w-6 h-6" style={{ color }} />
          </div>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: `${color}15`,
              color,
            }}
          >
            {status === "live" ? t("products.live") : t("products.comingSoon")}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-sm text-gray-400 mb-4">{t(`products.${id}.tagline`)}</p>
        <p className="text-sm text-gray-500 mb-6 line-clamp-2">
          {t(`products.${id}.description`)}
        </p>
        <div
          className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
          style={{ color }}
        >
          <span>{t("products.learnMore")}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
}
