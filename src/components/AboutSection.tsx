import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const highlights = [
  "Power & Energy Trading Solutions",
  "Optical & Fiber Product Supply",
  "Industrial & Allied Materials",
  "Reliable Global Sourcing Network",
  "Quality-Assured Products",
  "Technical & Commercial Support",
];

const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-transparent">
      {/* Background - Inherit */}
      <div className="absolute inset-0 bg-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <AnimatedSection direction="left">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Powering Progress Through{" "}
                <span className="text-secondary">Smart Trading Solutions</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Trading division of <strong>Bluesantos</strong>, established
                five years ago to deliver reliable and high-quality trading solutions across
                power, optical, and allied industries.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                We specialize in sourcing and supplying essential products that support
                infrastructure, energy, and connectivity projects. With a strong focus on
                quality, transparency, and long-term partnerships, we serve clients across
                diverse markets and sectors.
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
                
                <div className="relative z-10 space-y-6">
                  {[
                    { year: "2015", event: "Our Roots: Began empowering organizations with ISO 9001, ISO 27001, and CMMI implementation, auditing, and certification, driven by high standards." },
                    { year: "2022", event: "Worldwide Growth: Entered Singapore, broadening capabilities to deliver end-to-end GRC solutions." },
                    { year: "2021", event: "Expanded our power and energy trading portfolio by entering the cable segment, strengthening our role in power transmission and infrastructure development." },
                    { year: "2025", event: "Global Expansion: Established a presence in the United States, strengthening global reach and services." },
                    { year: "Now", event: "Ongoing Pledge: Continue to deliver honest, high-quality solutions that empower clients, people, and communities worldwide."}
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
                        <span className="font-display font-bold text-primary">
                          {item.year}
                        </span>
                      </div>
                      <div className="silver-line w-36 h-[2px]" />
                      <p className="text-foreground font-medium text-sm flex-1">
                        {item.event}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-16 -left-6 glass-card rounded-2xl p-6 border border-secondary/30 animate-pulse-glow"
              >
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-primary mb-1">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years of Excellence
                  </div>
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
