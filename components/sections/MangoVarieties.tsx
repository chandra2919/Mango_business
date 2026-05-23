"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { mangoVarieties } from "@/data/mangoes";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";
import type { MangoVariety } from "@/types";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/* Actual images mapped to variety id */
const images: Record<string, string> = {
  banginapalli: "/images/banginapalli_mango.jpg",
  rasalu:       "/images/Rasalu_mangoes.jpg",
  alphonso:     "/images/Alphanso_Mango.jpg",
  kesar:        "/images/kesar_mango.jpg",
  himayat:      "/images/himayat_mango.webp",
  mallika:      "/images/mallika_mango.jpg",
};

/* Image top background tint per variety */
const tops: Record<string, { border: string }> = {
  banginapalli: { border: "#E8C87A"  },
  rasalu:       { border: "#F5D68A"  },
  alphonso:     { border: "#E8C87A"  },
  kesar:        { border: "#BBF7D0"  },
  himayat:      { border: "#E8C87A"  },
  mallika:      { border: "#BBF7D0"  },
};

/* Scroll direction: always from bottom (safe for all grid sizes / mobile) */
const scrollDir = (_i: number) => ({ x: 0, y: 40 });

function MangoCard({ mango, index }: { mango: MangoVariety; index: number }) {
  const top      = tops[mango.id] ?? tops.banginapalli;
  const imgSrc   = images[mango.id] ?? "/images/banginapalli_mango.jpg";
  const orderUrl = getWhatsAppUrl(BRAND.whatsapp,
    `Hi MangoRoots! I'd like to order ${mango.name} mangoes. Please share availability and pricing.`);

  const dir = scrollDir(index);

  return (
    <motion.div
      initial={{ opacity: 0, x: dir.x, y: dir.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.09, ease: EASE }}
    >
      {/* Outer wrapper */}
      <div
        className="mango-slide-card card-lift flex flex-col rounded-2xl group"
        style={{ border: `1.5px solid ${top.border}`, background: "#FFFFFF" }}
      >
        {/* ── slide1: IMAGE PANEL ── translateY(36px) → 0 on hover */}
        <div className="ms1">
          <div className="relative w-full h-44 sm:h-52 overflow-hidden rounded-t-2xl">

            {/*
              zoom-out driven by CSS class .mango-card-img
              Parent .mango-slide-card:hover triggers scale(1.06)→scale(0.94)
              No JS onMouseEnter/Leave needed — overlay can't block it
            */}
            <Image
              src={imgSrc}
              alt={mango.name}
              fill
              priority={index < 3}
              className="object-cover object-center mango-card-img"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Featured badge — CSS dot, no emoji */}
            {mango.featured && (
              <span
                className="absolute top-3 left-3 z-10 flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(255,248,236,0.95)",
                  color: "#7A4E1D",
                  border: "1px solid #F7C873",
                  backdropFilter: "blur(4px)",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F4A300", display: "inline-block", flexShrink: 0 }} />
                Popular
              </span>
            )}

            {/* Origin tag */}
            <span
              className="absolute bottom-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full z-10"
              style={{
                background: "rgba(255,255,255,0.92)",
                color: "#555555",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              {mango.origin}
            </span>

            {/* Hover overlay — name + tagline slides up from bottom */}
            <div
              className="absolute inset-0 z-20 flex flex-col justify-end px-4 py-4
                         opacity-0 group-hover:opacity-100
                         translate-y-2 group-hover:translate-y-0
                         transition-all duration-500 ease-out"
              style={{
                background:
                  "linear-gradient(to top, rgba(8,24,12,0.88) 0%, rgba(8,24,12,0.45) 55%, transparent 100%)",
              }}
            >
              <p
                className="text-white font-bold text-sm leading-tight mb-0.5"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {mango.name}
              </p>
              <p
                className="text-xs leading-snug"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  color: "#F7C873",
                }}
              >
                {mango.tagline}
              </p>
            </div>

          </div>
        </div>

        {/* ── slide2: CONTENT PANEL ── starts translateY(-52px), slides to 0 on hover */}
        <div className="ms2 p-5 pb-10 flex flex-col flex-1">
          <h3 className="font-bold text-base mb-0.5"
            style={{ fontFamily: "var(--font-poppins)", color: "#111111" }}>
            {mango.name}
          </h3>

          {/* Italic gold tagline — Playfair Display */}
          <p className="mb-3"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", color: "#C9973E", fontSize: "0.9rem" }}>
            {mango.tagline}
          </p>

          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#555555" }}>
            {mango.description}
          </p>

          {/* Taste tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {mango.tasteProfile.map(t => (
              <span key={t} className="text-xs px-2.5 py-0.5 rounded-full"
                style={{ background: "#FBF3E0", color: "#7A5A1E", border: "1px solid #E8C87A" }}>
                {t}
              </span>
            ))}
          </div>

          {/* Divider details */}
          <div className="space-y-2 mb-5 py-3"
            style={{ borderTop: "1px solid #F0F0F0", borderBottom: "1px solid #F0F0F0" }}>
            <div className="flex justify-between items-center text-xs">
              <span style={{ color: "#888888" }}>Sweetness</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-3 h-2.5 rounded-sm"
                    style={{ background: i < Math.round(mango.sweetness / 2) ? "#C9973E" : "#F0F0E8" }} />
                ))}
              </div>
            </div>
            <div className="flex justify-between text-xs">
              <span style={{ color: "#888888" }}>Texture</span>
              <span className="font-medium" style={{ color: "#111111" }}>{mango.texture}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span style={{ color: "#888888" }}>Season</span>
              <span className="font-semibold" style={{ color: "#15562B" }}>{mango.availability}</span>
            </div>
          </div>

          <a href={orderUrl} target="_blank" rel="noopener noreferrer"
            className="btn btn-green block w-full text-center py-3 text-sm"
          >
            Order {mango.name}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function MangoVarieties() {
  return (
    <section id="varieties" className="sec" style={{ background: "#FFFFFF", borderTop: "1px solid #F0F0F0" }}>
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <span className="sec-num">01 — Our Products</span>
          <span className="sec-label block mt-1">Handpicked Seasonal Varieties</span>
          <h2 className="sec-heading mt-2 mb-4">Six Premium Indian Mango Varieties</h2>
          <p className="sec-body max-w-2xl mt-5">
            Handpicked from their regions of origin — each with its own distinct flavour, aroma, and heritage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mangoVarieties.map((m, i) => <MangoCard key={m.id} mango={m} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="mt-10 pt-8"
          style={{ borderTop: "1px solid #F0F0F0" }}
        >
          <a href={getWhatsAppUrl(BRAND.whatsapp, "Hi! I need help choosing the right mango variety.")}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2 px-5 py-2.5 text-sm"
          >
            💬 Not sure? Ask us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
