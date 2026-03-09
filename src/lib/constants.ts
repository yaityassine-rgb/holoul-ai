export const COMPANY = {
  name: "Holoul AI",
  nameAr: "حلول AI",
  legal: "Holoul AI SARL",
  address: "Casablanca, Morocco",
  email: "contact@holoul.ai",
  website: "https://holoul.ai",
  founded: "2024",
};

export const PRODUCTS = [
  {
    id: "myzan",
    name: "Myzan AI",
    nameAr: "ميزان AI",
    color: "#D4AF37",
    url: "https://myzan.ai",
    status: "live" as const,
    icon: "Scale",
  },
  {
    id: "rawasi",
    name: "Rawasi AI",
    nameAr: "رواسي AI",
    color: "#10b981",
    url: "#",
    status: "coming-soon" as const,
    icon: "Building2",
  },
  {
    id: "tactiq",
    name: "TACTIQ",
    nameAr: "TACTIQ",
    color: "#39ff14",
    url: "#",
    status: "coming-soon" as const,
    icon: "Trophy",
  },
] as const;

export const NAV_LINKS = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "products", path: "/products" },
  { key: "pricing", path: "/pricing" },
  { key: "contact", path: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { key: "terms", path: "/terms" },
  { key: "privacy", path: "/privacy" },
  { key: "refund", path: "/refund" },
] as const;
