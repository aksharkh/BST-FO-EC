import { motion } from "framer-motion";
import { Download, FileText, Award, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import AnimatedSection from "../components/AnimatedSection";
import Footer from "../components/Footer";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);
  const certifications = [
    {
      id: 1,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description:
        "ISO 9001:2015 certification demonstrates our commitment to maintaining the highest standards of quality management and customer satisfaction across all our operations.",
      file: "/BST-ISO-9001-2015.pdf",
      icon: Award,
      color: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-500/20",
    },
    {
      id: 2,
      title: "ISO/IEC 27001",
      subtitle: "Information Security Management",
      description:
        "ISO/IEC 27001 certification ensures we maintain the highest standards of information security management. This certification validates our commitment to protecting data and maintaining secure operations.",
      file: "/BST-ISO-IEC-27001.pdf",
      icon: Award,
      color: "from-purple-500/10 to-purple-600/10",
      borderColor: "border-purple-500/20",
    },
  ];

  const handleDownload = (filePath: string) => {
    window.open(filePath, "_blank");
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
              Certifications
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industry Certifications & Compliance
            </h1>
            <p className="text-muted-foreground text-lg">
              Blue Santos Technologies is committed to maintaining the highest standards of quality,
              security, and operational excellence. Our certifications reflect our dedication to excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 lg:py-36">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <AnimatedSection key={cert.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    onMouseEnter={() => setHoveredCert(cert.id.toString())}
                    onMouseLeave={() => setHoveredCert(null)}
                    onClick={() => setSelectedCert(cert.file)}
                    className={`glass-card rounded-2xl p-8 border-2 ${cert.borderColor} bg-gradient-to-br ${cert.color} h-full flex flex-col cursor-pointer transition-all relative group`}
                  >
                    {/* Preview on Hover */}
                    {hoveredCert === cert.id.toString() && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-black/80 rounded-2xl flex items-center justify-center z-20 backdrop-blur-sm"
                      >
                        <div className="text-center text-white">
                          <FileText className="w-12 h-12 mx-auto mb-3 opacity-80" />
                          <p className="font-semibold mb-2">Click to view</p>
                          <p className="text-sm text-gray-300">PDF Certificate</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl font-bold mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-secondary font-semibold text-sm mb-4">
                      {cert.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Download Button */}
                    {/* <Button
                      variant="hero"
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(cert.file);
                      }}
                    >
                      <Download className="w-4 h-4" />
                      Download Certificate
                    </Button> */}
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-2xl p-6 w-full h-full max-h-screen max-w-7xl flex flex-col relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden rounded-lg bg-muted min-h-0">
              <iframe
                src={`${selectedCert}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title="Certificate PDF"
              />
            </div>

            {/* Download Button */}
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Certificate Preview
              </p>
              <Button
                variant="hero"
                onClick={() => handleDownload(selectedCert)}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Why Certifications Matter */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Our Certifications Mean
            </h2>
            <p className="text-muted-foreground text-lg">
              These certifications validate our commitment to quality, security, and continuous improvement.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Quality Assurance",
                description:
                  "Our ISO 9001:2015 certification ensures consistent quality in every product and service we deliver. We maintain rigorous quality standards across all operations.",
                icon: "✓",
              },
              {
                title: "Data Security",
                description:
                  "ISO/IEC 27001 certification demonstrates our commitment to protecting sensitive information and maintaining the highest standards of data security.",
                icon: "🔒",
              },
              {
                title: "Customer Trust",
                description:
                  "Our certifications provide assurance to customers that we operate with transparency and adhere to international best practices.",
                icon: "🤝",
              },
              {
                title: "Continuous Improvement",
                description:
                  "These certifications require us to continuously monitor, evaluate, and improve our processes to maintain compliance and excellence.",
                icon: "📈",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-xl p-6 border border-border/50"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-display text-lg font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
