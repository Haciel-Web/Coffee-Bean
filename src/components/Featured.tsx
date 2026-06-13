import { motion } from "motion/react";
import { Star, Award, TrendingUp, Sparkles, Plus } from "lucide-react";
import { MENU_ITEMS } from "../data";
import { useCart } from "../context/CartContext";

export default function Featured() {
  const { addToCart } = useCart();
  const featuredDrinks = MENU_ITEMS.filter((item) => item.isFeatured);

  return (
    <section className="py-24 bg-[#F8F6F2] relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-[#FFFFFF] rounded-full blur-3xl opacity-60 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left max-w-sm">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-6 h-[1px] bg-[#6F4E37]" />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold">
                Curated Stars
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-light tracking-tight uppercase">
              Featured Formulations
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-xs text-left md:text-right">
            <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
              Our signature drinks are highly sought-after, representing years of water chemistry tuning and roast curve alignment.
            </p>
          </div>
        </div>

        {/* Dynamic Card Slider / Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Highlight Banner (Bento style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 bg-[#111111] text-[#FFFFFF] p-8 flex flex-col justify-between border border-zinc-800 relative select-none"
          >
            <div className="space-y-4">
              <div className="inline-flex p-3 bg-zinc-900 border border-zinc-800 text-[#6F4E37] rounded-none">
                <Award className="w-5 h-5 stroke-[1.25]" />
              </div>
              <h3 className="font-serif text-2xl font-light tracking-normal leading-tight uppercase">
                The Standard of <br />
                <span className="font-normal italic text-[#6F4E37]">Pure Sourcing</span>
              </h3>
              <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed max-w-xs">
                We are proud to present only single-origin crops scoring above 88 points on the SCA international grading metrics. Every batch has a distinct profile story which we print on your raw seed bag.
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-6 mt-8">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#6F4E37]">
                <span>100% ARABICA ONLY</span>
                <span>CHEMISTRY LAB</span>
              </div>
            </div>
          </motion.div>

          {/* Cards for featured drinks */}
          {featuredDrinks.slice(0, 2).map((drink, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              key={drink.id}
              className="lg:col-span-4 bg-[#FFFFFF] p-6 border border-[#EAEAEA] flex flex-col justify-between group hover:border-zinc-300 transition-all duration-300 relative"
            >
              <div>
                {/* Image container */}
                <div className="w-full aspect-square overflow-hidden bg-stone-50 border border-[#EAEAEA]/80 mb-6 relative">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Customer favorite badge */}
                  <div className="absolute top-4 right-4 bg-[#111111] text-[#FFFFFF] font-mono text-[8px] tracking-[0.2em] uppercase font-bold py-1.5 px-3">
                    BEST SELLER
                  </div>
                </div>

                {/* Text labels */}
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-serif text-base text-[#111111] font-semibold tracking-wide">
                    {drink.name}
                  </h4>
                  <span className="font-mono text-sm text-[#111111] font-semibold">
                    ${drink.price.toFixed(2)}
                  </span>
                </div>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  {drink.description}
                </p>
              </div>

              {/* Add to Cart Trigger */}
              <button
                onClick={() => addToCart(drink)}
                className="w-full py-3 bg-[#F8F6F2] hover:bg-[#111111] text-[#111111] hover:text-[#FFFFFF] font-sans text-[9px] tracking-widest uppercase font-semibold border border-[#EAEAEA] transition-all duration-300 rounded-none flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Instant Add to Bag</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
