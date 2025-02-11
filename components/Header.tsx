import React from "react";
import { motion, MotionValue } from "framer-motion";
import { Leaf, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  headerBackground: MotionValue<string>;
  headerShadow: MotionValue<string>;
  scrollToSection: (href: string) => void;
}

const navItems = [
  { name: "Benefits", href: "#benefits" },
  { name: "Ingredients", href: "#ingredients" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "#blog" },
];

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  headerBackground,
  headerShadow,
  scrollToSection,
}) => {
  const handleNavClick = (href: string) => {
    scrollToSection(href);
    // Close mobile menu after selecting an item
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed w-full z-50 transition-colors"
      style={{
        backgroundColor: headerBackground.get(),
        boxShadow: headerShadow.get(),
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-serif">GrowNatural</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-primary transition-colors text-sm tracking-wide"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </button>
            ))}
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 bg-white"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-600 hover:text-primary transition-colors px-4 py-2 text-sm tracking-wide"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default React.memo(Header);
