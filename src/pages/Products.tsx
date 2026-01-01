import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Filter, Search, X } from "lucide-react";





import { products, categories,  type ProductCategory } from "../data/products";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get("category") as ProductCategory | "all") || "all";
  
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products;
    
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.features.some((f) => f.toLowerCase().includes(query))
      );
    }
    
    return result;
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category: ProductCategory | "all") => {
    setSelectedCategory(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Product Catalog
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Premium Cable Solutions
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover our comprehensive range of fiber optic, electrical, and hybrid cables 
              designed for superior performance and reliability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Bar */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col lg:flex-row gap-4 mb-12">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card border-border/50 focus:border-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Mobile Filter Toggle */}
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>

              {/* Category Filters - Desktop */}
              <div className="hidden lg:flex items-center gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "hero" : "outline"}
                    onClick={() => handleCategoryChange(cat.id as ProductCategory | "all")}
                    className="gap-2"
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Category Filters - Mobile */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="lg:hidden mb-8 overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 pb-4">
                    {categories.map((cat) => (
                      <Button
                        key={cat.id}
                        variant={selectedCategory === cat.id ? "hero" : "outline"}
                        size="sm"
                        onClick={() => {
                          handleCategoryChange(cat.id as ProductCategory | "all");
                          setShowFilters(false);
                        }}
                        className="gap-2"
                      >
                        <cat.icon className="w-4 h-4" />
                        {cat.name}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatedSection>

          {/* Results Count */}
          <div className="mb-8 text-muted-foreground">
            Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
            {selectedCategory !== "all" && (
              <span> in <span className="text-secondary">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
            )}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="group glass-card rounded-2xl overflow-hidden card-hover block h-full"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                        <product.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/90 text-secondary-foreground capitalize">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.slice(0, 3).map((feature, fIndex) => (
                          <span
                            key={fIndex}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-primary font-medium">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">
                No products found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  handleCategoryChange("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;