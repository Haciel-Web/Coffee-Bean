import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_PHOTOS } from "../data";
import { X, ZoomIn, ChevronLeft, ChevronRight, Eye } from "lucide-react";

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : (prev ?? 0) - 1));
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-sm mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-6 h-[1px] bg-[#6F4E37]" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold">
              The Sanctuary
            </span>
            <span className="w-6 h-[1px] bg-[#6F4E37]" />
          </div>
          <h2 className="font-serif text-3xl text-zinc-900 font-light tracking-tight uppercase">
            Visual Stillness
          </h2>
        </div>

        {/* Masonry or elegant staggered grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => setLightboxIdx(idx)}
              key={photo.url}
              className="break-inside-avoid relative bg-[#F8F6F2] p-3 border border-[#EAEAEA] shadow-xs group overflow-hidden cursor-pointer"
            >
              <div className="relative w-full overflow-hidden bg-white">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  referrerPolicy="no-referrer"
                  className="w-full object-cover grayscale-[20%] group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-800"
                />

                {/* Hover overlay button */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white border border-[#EAEAEA] text-[#111111] shadow-md flex items-center space-x-2">
                    <ZoomIn className="w-4 h-4 stroke-[1.25]" />
                    <span className="font-sans text-[9px] tracking-widest uppercase font-semibold">Focus Sight</span>
                  </div>
                </div>
              </div>

              {/* Text Tag */}
              <div className="pt-3 flex items-center justify-between border-t border-[#EAEAEA]/40 mt-3 select-none">
                <span className="font-mono text-[9px] tracking-wider text-zinc-400 font-bold">
                  WB0{idx + 1} // CAPTURE
                </span>
                <span className="font-serif text-[11px] text-[#111111] italic font-medium">
                  {photo.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DETAILED LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 bg-[#000000]/95 z-50 flex flex-col items-center justify-center p-4 md:p-12"
          >
            {/* Top Bar with actions */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white select-none z-50">
              <div className="flex flex-col items-start leading-none">
                <span className="font-serif text-sm tracking-widest font-normal uppercase">
                  White Brew Gallery
                </span>
                <span className="font-mono text-[9px] text-[#6F4E37] font-semibold uppercase tracking-widest mt-1">
                  Pristine Coffee Aesthetics
                </span>
              </div>

              <button
                onClick={() => setLightboxIdx(null)}
                className="p-3 bg-white/5 hover:bg-white/10 active:scale-95 text-white transition-all duration-200 border border-white/10"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Main view container */}
            <div className="relative w-full max-w-4xl max-h-[75vh] flex items-center justify-center py-6 select-none">
              {/* Prev button */}
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 z-40 p-3 bg-white/5 hover:bg-white/10 active:scale-95 text-white transition-all duration-200 border border-white/10"
                aria-label="Previous view"
              >
                <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
              </button>

              {/* Dynamic Image Wrapper */}
              <motion.div
                key={lightboxIdx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="relative max-w-full max-h-[70vh] flex flex-col items-center bg-zinc-950 p-2 border border-zinc-900"
              >
                <img
                  src={GALLERY_PHOTOS[lightboxIdx].url}
                  alt={GALLERY_PHOTOS[lightboxIdx].alt}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[60vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Caption panel below picture */}
                <div className="text-center pt-4 w-full bg-zinc-950 border-t border-zinc-900 px-4">
                  <p className="font-serif text-sm text-zinc-100 font-medium italic">
                    "{GALLERY_PHOTOS[lightboxIdx].caption}"
                  </p>
                  <p className="font-sans text-[10px] text-zinc-500 font-light mt-1 max-w-md mx-auto">
                    {GALLERY_PHOTOS[lightboxIdx].alt}
                  </p>
                </div>
              </motion.div>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 z-40 p-3 bg-white/5 hover:bg-white/10 active:scale-95 text-white transition-all duration-200 border border-white/10"
                aria-label="Next view"
              >
                <ChevronRight className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Bottom Indicators panel */}
            <div className="absolute bottom-6 flex space-x-2.5 z-40">
              {GALLERY_PHOTOS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx(idx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === lightboxIdx ? "bg-[#6F4E37] w-6" : "bg-neutral-600 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
