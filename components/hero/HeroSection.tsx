"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Truck, Star, Shield, Leaf } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

const floatingMangoData = [
  { emoji: "🥭", size: "text-7xl", x: "5%", y: "15%", delay: 0, className: "animate-float-1" },
  { emoji: "🥭", size: "text-5xl", x: "88%", y: "20%", delay: 1.2, className: "animate-float-2" },
  { emoji: "🥭", size: "text-6xl", x: "80%", y: "65%", delay: 0.6, className: "animate-float-3" },
  { emoji: "🥭", size: "text-4xl", x: "10%", y: "72%", delay: 1.8, className: "animate-float-1" },
  { emoji: "🌿", size: "text-4xl", x: "92%", y: "45%", delay: 0.9, className: "animate-float-2" },
  { emoji: "🌿", size: "text-3xl", x: "3%", y: "45%", delay: 2.1, className: "animate-float-3" },
];

const badges = [
  { icon: Truck, label: "Free Weekend Delivery", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
  { icon: Shield, label: "USDA Approved", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  { icon: Leaf, label: "Naturally Ripened", color: "text-green-600", bg: "bg-green-50 border-green-200" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const whatsappUrl = getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFFDF7 0%, #FFF8E7 35%, #FEF3C7 65%, #FDE68A 100%)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(245,158,11,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Floating Mangoes */}
      {floatingMangoData.map((mango, i) => (
        <motion.div
          key={i}
          className={`absolute select-none pointer-events-none ${mango.size} ${mango.className}`}
          style={{ left: mango.x, top: mango.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ delay: mango.delay, duration: 0.8, ease: "backOut" }}
        >
          {mango.emoji}
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Season Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-300/60
                     backdrop-blur-sm text-amber-700 text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          🌟 Fresh Season Stock Available Now — {BRAND.season}
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold tracking-tight text-stone-900 mb-6"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
        >
          Taste the{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Summer of India
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{ transformOrigin: "left" }}
            />
          </span>
          <br />
          Again
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-stone-600 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Authentic handpicked Indian mangoes — Banginapalli, Alphonso, Rasalu &amp; more.
          Direct from orchards in India, delivered fresh to your door across the USA.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber-500 text-white text-base font-semibold
                       shadow-[0_8px_30px_rgba(245,158,11,0.45)] hover:bg-amber-600 hover:shadow-[0_12px_40px_rgba(245,158,11,0.55)]
                       transition-all duration-250 w-full sm:w-auto justify-center"
          >
            <span className="text-lg">🛒</span> Order Now
          </motion.a>
          <motion.button
            onClick={() => {
              document.getElementById("varieties")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-stone-800 text-base font-semibold
                       border border-stone-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-amber-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)]
                       transition-all duration-250 w-full sm:w-auto justify-center"
          >
            <span className="text-lg">🥭</span> Explore Mangoes
          </motion.button>
        </motion.div>

        {/* Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map(({ icon: Icon, label, color, bg }, i) => (
            <div
              key={label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${bg} backdrop-blur-sm`}
            >
              <Icon className={`w-3.5 h-3.5 ${color}`} />
              <span className={`text-xs font-semibold ${color}`}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-14"
        >
          {[
            { value: "800+", label: "Mangoes/Weekend", emoji: "🥭" },
            { value: "6", label: "Premium Varieties", emoji: "✨" },
            { value: "10+", label: "States Delivered", emoji: "🚚" },
            { value: "100%", label: "Naturally Ripened", emoji: "🌿" },
          ].map(({ value, label, emoji }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 + i * 0.1 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-lg">{emoji}</span>
                <span className="font-display text-2xl font-bold text-stone-900">{value}</span>
              </div>
              <span className="text-xs text-stone-500 font-medium">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 cursor-pointer"
          onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-stone-400 text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-amber-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
