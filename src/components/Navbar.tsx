import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Menu, X, Cable } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = isHomePage
    ? [
        { name: "Home", href: "#home" },
        { name: "Products", href: "#products" },
        { name: "About", href: "#about" },
        { name: "Features", href: "#features" },
        { name: "Contact", href: "#contact" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/#about" },
        { name: "Contact", href: "/#contact" },
      ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#") && isHomePage) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (isHomePage) {
      const element = document.getElementById("contact");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-border/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center animate-pulse-glow">
                <Cable className="w-6 h-6 text-primary-foreground" />
              </div>
            </motion.div>
            <span className="font-display text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
              FiberTech Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 ">
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="default" onClick={scrollToContact}>
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 border-t border-border/50">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.href.startsWith("#") ? (
                        <button
                          onClick={() => handleNavClick(link.href)}
                          className="text-foreground hover:text-secondary font-medium py-2 transition-colors block w-full text-left"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="text-foreground hover:text-secondary font-medium py-2 transition-colors block"
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <Button
                      variant="hero"
                      size="lg"
                      className="mt-4 w-full"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToContact();
                      }}
                    >
                      Get Quote
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;