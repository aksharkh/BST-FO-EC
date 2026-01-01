import { motion } from "framer-motion";

import { CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";


const highlights = [
  "ISO 9001:2015 Certified Manufacturing",
  "State-of-the-art Testing Facilities",
  "In-house R&D Department",
  "Sustainable Production Practices",
  "Global Distribution Network",
  "Expert Technical Consultation",
];

const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-muted/30 via-transparent to-muted/30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Connecting the World,{" "}
                <span className="text-secondary">One Cable at a Time</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                FiberTech Pro has been at the forefront of cable manufacturing for over 25 years. 
                We specialize in producing high-quality fiber optic and electrical cables that power 
                industries, homes, and data centers across the globe.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our commitment to innovation, quality, and customer satisfaction has made us a trusted 
                partner for major telecommunications companies, construction firms, and technology 
                enterprises worldwide.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </AnimatedSection>

          {/* Right Visual */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl p-8 relative overflow-hidden"
              >
                {/* Decorative Gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="space-y-6">
                    {/* Timeline Items */}
                    {[
                      { year: "1999", event: "Founded in industrial heartland" },
                      { year: "2005", event: "Expanded to international markets" },
                      { year: "2012", event: "Launched fiber optic division" },
                      { year: "2018", event: "Opened R&D innovation center" },
                      { year: "2024", event: "Serving 50+ countries globally" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                          <span className="font-display font-bold text-primary">{item.year}</span>
                        </div>
                        <div className="silver-line flex-1 h-[2px]" />
                        <p className="text-foreground font-medium text-sm flex-1">{item.event}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 border border-secondary/30 animate-pulse-glow"
              >
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;