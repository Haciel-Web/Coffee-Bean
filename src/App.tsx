import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, ArrowUp } from "lucide-react";
import { CartProvider, useCart } from "./context/CartContext";

// Modular Components
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Featured from "./components/Featured";
import PremiumSections from "./components/PremiumSections";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

function MainAppContent() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { cartCount, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      // Show floating back-to-top and floating cart after scrolling partial hero
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#111111] antialiased selection:bg-[#6F4E37]/15">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen flex flex-col justify-between"
          >
            {/* Header Sticky Navigation */}
            <Navbar />

            {/* Main Section Gates */}
            <main className="flex-1">
              <Hero />
              <About />
              <Menu />
              <Featured />
              <Gallery />
              <PremiumSections />
              <Testimonials />
              <Contact />
            </main>

            {/* Footer and Legal Closures */}
            <Footer />

            {/* Slidable Shopping Cart Drawer Overlay */}
            <CartDrawer />

            {/* FLOATING AUXILIARY ACTIONS (Bottom Right) */}
            <div className="fixed bottom-6 right-6 z-30 flex flex-col items-center space-y-3">
              {/* Floating Back to Top */}
              <AnimatePresence>
                {showScrollTop && (
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    onClick={scrollToTop}
                    className="p-3 bg-[#FFFFFF] hover:bg-[#111111] text-[#111111] hover:text-[#FFFFFF] border border-[#EAEAEA] shadow-md transition-all duration-300 rounded-none cursor-pointer"
                    aria-label="Scroll back to top"
                  >
                    <ArrowUp className="w-4 h-4 stroke-[1.5]" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Floating Cart Launcher (only shown past hero) */}
              <AnimatePresence>
                {showScrollTop && (
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    onClick={() => setIsOpen(true)}
                    className="p-4 bg-[#6F4E37] text-white shadow-xl hover:bg-[#111111] transition-all duration-300 rounded-none relative cursor-pointer"
                    aria-label="Open your bag"
                  >
                    <ShoppingBag className="w-4.5 h-4.5 stroke-[1.5]" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-[#111111] text-white rounded-full font-mono text-[8.5px] font-bold flex items-center justify-center px-1">
                        {cartCount}
                      </span>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
}
