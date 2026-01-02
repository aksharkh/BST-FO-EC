import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cable, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "../assets/__Blue_Santos_Icon.png"

const Footer = () => {
  const footerLinks = {
    Products: [
      { name: "Fiber Optic Cables", href: "/products?category=fiber" },
      { name: "Electrical Cables", href: "/products?category=electrical" },
      { name: "Hybrid Solutions", href: "/products?category=hybrid" },
      { name: "Full Catalog", href: "/products" },
    ],
    Company: [
      { name: "About Us", href: "/#about" },
      { name: "Our Team", href: "/#about" },
      { name: "Careers", href: "/#contact" },
      { name: "Contact", href: "/#contact" },
    ],
    Resources: [
      { name: "Technical Specs", href: "/products" },
      { name: "Case Studies", href: "/#features" },
      { name: "FAQ", href: "/#features" },
      { name: "Support", href: "/#contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center"
              >
                <img src={logo} alt="Blue Santos Technologies Logo" className="w-10 h-10" />
              </motion.div>
            <span className="font-Noto Sans Japanese text-xl leading-tight font-bold text-foreground group-hover:text-secondary transition-colors">
                <span className="block">BLUE SANTOS</span>
                <span className="block text-xl tracking-wide">
                TECHNOLOGIES
                </span>
            </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Leading manufacturer of high-performance fiber optic and electrical cables. 
              Powering innovation worldwide since 1999.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  onClick={(e) => e.preventDefault()}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Blue Santos technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={(e) => e.preventDefault()} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={(e) => e.preventDefault()} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button onClick={(e) => e.preventDefault()} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;