import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import MyzanProductPage from "../pages/MyzanProductPage";
import RawasiProductPage from "../pages/RawasiProductPage";
import TactiqProductPage from "../pages/TactiqProductPage";
import PricingOverviewPage from "../pages/PricingOverviewPage";
import ContactPage from "../pages/ContactPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import RefundPage from "../pages/RefundPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/myzan" element={<MyzanProductPage />} />
          <Route path="products/rawasi" element={<RawasiProductPage />} />
          <Route path="products/tactiq" element={<TactiqProductPage />} />
          <Route path="pricing" element={<PricingOverviewPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="refund" element={<RefundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
