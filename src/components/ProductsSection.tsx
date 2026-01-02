import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wifi, Zap, Cable } from "lucide-react";
import fiberImage from "../assets/product-fiber.jpg";
import electricalImage from "../assets/product-electrical.jpg";
import hybridImage from "../assets/product-hybrid.jpg";
// import fiberImage from "@/assets/product-fiber.jpg";
// import electricalImage from "@/assets/product-electrical.jpg";
// import hybridImage from "@/assets/product-hybrid.jpg";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const products = [

  {
    id: "electrical",
    title: "Electrical Cables",
    description: "Heavy-duty power cables designed for industrial, commercial, and residential applications with maximum safety standards.",
    image: electricalImage,
    icon: Zap,
    features: ["High conductivity", "Fire resistant", "Durable sheath", "Multi-core options"],
    category: "electrical",
  },
    {
    id: "fiber",
    title: "Fiber Optic Cables",
    description: "Ultra-high-speed data transmission with minimal signal loss. Perfect for telecommunications, data centers, and enterprise networks.",
    image: fiberImage,
    icon: Wifi,
    features: ["Up to 100 Gbps", "Low latency", "EMI resistant", "Long distance"],
    category: "fiber",
  },
  {
    id: "hybrid",
    title: "Hybrid Solutions",
    description: "Combined fiber optic and electrical cables in a single solution for complex infrastructure requirements.",
    image: hybridImage,
    icon: Cable,
    features: ["Dual purpose", "Space saving", "Cost effective", "Easy installation"],
    category: "hybrid",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Cutting-Edge Cable Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From fiber optics to power cables, we deliver premium quality products 
            that meet the highest industry standards.
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 0.1}>
              <Link
                to={`/products?category=${product.category}`}
                className="group glass-card rounded-2xl overflow-hidden card-hover block h-full"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                    <product.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary font-medium">
                    Explore {product.title.split(" ")[0]}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-16">
          <Link to="/products">
            <Button variant="hero" size="lg">
              View Full Catalog
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductsSection;