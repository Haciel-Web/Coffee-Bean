import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      resetTimeout();
    };
  }, [activeIdx, isHovered]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#F8F6F2] relative overflow-hidden">
      {/* Aesthetic corner guidelines background */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-[#EAEAEA]" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-[#EAEAEA]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Title */}
        <div className="text-center max-w-sm mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-6 h-[1px] bg-[#6F4E37]" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold">
              Client Logs
            </span>
            <span className="w-6 h-[1px] bg-[#6F4E37]" />
          </div>
          <h2 className="font-serif text-3xl text-zinc-900 font-light tracking-tight uppercase">
            Guest Testimonies
          </h2>
          <p className="font-sans text-xs text-zinc-400 mt-2 font-light">
            Statements shared by our design-district regulars and global specialty travelers.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-[#FFFFFF] border border-[#EAEAEA] shadow-xs p-8 md:p-14 select-none max-w-3xl mx-auto"
        >
          {/* Quote Mark */}
          <div className="text-[#6F4E37]/15 absolute top-6 left-6 md:top-10 md:left-10">
            <Quote className="w-12 h-12 stroke-[1]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex justify-center space-x-1 text-[#6F4E37]">
                {Array.from({ length: TESTIMONIALS[activeIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-[1.25]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-base md:text-lg leading-relaxed text-zinc-700 italic font-medium max-w-xl mx-auto">
                "{TESTIMONIALS[activeIdx].review}"
              </blockquote>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#F8F6F2] inline-block">
                <span className="font-sans text-xs font-semibold text-[#111111] uppercase tracking-wider block">
                  {TESTIMONIALS[activeIdx].name}
                </span>
                <span className="font-sans text-[10px] text-zinc-400 font-light tracking-wide mt-1 block">
                  {TESTIMONIALS[activeIdx].role} — {TESTIMONIALS[activeIdx].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-[#6F4E37] text-[#111111] hover:text-white border border-[#EAEAEA] shadow-sm transition-all duration-300 rounded-none cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-6">
            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-[#6F4E37] text-[#111111] hover:text-white border border-[#EAEAEA] shadow-sm transition-all duration-300 rounded-none cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Bullet Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIdx ? "bg-[#6F4E37] w-6" : "bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Show review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
