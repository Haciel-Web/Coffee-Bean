import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import coffeeHero from "../assets/images/coffee_hero_1781348519300.jpg";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center bg-[#FFFFFF] pt-24 pb-16 overflow-hidden"
    >
      {/* Background Decor subtle gradient / dots */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#F8F6F2] opacity-65 blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-[#EAEAEA]/30 opacity-70 blur-3xl" />
        {/* Fine background dots */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(#111111 1px, transparent 1px)`,
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Col: Text */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="w-6 h-[1px] bg-[#6F4E37]" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold">
              Elegance In Every Drop
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl xl:text-7xl font-extralight tracking-tight text-[#111111] leading-[1.1] mb-6"
          >
            Crafted Coffee, <br />
            <span className="font-normal italic text-[#6F4E37]">Pure Experience</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans text-sm md:text-base text-zinc-500 max-w-lg mb-10 leading-relaxed font-light"
          >
            Handcrafted specialty coffee roasted in micrometric batches. Savored in an architectural sanctuary of silence, raw stone, and pure white aesthetics.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() => handleScrollToSection("menu")}
              className="px-8 py-4 bg-[#111111] text-[#FFFFFF] font-sans text-[10px] tracking-[0.3em] uppercase font-semibold hover:bg-[#6F4E37] transition-all duration-300 rounded-none shadow-md hover:shadow-lg relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">Order Now</span>
              <span className="absolute inset-0 bg-[#6F4E37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
            </button>

            <button
              onClick={() => handleScrollToSection("menu")}
              className="px-8 py-4 border border-[#111111]/30 text-[#111111] font-sans text-[10px] tracking-[0.3em] uppercase font-semibold hover:border-[#111111] hover:bg-[#F8F6F2]/40 transition-colors duration-300 rounded-none cursor-pointer"
            >
              View Menu
            </button>
          </motion.div>
        </div>

        {/* Right Col: Pure visual photo inside clean framing */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative w-full max-w-sm md:max-w-md aspect-[4/5] bg-[#F8F6F2] p-4 flex items-center justify-center shadow-sm border border-[#EAEAEA]"
          >
            {/* Elegant outer layout guidelines */}
            <div className="absolute top-2 left-2 text-[9px] font-mono tracking-widest text-[#111111]/25 select-none font-medium">
              W. B. COFFEE //
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono tracking-widest text-[#111111]/25 select-none font-medium">
              EST. 2023
            </div>

            {/* Main Visual Image container */}
            <div className="relative w-full h-full overflow-hidden bg-[#FFFFFF] border border-[#EAEAEA]/60 group">
              <motion.img
                src={coffeeHero}
                alt="Signature White Brew Specialty Coffee Latte cup with micro-foam art"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[30%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
                initial={{ filter: "blur(4px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
              />

              {/* Float aesthetic overlay badge */}
              <div className="absolute bottom-6 left-6 bg-[#FFFFFF] px-4 py-3 border border-[#EAEAEA] backdrop-blur-sm shadow-sm select-none">
                <p className="font-serif text-sm tracking-tight text-[#111111] font-medium italic">
                  "Perfect extraction"
                </p>
                <div className="w-6 h-[1px] bg-[#6F4E37] my-2" />
                <p className="font-sans text-[8px] tracking-[0.2em] font-medium text-[#6F4E37] uppercase">
                  9 bar / 93.5°C
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center select-none cursor-pointer">
        <button
          onClick={() => handleScrollToSection("about")}
          className="flex flex-col items-center hover:opacity-80 transition-opacity"
          aria-label="Scroll down to about us"
        >
          <motion.p
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#6F4E37]/70 font-semibold mb-2"
          >
            Scroll
          </motion.p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-[#6F4E37] stroke-[1]" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
