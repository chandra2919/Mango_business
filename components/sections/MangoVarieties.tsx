"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Calendar, Leaf, Zap } from "lucide-react";
import { mangoVarieties } from "@/data/mangoes";
import { getWhatsAppUrl } from "@/lib/utils";
import { BRAND } from "@/constants/branding";
import type { MangoVariety } from "@/types";

/* Soft pastel card top colors per variety */
const cardTops: Record<string, { from: string; to: string; text: string }> = {
  banginapalli: { from: "#FDF4E3", to: "#F5E0B0", text: "#7A4F10" },
  rasalu:       { from: "#F9EFE0", to: "#EDD69A", text: "#7A4510" },
  alphonso:     { from: "#FDF0E6", to: "#F4CBAB", text: "#7A3E18" },
  kesar:        { from: "#FDF1EA", to: "#F2C4A0", text: "#7A3A18" },
  himayat:      { from: "#FAF5E0", to: "#EBD98A", text: "#6A4A08" },
  mallika:      { from: "#F9EDE0", to: "#E9C898", text: "#6A3E10" },
};

function SweetnessBar({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-2 rounded-full"
            style={{
              width: "11px",
              background: i < level
                ? "linear-gradient(90deg, #B8732A, #D4922A)"
                : "#EDE5D8",
            }}
          />
        ))}
      </div>
      <span className="text-xs font-medium" style={{ color: "#9A8880" }}>{level}/10</span>
    </div>
  );
}

function MangoCard({ mango, index }: { mango: MangoVariety; index: number }) {
  const [hovered, setHovered] = useState(false);
  const top = cardTops[mango.id] ?? cardTops.banginapalli;

  const orderUrl = getWhatsAppUrl(
    BRAND.whatsapp,
    `Hi MangoRoots! I'd like to order ${mango.name} mangoes. Please share availability and pricing.`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -7 }}
      className="group rounded-3xl overflow-hidden cursor-default"
      style={{
        background: "#FFFFFF",
        border: "1px solid #EAE2D6",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s, border-color 0.3s",
      }}
    >
      {/* Card top */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(145deg, ${top.from}, ${top.to})` }}
      >
        <motion.div
          animate={{ scale: hovered ? 1.12 : 1, rotate: hovered ? 6 : 0 }}
          transition={{ duration: 0.35, ease: "backOut" }}
          className="text-7xl select-none z-10"
        >
          🥭
        </motion.div>

        {mango.featured && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
            style={{ background: "rgba(255,255,255,0.82)", color: top.text, border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <Star className="w-3 h-3 fill-current" />
            Fan Favorite
          </div>
        )}

        <div
          className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold"
          style={{ background: "rgba(0,0,0,0.10)", color: "#FFF" }}
        >
          {mango.origin}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-0.5" style={{ color: "#2E2520" }}>{mango.name}</h3>
        <p className="text-sm font-semibold mb-3" style={{ color: "#B8732A" }}>{mango.tagline}</p>
        <p className="text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: "#7A6B62" }}>
          {mango.description}
        </p>

        {/* Taste chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {mango.tasteProfile.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ background: "#F5EBD8", color: "#8B5218", border: "1px solid #E2C99A" }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="space-y-2.5 mb-5">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <Zap className="w-3.5 h-3.5" style={{ color: "#B8732A" }} />
              <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "#9A8880" }}>Sweetness</span>
            </div>
            <SweetnessBar level={mango.sweetness} />
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="w-3.5 h-3.5" style={{ color: "#5A9A6A" }} />
            <span className="text-xs" style={{ color: "#9A8880" }}>Texture:</span>
            <span className="text-xs font-semibold" style={{ color: "#3A2E28" }}>{mango.texture}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" style={{ color: "#5A7AAA" }} />
            <span className="text-xs" style={{ color: "#9A8880" }}>Season:</span>
            <span className="text-xs font-semibold" style={{ color: "#3A2E28" }}>{mango.availability}</span>
          </div>
        </div>

        {/* CTA */}
        <motion.a
          href={orderUrl}
          target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-semibold"
          style={{
            background: "linear-gradient(135deg, #B8732A, #9E621F)",
            boxShadow: "0 3px 14px rgba(184,115,42,0.28)",
          }}
        >
          Order {mango.name}
        </motion.a>
      </div>
    </motion.div>
  );
}

export function MangoVarieties() {
  return (
    <section id="varieties" className="py-24 md:py-32" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-flex">🥭 Premium Varieties</span>
          <h2 className="heading-section mb-4" style={{ color: "#2E2520" }}>
            Six Legendary{" "}
            <span className="mango-gradient-text">Indian Mangoes</span>
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Each variety handpicked from its region of origin — carrying centuries of flavor,
            aroma, and the unmistakable taste of an Indian summer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mangoVarieties.map((m, i) => <MangoCard key={m.id} mango={m} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-sm mb-4" style={{ color: "#9A8880" }}>
            Not sure which to choose? Let us help you pick the perfect variety.
          </p>
          <motion.a
            href={getWhatsAppUrl(BRAND.whatsapp, "Hi! I need help choosing the right mango variety. Can you help?")}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold"
            style={{
              background: "#FFFFFF",
              color: "#8B5218",
              border: "1px solid #E2C99A",
              boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
            }}
          >
            💬 Ask Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
