import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Calendar, Clock, Send, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfos = [
    {
      icon: Mail,
      title: "Electronic Curator Mail",
      value: "curator@whitebrew.coffee",
      href: "mailto:curator@whitebrew.coffee"
    },
    {
      icon: Phone,
      title: "Our Coffee Telephone Line",
      value: "+1 (555) 019-2831",
      href: "tel:+15550192831"
    }
  ];

  const businessHours = [
    { days: "Monday — Friday", hours: "07:00 — 17:00" },
    { days: "Saturday — Sunday", hours: "08:00 — 18:00" }
  ];

  return (
    <section id="contact" className="py-24 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-sm mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-6 h-[1px] bg-[#6F4E37]" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#6F4E37] font-semibold">
              Get In Touch
            </span>
            <span className="w-6 h-[1px] bg-[#6F4E37]" />
          </div>
          <h2 className="font-serif text-3xl text-[#111111] font-light tracking-tight uppercase">
            Curator Dispatch
          </h2>
        </div>

        {/* Contact page layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-5 space-y-10 flex flex-col justify-between">
            {/* Direct details */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-light text-zinc-900 uppercase tracking-wide">
                Our Physical Sanctuary
              </h3>
              <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
                Situated in the heart of the architectural and gallery district. We welcome digital nomads, deep thinkers, and specialty seekers.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#F8F6F2]">
                {contactInfos.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="flex items-start space-x-3">
                      <div className="p-2 bg-[#F8F6F2] text-[#6F4E37] border border-[#EAEAEA]">
                        <Icon className="w-4 h-4 stroke-[1.25]" />
                      </div>
                      <div>
                        <span className="block text-[8px] font-sans tracking-widest text-zinc-400 uppercase font-bold mb-0.5">
                          {c.title}
                        </span>
                        <a
                          href={c.href}
                          className="font-sans text-xs text-[#111111] hover:text-[#6F4E37] transition-colors font-medium"
                        >
                          {c.value}
                        </a>
                      </div>
                    </div>
                  );
                })}

                {/* Operating hours */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#F8F6F2] text-[#6F4E37] border border-[#EAEAEA]">
                    <Clock className="w-4 h-4 stroke-[1.25]" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[8px] font-sans tracking-widest text-zinc-400 uppercase font-bold mb-1">
                      Business Operation Calendar Hours
                    </span>
                    <div className="space-y-1">
                      {businessHours.map((h) => (
                        <div key={h.days} className="flex justify-between max-w-xs font-sans text-xs text-zinc-500 font-light">
                          <span>{h.days}</span>
                          <span className="font-semibold text-[#111111]">{h.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map representation with custom greyscale filters */}
            <div className="w-full aspect-video border border-[#EAEAEA] p-1 bg-[#FFFFFF] relative overflow-hidden group">
              <iframe
                title="White Brew Coffee Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175402507624!2d-73.98782352427845!3d40.74844047138914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1703248386187!5m2!1sen!2sus"
                className="w-full h-full grayscale-[90%] contrast-[95%] invert-[5%] opacity-85 group-hover:grayscale-0 transition-all duration-700 pointer-events-auto"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-2 left-2 bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#EAEAEA] font-mono text-[8.5px] tracking-widest text-[#111111]/75 px-2 py-1 select-none pointer-events-none">
                COORD: 40.7484° N, 73.9857° W
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#F8F6F2] p-8 md:p-12 border border-[#EAEAEA]">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-xl font-light text-zinc-900 uppercase tracking-wide mb-2">
                    Transmission Deck
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[8px] font-sans tracking-widest text-zinc-400 uppercase font-bold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Julian Brooks"
                        className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#EAEAEA] text-xs font-sans text-[#111111] focus:outline-none focus:border-[#6F4E37] rounded-none placeholder:text-zinc-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[8px] font-sans tracking-widest text-zinc-400 uppercase font-bold mb-1">
                        E-Mail Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="julian@example.com"
                        className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#EAEAEA] text-xs font-sans text-[#111111] focus:outline-none focus:border-[#6F4E37] rounded-none placeholder:text-zinc-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[8px] font-sans tracking-widest text-zinc-400 uppercase font-bold mb-1">
                      Subject Matter
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Specialty Catering proposal"
                      className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#EAEAEA] text-xs font-sans text-[#111111] focus:outline-none focus:border-[#6F4E37] rounded-none placeholder:text-zinc-300"
                    />
                  </div>

                  <div>
                    <label className="block text-[8px] font-sans tracking-widest text-zinc-400 uppercase font-bold mb-1">
                      Message Composition *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your refined message specifications..."
                      className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#EAEAEA] text-xs font-sans text-[#111111] focus:outline-none focus:border-[#6F4E37] rounded-none placeholder:text-zinc-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#111111] text-[#FFFFFF] font-sans text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-[#6F4E37] transition-all duration-300 rounded-none shadow-sm hover:shadow-lg flex items-center justify-center space-x-2.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4 stroke-[1.25]" />
                    <span>Send Dispatch Transmission</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="inline-flex p-4 bg-white text-[#6F4E37] border border-[#EAEAEA]">
                    <Check className="w-8 h-8 stroke-[1.5]" />
                  </div>

                  <h3 className="font-serif text-2xl font-light text-zinc-900 uppercase tracking-wide">
                    Dispatch Initiated
                  </h3>

                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
                    Thank you. Your message has been routed successfully to our operations curator desk. We will forward a transmission response to your provided coordinates shortly.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 border border-[#111111] text-[#111111] font-sans text-[10px] tracking-widest uppercase font-semibold hover:bg-[#111111] hover:text-[#FFFFFF] transition-all duration-300 rounded-none"
                  >
                    Send Another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
