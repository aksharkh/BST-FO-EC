import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProductsSection from "../components/ProductsSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
