import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BEAN_ORIGINS, CHOOSE_US_REASONS, BREWING_STEPS } from "../data";
import { MapPin, Sparkles, Compass, Bean, Eye, Hourglass, HelpCircle, Check, ArrowRight, Mail } from "lucide-react";
import coffeePour from "../assets/images/coffee_pour_1781348533827.jpg";

export default function PremiumSections() {
  const [newsEmail, setNewsEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setSubscribed(true);
    setNewsEmail("");
  };

  return (
    <div className="bg-[#FFFFFF] relative">
      {/* 1. WHY CHOOSE US */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#EAEAEA]/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-sm mx-auto mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="w-6 h-[1px] bg-[#6F4E37]" />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold">
                Our Values
              </span>
              <span className="w-6 h-[1px] bg-[#6F4E37]" />
            </div>
            <h2 className="font-serif text-3xl text-[#111111] font-light tracking-tight uppercase">
              The Architecture of Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {CHOOSE_US_REASONS.map((reason, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  key={reason.title}
                  className="flex flex-col items-center text-center p-4 relative group"
                >
                  <div className="w-12 h-12 rounded-none bg-[#F8F6F2] flex items-center justify-center text-[#6F4E37] mb-6 border border-[#EAEAEA] group-hover:bg-[#111111] group-hover:text-white transition-all duration-300">
                    {reason.icon === "Bean" && <Bean className="w-5 h-5 stroke-[1.25]" />}
                    {reason.icon === "Compass" && <Compass className="w-5 h-5 stroke-[1.25]" />}
                    {reason.icon === "Sparkles" && <Sparkles className="w-5 h-5 stroke-[1.25]" />}
                  </div>
                  <h3 className="font-serif text-base text-[#111111] font-semibold tracking-wide mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed max-w-xs">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. COFFEE BEAN ORIGINS (PANAMA GESHA, ETHIOPIA, COLOMBIA) */}
      <section id="origins" className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-sm mx-auto mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="w-6 h-[1px] bg-[#6F4E37]" />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold">
                Single Origins
              </span>
              <span className="w-6 h-[1px] bg-[#6F4E37]" />
            </div>
            <h2 className="font-serif text-3xl text-[#111111] font-light tracking-tight uppercase">
              Terroir Micro-Lots
            </h2>
            <p className="font-sans text-xs text-zinc-400 mt-2 font-light">
              Cultivated in isolated volcanic micro-climates, ethically traded with family farms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BEAN_ORIGINS.map((origin, idx) => {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  key={origin.region}
                  className="bg-[#FFFFFF] border border-[#EAEAEA] p-8 flex flex-col justify-between group hover:border-zinc-300 transition-all duration-300 shadow-xs relative"
                >
                  <div>
                    {/* Top flag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
                        <span className="font-sans text-[9px] tracking-widest uppercase font-bold text-zinc-500">
                          {origin.country}
                        </span>
                      </div>
                      <span className="font-mono text-[8px] tracking-widest text-[#6F4E37] font-extrabold bg-[#F8F6F2] py-1 px-2.5">
                        {origin.elevation}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-light text-[#111111] leading-tight mb-2 uppercase">
                      {origin.region}
                    </h3>
                    <div className="w-8 h-[1px] bg-[#6F4E37] mb-6" />

                    {/* Tasting notes */}
                    <div className="space-y-4 mb-8">
                      <div>
                        <span className="block text-[8px] font-sans tracking-widest text-zinc-300 uppercase font-bold mb-1">
                          Tasting Profile notes
                        </span>
                        <p className="font-serif text-sm italic text-[#111111] font-medium">
                          "{origin.notes}"
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#EAEAEA]">
                        <div>
                          <span className="block text-[8px] font-sans tracking-widest text-zinc-300 uppercase font-bold mb-1">
                            Process
                          </span>
                          <span className="font-sans text-xs text-zinc-500 font-light uppercase">
                            {origin.process}
                          </span>
                        </div>
                        <div>
                          <span className="block text-[8px] font-sans tracking-widest text-zinc-300 uppercase font-bold mb-1">
                            Roast Index
                          </span>
                          <span className="font-sans text-xs text-zinc-500 font-light uppercase">
                            {origin.roastLevel} Roast
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="font-mono text-[8.5px] uppercase tracking-wider text-zinc-400 select-none border-t border-[#EAEAEA] pt-4 flex justify-between">
                    <span>SCA GRADE: 88.5+</span>
                    <span>100% TRACEABLE</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BREWING PROCESS (TIMED CALIBRATION STEPS) */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Interactive calibration timeline */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-6 h-[1px] bg-[#6F4E37]" />
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold">
                  Slo-Brew Mechanics
                </span>
              </div>

              <h2 className="font-serif text-3xl text-[#111111] font-light tracking-tight mb-4 uppercase">
                The Calibrated V60 Process
              </h2>
              <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed max-w-sm mb-12">
                We craft each manual hand-brew inside clear double-wall glass carafes dynamically monitoring water-hardness and water-temperature ratios.
              </p>

              {/* Steps container */}
              <div className="space-y-4 w-full max-w-lg">
                {BREWING_STEPS.map((step) => {
                  const isActive = activeStep === step.step;
                  return (
                    <div
                      key={step.step}
                      onClick={() => setActiveStep(step.step)}
                      className={`p-5 border transition-all duration-300 flex items-start space-x-4 cursor-pointer relative overflow-hidden ${
                        isActive
                          ? "border-[#6F4E37] bg-[#F8F6F2]/30 pl-7"
                          : "border-[#EAEAEA] bg-transparent hover:border-zinc-300"
                      }`}
                    >
                      {/* Active green/gold strip */}
                      {isActive && (
                        <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#6F4E37]" />
                      )}

                      <span className="font-mono text-sm font-semibold text-[#6F4E37] bg-[#F8F6F2] w-7 h-7 flex items-center justify-center border border-[#EAEAEA]">
                        0{step.step}
                      </span>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="font-serif text-sm font-semibold text-[#111111]">
                            {step.title}
                          </h4>
                          <span className="font-mono text-[9px] text-[#6F4E37] bg-[#FFFFFF] border border-[#EAEAEA] py-0.5 px-2 font-bold uppercase rounded-none">
                            {step.time} MIN
                          </span>
                        </div>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="font-sans text-xs text-zinc-500 font-light leading-relaxed pr-6"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Beautiful V60 image */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative p-3 bg-[#FFFFFF] border border-[#EAEAEA] shadow-sm max-w-sm aspect-[4/5] overflow-hidden"
              >
                <img
                  src={coffeePour}
                  alt="Specialty hand pour-over V60 preparation with slow spiral pour"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-transform duration-1000"
                />
                {/* Floating details banner */}
                <div className="absolute bottom-6 right-6 bg-[#FFFFFF] p-4 text-left border border-[#EAEAEA] backdrop-blur-sm select-none">
                  <span className="block font-mono text-[8px] text-zinc-400 font-semibold uppercase tracking-wider">
                    CALIBRATION STANDARD
                  </span>
                  <p className="font-serif text-xs font-bold text-[#111111] italic mt-1">
                    "Water: 93.5°C | Ratio: 1:16"
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER SUBSCRIPTION */}
      <section className="py-24 bg-[#F8F6F2] relative border-t border-[#EAEAEA]/70 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none opacity-20">
          <div className="absolute top-[10%] left-[20%] w-[200px] h-[200px] rounded-full bg-[#6F4E37]/35 blur-2xl" />
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex p-3 bg-white border border-[#EAEAEA] text-[#6F4E37] mb-6">
            <Mail className="w-5 h-5 stroke-[1.25]" />
          </div>

          <h2 className="font-serif text-3xl text-zinc-900 font-light tracking-tight mb-4 uppercase">
            Join The Tasting Circle
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-400 font-light leading-relaxed max-w-md mx-auto mb-10">
            Provide your email to receive private notifications when extremely limited micro-batch Colombian Geishas or sun-dried Ethiopians are loaded into our roasters.
          </p>

          <AnimatePresence mode="wait">
            {!subscribed ? (
              <motion.form
                onSubmit={handleSubscribe}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row items-stretch justify-center max-w-md mx-auto bg-white border border-[#EAEAEA]"
              >
                <input
                  type="email"
                  required
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="Enter your refined email address"
                  className="px-4 py-4 flex-1 bg-white focus:outline-none font-sans text-xs text-[#111111] placeholder:text-zinc-300"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#111111] text-[#FFFFFF] font-sans text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-[#6F4E37] transition-all duration-300 rounded-none shrink-0 cursor-pointer"
                >
                  Join Circle
                </button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#FFFFFF] p-6 border border-[#EAEAEA] max-w-md mx-auto relative overflow-hidden"
              >
                <div className="flex items-center justify-center space-x-2 text-[#6F4E37] font-semibold mb-2">
                  <Check className="w-4 h-4 stroke-[2]" />
                  <span className="font-serif text-sm uppercase tracking-wider">Invitation Confirmed</span>
                </div>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  Welcome to White Brew. We have added your credentials to our private lot registry. Expect origin tasting cards shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
