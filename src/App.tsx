import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Certifications from "./pages/Certifications";
import NotFound from "./pages/NotFound";
import { useScrollToSection } from "./lib/navigation";

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // If there's a section parameter, don't scroll to top
    // Let useScrollToSection handle it
    const params = new URLSearchParams(search);
    const sectionId = params.get("section");

    if (!sectionId) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}

function ScrollToSection() {
  useScrollToSection();
  return null;
}

const App = () => (
  <>
    <Toaster position="top-right" richColors />
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
