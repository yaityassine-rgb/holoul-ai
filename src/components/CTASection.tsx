import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  external?: boolean;
}

export default function CTASection({ title, subtitle, ctaText, ctaLink, external }: CTASectionProps) {
  const ButtonContent = (
    <span className="inline-flex items-center gap-2 px-8 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl transition-colors">
      {ctaText}
      <ArrowRight className="w-4 h-4" />
    </span>
  );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass-card rounded-3xl p-12 md:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{subtitle}</p>
          {external ? (
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              {ButtonContent}
            </a>
          ) : (
            <Link to={ctaLink}>{ButtonContent}</Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
