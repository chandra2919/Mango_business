"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Calendar, Leaf, Zap } from "lucide-react";
import { mangoVarieties } from "@/data/mangoes";
import { getWhatsAppUrl } from "@/lib/utils";
import { BRAND } from "@/constants/branding";
import type { MangoVariety } from "@/types";

function SweetnessBar({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i < level
                ? "bg-gradient-to-r from-amber-400 to-amber-500 w-3"
                : "bg-stone-200 w-3"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-stone-500 font-medium">{level}/10</span>
    </div>
  );
}

function MangoCard({ mango, index }: { mango: MangoVariety; index: number }) {
  const [hovered, setHovered] = useState(false);

  const orderUrl = getWhatsAppUrl(
    BRAND.whatsapp,
    `Hi MangoRoots! I'd like to order ${mango.name} mangoes. Please share availability and pricing.`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-card-premium border border-stone-100
                 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-amber-200/60 transition-all duration-300 cursor-default"
    >
      {/* Card top gradient area */}
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${mango.gradientFrom}, ${mango.gradientTo})`,
        }}
      >
        {/* Glow effect */}
        <motion.div
          animate={{ scale: hovered ? 1.2 : 1, opacity: hovered ? 0.6 : 0.3 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${mango.color}40, transparent 70%)`,
          }}
        />

        {/* Featured badge */}
        {mango.featured && (
          <div className="absolute top-4 left-4 flex items-center gap-1 px-2.5 py-1 rounded-full
                          bg-white/80 backdrop-blur-sm text-xs font-bold text-amber-700 border border-amber-300/50">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            Fan Favorite
          </div>
        )}

        {/* Emoji */}
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 8 : 0 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="text-8xl select-none z-10"
        >
          🥭
        </motion.div>

        {/* Origin tag */}
        <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-lg bg-black/15 backdrop-blur-sm">
          <span className="text-xs text-white font-semibold">{mango.origin}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Title row */}
        <div className="flex items-start justify-between mb-1.5">
          <h3 className="font-display text-xl font-bold text-stone-900">{mango.name}</h3>
        </div>
        <p className="text-amber-600 text-sm font-semibold mb-3">{mango.tagline}</p>

        {/* Description */}
        <p className="text-stone-500 text-sm leading-relaxed mb-5 line-clamp-3">
          {mango.description}
        </p>

        {/* Taste Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {mango.tasteProfile.map((taste) => (
            <span
              key={taste}
              className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-amber-700 text-xs font-medium"
            >
              {taste}
            </span>
          ))}
        </div>

        {/* Details Grid */}
        <div className="space-y-2.5 mb-5">
          {/* Sweetness */}
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs text-stone-500 font-medium uppercase tracking-wide">Sweetness</span>
            </div>
            <SweetnessBar level={mango.sweetness} />
          </div>

          {/* Texture */}
          <div className="flex items-center gap-2">
            <Leaf className="w-3.5 h-3.5 text-green-500" />
            <span className="text-xs text-stone-500">Texture:</span>
            <span className="text-xs text-stone-700 font-semibold">{mango.texture}</span>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-xs text-stone-500">Season:</span>
            <span className="text-xs text-stone-700 font-semibold">{mango.availability}</span>
          </div>
        </div>

        {/* CTA */}
        <motion.a
          href={orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                     bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold
                     shadow-[0_4px_14px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.5)]
                     transition-all duration-200"
        >
          Order {mango.name}
        </motion.a>
      </div>
    </motion.div>
  );
}

export function MangoVarieties() {
  return (
    <section id="varieties" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-flex">
            <span>🥭</span> Premium Varieties
          </span>
          <h2 className="heading-section text-stone-900 mb-4">
            Six Legendary{" "}
            <span className="mango-gradient-text">Indian Mangoes</span>
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Each variety handpicked from its region of origin — carrying centuries of flavor,
            aroma, and the unmistakable taste of an Indian summer.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {mangoVarieties.map((mango, i) => (
            <MangoCard key={mango.id} mango={mango} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-stone-500 text-sm mb-4">
            Not sure which to choose? Let us help you pick the perfect variety.
          </p>
          <motion.a
            href={getWhatsAppUrl(BRAND.whatsapp, "Hi! I need help choosing the right mango variety for my family. Can you help?")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                       bg-white border border-amber-300 text-amber-700 font-semibold text-sm
                       shadow-card-premium hover:bg-amber-50 hover:shadow-[0_6px_24px_rgba(245,158,11,0.15)]
                       transition-all duration-200"
          >
            💬 Ask Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
