"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

const navLinks = [
  { label: "Home",    href: "#home" },
  { label: "Mangoes", href: "#varieties" },
  { label: "About",   href: "#why-us" },
  { label: "FAQ",     href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeLink, setActive]   = useState("home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const go = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const whatsappUrl = getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(253,252,249,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #EAE2D6" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <motion.button
              onClick={() => go("#home")}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #D4922A, #8B5218)",
                  boxShadow: "0 2px 10px rgba(184,115,42,0.30)",
                }}
              >
                <span className="text-lg">🥭</span>
              </div>
              <span className="font-display text-xl font-bold" style={{ color: "#2E2520" }}>
                Mango<span style={{ color: "#B8732A" }}>Roots</span>
              </span>
            </motion.button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => go(link.href)}
                    className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
                    style={{ color: isActive ? "#8B5218" : "#5A4A42" }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{ background: "#F5EBD8", border: "1px solid #E2C99A" }}
                        transition={{ type: "spring", stiffness: 320, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Order button */}
            <div className="hidden md:flex items-center">
              <motion.a
                href={whatsappUrl}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
                style={{
                  background: "#B8732A",
                  boxShadow: "0 3px 14px rgba(184,115,42,0.30)",
                }}
              >
                <ShoppingBag className="w-4 h-4" />
                Order Now
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl transition-colors"
              style={{ color: "#5A4A42" }}
              aria-label="Toggle menu"
            >
              <motion.div animate={{ rotate: menuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
            style={{
              background: "rgba(253,252,249,0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid #EAE2D6",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors"
                  style={{ color: "#3A2E28" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#F5EBD8")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
                             text-white font-semibold"
                  style={{ background: "#B8732A", boxShadow: "0 3px 14px rgba(184,115,42,0.28)" }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
