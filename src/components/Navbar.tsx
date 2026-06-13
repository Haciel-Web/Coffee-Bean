import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#origins" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const { cartCount, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple intersection observer approximation for active navigation highlights
      const scrollPosition = window.scrollY + 120;
      for (const link of [...NAV_LINKS].reverse()) {
        const id = link.href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FFFFFF]/85 backdrop-blur-md border-b border-[#EAEAEA]/80 py-4 shadow-sm"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Branding */}
        <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex flex-col items-start select-none group">
          <span className="font-serif text-xl tracking-[0.25em] text-[#111111] uppercase font-light leading-none transition-colors duration-300 group-hover:text-[#6F4E37]">
            White Brew
          </span>
          <span className="font-sans text-[8px] tracking-[0.45em] text-[#6F4E37]/90 uppercase font-medium mt-1">
            Specialty Coffee
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative font-sans text-xs tracking-widest text-[#111111] uppercase hover:text-[#6F4E37] transition-colors duration-300 py-2 group font-medium"
              >
                {link.label}
                {/* Active Indicator dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicatorDot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#6F4E37] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Hover line */}
                {!isActive && (
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#6F4E37] transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          {/* Cart Button with Count Badge */}
          <button
            onClick={() => setIsOpen(true)}
            id="nav-cart-btn"
            className="group relative p-2 text-[#111111] hover:text-[#6F4E37] transition-colors duration-300"
            aria-label="View shopping bag"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.25]" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-[#6F4E37] text-[#FFFFFF] font-mono text-[9px] rounded-full flex items-center justify-center font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#111111] hover:text-[#6F4E37] transition-colors duration-300"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.25]" /> : <MenuIcon className="w-6 h-6 stroke-[1.25]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[68px] left-0 right-0 bg-[#FFFFFF] border-b border-[#EAEAEA] shadow-lg z-30 lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {NAV_LINKS.map((link, idx) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`font-sans text-sm tracking-widest uppercase font-medium py-2 transition-colors ${
                      isActive ? "text-[#6F4E37]" : "text-[#111111] hover:text-[#6F4E37]"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
