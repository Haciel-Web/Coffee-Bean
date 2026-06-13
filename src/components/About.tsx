import { motion } from "motion/react";
import { TIMELINE } from "../data";
import { Calendar, Compass, Feather, Sparkles } from "lucide-react";
import coffeeInterior from "../assets/images/coffee_interior_1781348548747.jpg";

export default function About() {
  const values = [
    {
      icon: Feather,
      title: "Pristine Simplicity",
      description: "Stripping away syrup-heavy modifications to let the authentic volcanic soil notes, washing methods, and light roasting speak truthfully."
    },
    {
      icon: Compass,
      title: "Direct Traceability",
      description: "Investing directly into family farms in high-altitude micro-regions. Paying over 45% above Fair Trade baselines for absolute farm quality."
    },
    {
      icon: Sparkles,
      title: "Zen Architectural Ritual",
      description: "Creating a quiet, acoustically dampened environment defined by raw plaster, light wood, and curated ambient sounds."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F8F6F2] relative overflow-hidden">
      {/* Decorative vertical branding marker */}
      <div className="absolute right-6 top-1/4 -translate-y-1/2 select-none pointer-events-none hidden xl:block">
        <span className="font-mono text-[9px] tracking-[0.5em] text-[#111111]/30 uppercase writing-mode-vertical uppercase [writing-mode:vertical-lr]">
          WHITE BREW COFFEE // PURITY OF PROCESS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          {/* Left Col: Photo Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative p-3 bg-[#FFFFFF] border border-[#EAEAEA] shadow-sm aspect-[4/5] overflow-hidden"
            >
              <img
                src={coffeeInterior}
                alt="White Brew flagship café featuring light wood Scandinavian architecture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-800"
              />
              <div className="absolute top-6 left-6 bg-[#FFFFFF]/90 backdrop-blur-sm px-3 py-2 text-center text-[#111111] font-mono text-[9px] tracking-widest border border-[#EAEAEA]">
                OUR SANCTUARY
              </div>
            </motion.div>
          </div>

          {/* Right Col: Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-6 h-[1px] bg-[#6F4E37]" />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold">
                Purity & Heritage
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-light tracking-tight mb-8">
              Purity of bean, <br />
              <span className="font-normal italic text-[#6F4E37]">stillness of mind.</span>
            </h2>

            <div className="font-sans text-sm text-zinc-500 space-y-6 leading-relaxed font-light max-w-xl">
              <p>
                White Brew Coffee was born in 2023 with a rebellious statement against the cluttered, over-roasted, noisy espresso stations of the world. We asked ourselves: what happens if you strip away everything that is unneeded?
              </p>
              <p>
                The result is a coffee shop inspired by Japanese and Scandinavian minimalist design. In our store, we have no flashy colored posters, neon signs, or sugary artificial additives. We let the coffee express itself through pristine single-origin roasts, roasted in our boutique glass-drum roaster and extracted slowly over customized mineral-stabilized water.
              </p>
              <p>
                From raw organic beans tracebacked to family-owned micro-lots in high valleys, our team of trained coffee craftsmen guides you to a state of calm focus and absolute flavor clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="bg-[#FFFFFF] p-8 border border-[#EAEAEA] flex flex-col items-start relative group"
              >
                <div className="p-3 bg-[#F8F6F2] text-[#6F4E37] mb-6 group-hover:bg-[#6F4E37] group-hover:text-[#FFFFFF] transition-colors duration-300">
                  <Icon className="w-5 h-5 stroke-[1.25]" />
                </div>
                <h3 className="font-serif text-lg text-[#111111] font-medium mb-4">
                  {v.title}
                </h3>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  {v.description}
                </p>
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#6F4E37] w-0 group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="border-t border-[#EAEAEA] pt-20">
          <div className="text-center max-w-sm mx-auto mb-16">
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold mb-2">
              Our Journey
            </p>
            <h3 className="font-serif text-2xl text-[#111111] font-extralight tracking-tight uppercase">
              The White Brew Timeline
            </h3>
            <div className="w-12 h-[1px] bg-[#6F4E37] mx-auto mt-4" />
          </div>

          <div className="relative max-w-4xl mx-auto py-4">
            {/* Horizontal or Vertical Line based on screen */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#EAEAEA]" />

            <div className="space-y-12">
              {TIMELINE.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`relative flex flex-col md:flex-row ${
                      isEven ? "md:flex-row-reverse" : ""
                    } items-start md:items-center`}
                  >
                    {/* Circle Pin */}
                    <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#6F4E37] border-2 border-[#FFFFFF] z-10" />

                    {/* Outer Box */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <div
                        className={`bg-[#FFFFFF] p-6 border border-[#EAEAEA] relative ${
                          isEven ? "text-left" : "text-left md:text-right"
                        }`}
                      >
                        <span className="font-mono text-sm font-semibold tracking-widest text-[#6F4E37] bg-[#F8F6F2] px-3 py-1 rounded-none inline-block mb-3">
                          {item.year}
                        </span>
                        <h4 className="font-serif text-base text-[#111111] font-medium mb-2">
                          {item.title}
                        </h4>
                        <p className="font-sans text-xs text-zinc-500 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty placeholder column for MD layout balance */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
