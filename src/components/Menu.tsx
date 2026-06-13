import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Eye, Plus, Scale, Sparkles, ChevronRight, Check, X } from "lucide-react";
import { MENU_ITEMS } from "../data";
import { MenuCategory, MenuItem, CustomizationOptions } from "../types";
import { useCart } from "../context/CartContext";

const CATEGORIES: { id: MenuCategory | "All"; label: string }[] = [
  { id: "All", label: "All Items" },
  { id: "Espresso", label: "Espresso" },
  { id: "Cappuccino", label: "Cappuccino" },
  { id: "Latte", label: "Latte" },
  { id: "Americano", label: "Americano" },
  { id: "Mocha", label: "Mocha" },
  { id: "Cold Brew", label: "Cold Brew" },
  { id: "Matcha", label: "Matcha" },
  { id: "Pastries", label: "Pastries" }
];

export default function Menu() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | "All">("All");

  // Customizer state
  const [activeCustomizingItem, setActiveCustomizingItem] = useState<MenuItem | null>(null);
  const [customization, setCustomization] = useState<CustomizationOptions>({
    milk: "Oat",
    sweetness: "Regular",
    temperature: "Hot"
  });

  const filteredItems = selectedCategory === "All"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenCustomizer = (item: MenuItem) => {
    setCustomization({
      milk: "Oat",
      sweetness: "Regular",
      temperature: item.category === "Cold Brew" ? "Iced" : "Hot"
    });
    setActiveCustomizingItem(item);
  };

  const handleConfirmAdd = () => {
    if (activeCustomizingItem) {
      addToCart(activeCustomizingItem, customization);
      setActiveCustomizingItem(null);
    }
  };

  return (
    <section id="menu" className="py-24 bg-[#FFFFFF] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-lg mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-6 h-[1px] bg-[#6F4E37]" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold">
              The Menu
            </span>
            <span className="w-6 h-[1px] bg-[#6F4E37]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-light tracking-tight mb-4 uppercase">
            Curated Formulations
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light max-w-sm mx-auto leading-relaxed">
            Every drink is formulated at precise standard extraction metrics and temperature-calibrated before delivery.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="w-full flex justify-center mb-16 overflow-x-auto no-scrollbar py-2 border-b border-[#EAEAEA]/60">
          <div className="flex space-x-2 md:space-x-6 px-4">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`font-sans text-[11px] font-medium tracking-widest uppercase py-3 px-4 border-b-2 transition-all duration-300 relative shrink-0 cursor-pointer ${
                    isActive
                      ? "border-[#6F4E37] text-[#6F4E37]"
                      : "border-transparent text-zinc-400 hover:text-[#111111]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className="bg-[#F8F6F2] p-5 group flex flex-col justify-between border border-[#EAEAEA] shadow-xs relative hover:border-zinc-300 transition-all duration-300"
              >
                {/* Notes Label badge */}
                {item.notes && (
                  <span className="absolute top-4 left-4 z-10 bg-[#FFFFFF] border border-[#EAEAEA] text-[8px] tracking-[0.2em] uppercase font-bold text-[#6F4E37] px-2.5 py-1">
                    {item.notes}
                  </span>
                )}

                {/* Card Top: product image inside clean minimal crop */}
                <div className="w-full aspect-[4/3] overflow-hidden bg-[#FFFFFF] border border-[#EAEAEA]/80 mb-5 relative group/img">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale-[15%] group-hover/img:scale-105 group-hover/img:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark tint */}
                  <div className="absolute inset-0 bg-[#111111]/0 group-hover/img:bg-[#111111]/5 transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="flex-1 flex flex-col items-start justify-between min-h-[140px] mb-4">
                  <div className="w-full">
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="font-serif text-lg text-[#111111] font-semibold tracking-wide">
                        {item.name}
                      </h4>
                      <span className="font-mono text-sm text-[#111111] font-bold">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-zinc-500 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center space-x-2">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 font-bold bg-[#FFFFFF]/80 px-2 py-0.5 border border-[#EAEAEA]">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* CTA Action */}
                <button
                  onClick={() => handleOpenCustomizer(item)}
                  className="w-full py-3 bg-[#FFFFFF] hover:bg-[#111111] text-[#111111] hover:text-[#FFFFFF] border border-[#EAEAEA] font-sans text-[10px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 rounded-none flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Configure & Add</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* QUICK CUSTOMIZATION OVERLAY MODAL */}
      <AnimatePresence>
        {activeCustomizingItem && (
          <>
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCustomizingItem(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 bottom-4 md:bottom-auto md:top-[15%] md:left-1/2 md:-translate-x-1/2 md:max-w-md bg-[#FFFFFF] border border-[#EAEAEA] p-6 z-50 shadow-2xl space-y-6 rounded-none outline-none"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#6F4E37] font-semibold block mb-1">
                    Customizer Sequence
                  </span>
                  <h4 className="font-serif text-lg tracking-wide text-[#111111] uppercase font-semibold">
                    {activeCustomizingItem.name}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveCustomizingItem(null)}
                  className="p-1 -mr-1 text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              {/* Options selectors */}
              <div className="space-y-5">
                {/* 1. Temp selector (only for nonpastries) */}
                {activeCustomizingItem.category !== "Pastries" && (
                  <div className="space-y-2">
                    <span className="block font-sans text-[9px] tracking-widest text-[#111111]/40 uppercase font-bold">
                      Extraction Temperature
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {(["Hot", "Iced"] as const).map((temp) => (
                        <button
                          key={temp}
                          onClick={() => setCustomization({ ...customization, temperature: temp })}
                          className={`py-2 text-[10px] tracking-widest font-sans uppercase transition-all duration-200 border cursor-pointer ${
                            customization.temperature === temp
                              ? "border-[#6F4E37] bg-[#F8F6F2] text-[#6F4E37] font-bold"
                              : "border-[#EAEAEA] bg-transparent text-zinc-500 hover:border-zinc-300"
                          }`}
                        >
                          {temp}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Milk selection (only for nonpastries) */}
                {activeCustomizingItem.category !== "Pastries" && (
                  <div className="space-y-2">
                    <span className="block font-sans text-[9px] tracking-widest text-[#111111]/40 uppercase font-bold">
                      Botanical Blend (Milk Type)
                    </span>
                    <div className="grid grid-cols-4 gap-2">
                      {(["Whole", "Oat", "Almond", "Coconut"] as const).map((milk) => (
                        <button
                          key={milk}
                          onClick={() => setCustomization({ ...customization, milk })}
                          className={`py-2 text-[10px] tracking-widest font-sans uppercase transition-all duration-200 border cursor-pointer ${
                            customization.milk === milk
                              ? "border-[#6F4E37] bg-[#F8F6F2] text-[#6F4E37] font-bold"
                              : "border-[#EAEAEA] bg-transparent text-zinc-500 hover:border-zinc-200"
                          }`}
                        >
                          {milk}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Sweetness selection */}
                {activeCustomizingItem.category !== "Pastries" && (
                  <div className="space-y-2">
                    <span className="block font-sans text-[9px] tracking-widest text-[#111111]/40 uppercase font-bold">
                      Organic Sweetness Index
                    </span>
                    <div className="grid grid-cols-4 gap-2">
                      {(["None", "Less (50%)", "Regular", "Sweet"] as const).map((sw) => (
                        <button
                          key={sw}
                          onClick={() => setCustomization({ ...customization, sweetness: sw })}
                          className={`py-2 px-1 text-[9px] tracking-wider font-sans uppercase transition-all duration-200 border truncate cursor-pointer ${
                            customization.sweetness === sw
                              ? "border-[#6F4E37] bg-[#F8F6F2] text-[#6F4E37] font-bold"
                              : "border-[#EAEAEA] bg-transparent text-zinc-400 hover:border-zinc-200"
                          }`}
                        >
                          {sw.replace(" (50%)", "")}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notice message */}
                <div className="p-3 bg-[#F8F6F2] border border-[#EAEAEA] text-[10px] font-sans text-zinc-400 leading-normal font-light">
                  {activeCustomizingItem.category === "Pastries" ? (
                    <span>All artisanal pastries are baked fresh in our facility using 100% Normandy butter. Cannot modify interior bakers' ratio recipe index.</span>
                  ) : (
                    <span>This creation is extracted at a balanced 93.5°C using calcium-magnesium filtered spring water to lock in natural origin terroir structures.</span>
                  )}
                </div>
              </div>

              {/* Total of single customized item */}
              <div className="flex items-center justify-between pt-4 border-t border-[#EAEAEA]">
                <div className="text-left">
                  <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">CURATED TOTAL</span>
                  <p className="font-mono text-base font-bold text-[#6F4E37]">${activeCustomizingItem.price.toFixed(2)}</p>
                </div>

                <button
                  onClick={handleConfirmAdd}
                  className="px-6 py-3 bg-[#111111] hover:bg-[#6F4E37] text-white font-sans text-[10px] tracking-widest uppercase font-bold transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Confirm Addition</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
