import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Download, Phone, Mail } from "lucide-react";

import { getProductById, getProductsByCategory } from "../data/products";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import AnimatedSection from "../components/AnimatedSection";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button variant="hero" onClick={() => navigate("/products")}>
            View All Products
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <Link 
              to={`/products?category=${product.category}`} 
              className="hover:text-primary transition-colors capitalize"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.title}</span>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden glass-card">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground capitalize">
                    {product.category}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6 w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                  <product.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </AnimatedSection>

            {/* Details */}
            <AnimatedSection direction="right" delay={0.1}>
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {product.title}
                </h1>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {product.fullDescription}
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="font-display text-lg font-semibold mb-4">Key Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1">
                    <Phone className="w-5 h-5" />
                    Request Quote
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Download className="w-5 h-5" />
                    Download Datasheet
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-12 text-center">
              Technical Specifications
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {product.specifications.map((spec, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="glass-card p-6 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-2">{spec.label}</div>
                  <div className="font-display text-lg font-semibold">{spec.value}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-12 text-center">
              Applications
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {product.applications.map((app, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="none">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full glass-card border border-border/50 font-medium"
                >
                  {app}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Need More Information?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team of experts is ready to help you find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="hero" size="lg">
                  <Mail className="w-5 h-5" />
                  Contact Sales
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold">
                  Related Products
                </h2>
                <Link
                  to={`/products?category=${product.category}`}
                  className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <AnimatedSection key={relatedProduct.id} delay={index * 0.1}>
                  <Link
                    to={`/products/${relatedProduct.id}`}
                    className="group glass-card rounded-2xl overflow-hidden card-hover block"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Button */}
      <div className="container mx-auto px-4 lg:px-8 pb-16">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;