import React from "react";
import { Instagram, Twitter, Facebook, Pin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Facebook, href: "https://facebook.com" }
  ];

  const quickLinks = [
    { label: "Home Base", href: "#home" },
    { label: "Our Story", href: "#about" },
    { label: "Curated Menu", href: "#menu" },
    { label: "Micro-Lots", href: "#origins" },
    { label: "Gallery Feed", href: "#gallery" },
    { label: "Client Voice", href: "#testimonials" },
    { label: "Curator Mail", href: "#contact" }
  ];

  return (
    <footer className="bg-[#111111] text-[#FFFFFF] py-16 border-t border-zinc-900 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          {/* Logo Brand Segment */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col items-start select-none">
              <span className="font-serif text-xl tracking-[0.25em] text-[#FFFFFF] uppercase font-light leading-none">
                White Brew
              </span>
              <span className="font-sans text-[8px] tracking-[0.45em] text-[#6F4E37] uppercase font-medium mt-1">
                Specialty Coffee
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Stripping away unnecessary additives to honor pristine soil compounds, natural washings, and precise roastery. Craft is our science; minimalism is our aesthetic behavior.
            </p>

            {/* Social icons */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-zinc-900 hover:bg-[#6F4E37] hover:text-white text-zinc-400 transition-colors border border-zinc-800"
                    aria-label="Social link"
                  >
                    <Icon className="w-4 h-4 stroke-[1.25]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Segments */}
          <div className="md:col-span-4 md:col-start-6 space-y-6">
            <h4 className="font-serif text-sm tracking-widest text-[#FFFFFF] font-normal uppercase">
              Sanctuary Navigation
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-xs text-zinc-400 hover:text-[#6F4E37] transition-colors leading-relaxed font-light"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Slogan details */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-serif text-sm tracking-widest text-[#FFFFFF] font-normal uppercase">
              Sanctuary Address
            </h4>
            <div className="space-y-3 font-sans text-xs text-zinc-400 leading-relaxed font-light">
              <p>
                14 Specialty Row, Design District <br />
                New York, NY 10001
              </p>
              <div className="w-12 h-[1px] bg-[#6F4E37]" />
              <p className="font-mono text-[9px] tracking-wider text-[#6F4E37] font-semibold">
                COORD: 40.7484° N, 73.9857° W
              </p>
            </div>
          </div>
        </div>

        {/* Lower row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-sans text-[10px] text-zinc-500 tracking-wider">
          <p>© {currentYear} WHITE BREW COFFEE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0 font-light text-zinc-600">
            <a href="#home" className="hover:text-zinc-400">PRIVACY REGISTRY</a>
            <span>/</span>
            <a href="#home" className="hover:text-zinc-400">TERMS OF CRAFT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
