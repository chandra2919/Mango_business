"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Truck, Shield, Leaf } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

const floatingMangoData = [
  { emoji: "🥭", size: "text-7xl", x: "5%",  y: "15%", delay: 0,   className: "animate-float-1" },
  { emoji: "🥭", size: "text-5xl", x: "88%", y: "20%", delay: 1.2, className: "animate-float-2" },
  { emoji: "🥭", size: "text-6xl", x: "80%", y: "65%", delay: 0.6, className: "animate-float-3" },
  { emoji: "🥭", size: "text-4xl", x: "10%", y: "72%", delay: 1.8, className: "animate-float-1" },
  { emoji: "🌿", size: "text-4xl", x: "92%", y: "45%", delay: 0.9, className: "animate-float-2" },
  { emoji: "🌿", size: "text-3xl", x: "3%",  y: "45%", delay: 2.1, className: "animate-float-3" },
];

const badges = [
  { icon: Truck,   label: "Free Weekend Delivery", color: "#3A7D5A", bg: "#EDF6F1", border: "#BFE0D0" },
  { icon: Shield,  label: "USDA Approved",          color: "#3A5C8A", bg: "#EDF2FA", border: "#BFCFE8" },
  { icon: Leaf,    label: "Naturally Ripened",       color: "#3A6B3A", bg: "#EEF5EE", border: "#BFDABF" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const whatsappUrl = getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FDFCF9 0%, #FAF6EE 40%, #F5EDD8 75%, #EFE2C4 100%)" }}
    >
      {/* Subtle radial warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(184,115,42,0.08) 0%, transparent 70%)" }}
      />

      {/* Floating Mangoes — reduced opacity so they feel airy */}
      {floatingMangoData.map((m, i) => (
        <motion.div
          key={i}
          className={`absolute select-none pointer-events-none ${m.size} ${m.className}`}
          style={{ left: m.x, top: m.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ delay: m.delay, duration: 0.8, ease: "backOut" }}
        >
          {m.emoji}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Season badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          style={{ background: "#F5EBD8", color: "#8B5218", border: "1px solid #E2C99A" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#B8732A" }} />
          🌟 Fresh Season Stock — {BRAND.season}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-display font-bold tracking-tight mb-6"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", lineHeight: 1.1, color: "#2E2520" }}
        >
          Taste the{" "}
          <span className="relative inline-block mango-gradient-text">
            Summer of India
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full"
              style={{ background: "linear-gradient(90deg, #B8732A, #D4922A)", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            />
          </span>
          <br />Again
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "#6B5C53" }}
        >
          Authentic handpicked Indian mangoes — Banginapalli, Alphonso, Rasalu &amp; more.
          Sourced directly from Indian orchards, delivered fresh across the USA.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full
                       text-white text-base font-semibold w-full sm:w-auto"
            style={{ background: "#B8732A", boxShadow: "0 6px 24px rgba(184,115,42,0.3)" }}
          >
            <span className="text-lg">🛒</span> Order Now
          </motion.a>
          <motion.button
            onClick={() => document.getElementById("varieties")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full
                       text-base font-semibold border w-full sm:w-auto"
            style={{
              background: "#FFFFFF",
              color: "#2E2520",
              border: "1px solid #E0D4C4",
              boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
            }}
          >
            <span className="text-lg">🥭</span> Explore Mangoes
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.52 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map(({ icon: Icon, label, color, bg, border }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color }} />
              <span className="text-xs font-semibold" style={{ color }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.68 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-14"
        >
          {[
            { value: "800+", label: "Mangoes/Weekend", emoji: "🥭" },
            { value: "6",    label: "Premium Varieties", emoji: "✨" },
            { value: "10+",  label: "States Delivered",  emoji: "🚚" },
            { value: "100%", label: "Naturally Ripened",  emoji: "🌿" },
          ].map(({ value, label, emoji }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.72 + i * 0.08 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-lg">{emoji}</span>
                <span className="font-display text-2xl font-bold" style={{ color: "#2E2520" }}>{value}</span>
              </div>
              <span className="text-xs font-medium" style={{ color: "#9A8880" }}>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#B8A898" }}>Scroll</span>
          <ChevronDown className="w-5 h-5" style={{ color: "#B8732A" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
