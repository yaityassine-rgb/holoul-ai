import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo.webp" alt="Holoul AI" className="h-9 w-9 rounded-lg" />
            <span className="text-lg font-bold text-white">
              Holoul <span className="text-brand">AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
              return (
                <Link
                  key={link.key}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand bg-brand/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-dark-border">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
              return (
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand bg-brand/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
