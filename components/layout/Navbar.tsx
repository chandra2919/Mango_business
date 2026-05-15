"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

const links = [
  { label: "Home",     href: "#home"       },
  { label: "Mangoes",  href: "#varieties"  },
  { label: "Why Us",   href: "#why-us"     },
  { label: "Delivery", href: "#delivery"   },
  { label: "FAQ",      href: "#faq"        },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const go = (href: string) => {
    setOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  const waUrl = getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,1)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: `1px solid ${scrolled ? "#EBEBEB" : "#F5F5F5"}`,
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button onClick={() => go("#home")} className="flex items-center gap-2 cursor-pointer group">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">🥭</span>
              <span className="font-bold text-lg" style={{ fontFamily: "var(--font-poppins)", color: "#111111" }}>
                Mango<span style={{ color: "#15562B" }}>Roots</span>
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0.5">
              {links.map(l => (
                <button key={l.href} onClick={() => go(l.href)}
                  className="relative px-4 py-2 text-sm font-medium rounded transition-all duration-200 group"
                  style={{ color: "#555555" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#111111"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#555555"; }}
                >
                  {l.label}
                  {/* Gold underline on hover */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 transition-all duration-300 rounded-full"
                    style={{ background: "#C9973E" }} />
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a href={`tel:${BRAND.phone}`}
                className="flex items-center gap-1.5 px-3 py-2 text-sm transition-colors duration-200"
                style={{ color: "#555555" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#15562B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#555555")}
              >
                <Phone className="w-3.5 h-3.5" style={{ color: "#C9973E" }} />
                {BRAND.phone}
              </a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="btn btn-green flex items-center gap-1.5 px-4 py-2 text-sm"
              >
                <ShoppingBag className="w-3.5 h-3.5" /> Order Now
              </a>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setOpen(!open)}
              className="md:hidden p-2.5 rounded-lg transition-colors"
              style={{ background: open ? "#FBF3E0" : "transparent" }}
              aria-label="Menu"
            >
              {open
                ? <X    className="w-5 h-5" style={{ color: "#111111" }} />
                : <Menu className="w-5 h-5" style={{ color: "#111111" }} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid #EBEBEB",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <div className="px-5 py-5 space-y-1">
              {links.map((l, i) => (
                <motion.button
                  key={l.href} onClick={() => go(l.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ color: "#111111" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#FBF3E0"; e.currentTarget.style.color = "#7A5A1E"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#111111"; }}
                >
                  {l.label}
                </motion.button>
              ))}
              <div className="pt-4 flex flex-col gap-2.5">
                <a href={`tel:${BRAND.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{ background: "#FBF3E0", border: "1px solid #E8C87A", color: "#7A5A1E" }}>
                  <Phone className="w-4 h-4" /> {BRAND.phone}
                </a>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                  className="btn btn-green flex items-center justify-center gap-2 py-3 rounded-lg text-sm">
                  <ShoppingBag className="w-4 h-4" /> Order via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
