import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Award, Clock, Headphones, Truck, Leaf } from "lucide-react";
import AnimatedSection from "./AnimatedSection";


const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "All products meet international safety and quality standards including ISO, IEC, and UL certifications.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "Our manufacturing facilities are certified with the highest industry standards for quality assurance.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient logistics network ensuring quick delivery to your project site anywhere in the world.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated technical support team available round the clock to assist with any inquiries.",
  },
  {
    icon: Truck,
    title: "Global Shipping",
    description: "International shipping capabilities with proper handling and packaging for safe transit.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable manufacturing practices with recyclable materials and reduced carbon footprint.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Excellence in Every Wire
          </h2>
          <p className="text-muted-foreground text-lg">
            With over 25 years of experience, we've built a reputation for delivering 
            exceptional cable solutions backed by unmatched service.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group p-8 rounded-2xl glass-card"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-secondary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <AnimatedSection delay={0.5}>
          <div className="mt-20 p-8 rounded-2xl glass-card border border-secondary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10M+", label: "Meters of Cable Produced" },
                { value: "1000+", label: "Satisfied Clients" },
                { value: "15+", label: "Industry Awards" },
                { value: "100%", label: "Quality Tested" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturesSection;