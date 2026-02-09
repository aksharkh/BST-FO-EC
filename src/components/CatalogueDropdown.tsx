import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown } from "lucide-react";

interface CatalogueDropdownProps {
  onSelect?: (option: "polycab" | "geek") => void;
}

export const CatalogueDropdown = ({ onSelect }: CatalogueDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      id: "polycab",
      label: "Polycab Cables",
      icon: FileText,
      color: "text-blue-500",
    },
    {
      id: "geek",
      label: "Geekore Cables",
      icon: FileText,
      color: "text-purple-500",
    },
  ];

  const handleOptionClick = (option: "polycab" | "geek") => {
    setIsOpen(false);
    
    if (option === "polycab") {
      window.open("/BlueSantos-catalogue.pdf", "_blank");
    } else if (option === "geek") {
      window.open("https://gkayindia.com/", "_blank");
    }
    
    onSelect?.(option);
  };

  return (
    <div className="relative inline-block w-full sm:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-medium transition-all flex items-center justify-center gap-2"
      >
        <FileText className="w-5 h-5" />
        Products Catalogue
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 sm:right-auto mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50 min-w-max"
            >
              {options.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleOptionClick(option.id as "polycab" | "geek")}
                    className="w-full px-6 py-3 flex items-center gap-3 hover:bg-muted transition-colors text-left border-b border-border/50 last:border-b-0"
                  >
                    <Icon className={`w-5 h-5 ${option.color}`} />
                    <span className="font-medium">{option.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CatalogueDropdown;
