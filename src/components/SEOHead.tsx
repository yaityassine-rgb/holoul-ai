import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description?: string;
}

export default function SEOHead({ title, description }: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title} — Holoul AI</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={`${title} — Holoul AI`} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
}
