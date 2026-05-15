"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, Phone } from "lucide-react";
import Image from "next/image";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";

/* ── Slide data ──────────────────────────────────────── */
const slides = [
  {
    id: 1,
    image:    "/images/cover_image1.jpg",
    label:    "Premium Indian Mangoes · USA Delivery",
    headline: "Authentic Indian Mangoes",
    accent:   "Delivered Fresh in the USA",
    body:     "Handpicked Banginapalli, Alphonso, Rasalu, Kesar, Himayat & Mallika — sourced directly from orchards in India and delivered fresh across the USA.",
  },
  {
    id: 2,
    image:    "/images/cover_image2.jpg",
    label:    "Farm Direct · Air Flown",
    headline: "Farm-Direct. Air-Flown.",
    accent:   "Fresh to Your Door in 2–4 Days",
    body:     "From trusted orchards in Andhra Pradesh, Maharashtra & Gujarat — air-freighted to preserve freshness, delivered directly to your family.",
  },
  {
    id: 3,
    image:    "/images/cover_image3.jpg",
    label:    "Season: May – August 2025",
    headline: "The Mango Season Is Here",
    accent:   "Limited Stock — Pre-Order Early",
    body:     "600–800 mangoes sold every weekend. Once the season ends they're gone for a year. Secure your order before it sells out.",
  },
  {
    id: 4,
    image:    "/images/cover_image4.jpg",
    label:    "USDA Certified · Naturally Ripened",
    headline: "No Chemicals. No Compromise.",
    accent:   "Pure Taste of Indian Orchards",
    body:     "Every mango is naturally ripened and USDA certified — handpicked at peak sweetness and air-freighted so you taste the real India.",
  },
];

/* ── Framer Motion variants ──────────────────────────── */
const SLIDE_DURATION = 0.65;
const EASE_CURVE     = [0.25, 0.46, 0.45, 0.94] as const;

const imageVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0.6,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: SLIDE_DURATION, ease: EASE_CURVE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0.6,
    transition: { duration: SLIDE_DURATION, ease: EASE_CURVE },
  }),
};

/* Text items stagger inside each slide */
const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
};
const textItem = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_CURVE } },
};

/* ── Component ───────────────────────────────────────── */
export function HeroSection() {
  const [current,   setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused,    setPaused]    = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const waUrl   = getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage);
  const callUrl = getCallUrl(BRAND.phone);
  const total   = slides.length;

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const prev = useCallback(() => goTo((current - 1 + total) % total, -1), [current, total, goTo]);
  const next = useCallback(() => goTo((current + 1) % total,           1), [current, total, goTo]);

  /* Auto-play every 5 s */
  useEffect(() => {
    if (paused) return;
    autoRef.current = setInterval(next, 4000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section id="home" className="pt-16" style={{ background: "#FFFFFF" }}>

      {/* ── Announcement bar ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_CURVE }}
        className="py-2.5 text-center text-xs font-semibold tracking-wide"
        style={{
          background: "linear-gradient(90deg, #FBF3E0 0%, #FEF9F0 50%, #FBF3E0 100%)",
          borderBottom: "1px solid #E8C87A",
          color: "#7A5A1E",
        }}
      >
        🌟&nbsp; Fresh Season Stock Now Available &nbsp;·&nbsp; May – August 2025 &nbsp;·&nbsp; Limited Weekly Quantities
      </motion.div>

      {/* ── Full-width carousel ─────────────────────────── */}
      <div
        className="relative w-full overflow-hidden select-none"
        style={{ height: "clamp(340px, 52vw, 600px)" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* ── Sliding images ─────────────────────────────── */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority={current === 0}
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* Gradient overlay — deep left for text, fades right */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(110deg, rgba(10,30,15,0.80) 0%, rgba(10,30,15,0.58) 42%, rgba(10,30,15,0.18) 75%, transparent 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Text overlay ───────────────────────────────── */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
            <div className="max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${current}`}
                  variants={textContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Italic gold label */}
                  <motion.p
                    variants={textItem}
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                      color: "#E8C87A",
                      fontSize: "1rem",
                      letterSpacing: "0.04em",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {slide.label}
                  </motion.p>

                  {/* Main headline */}
                  <motion.h1
                    variants={textItem}
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "clamp(1.85rem, 3.8vw, 3rem)",
                      fontWeight: 800,
                      lineHeight: 1.15,
                      color: "#FFFFFF",
                      marginBottom: "0.4rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {slide.headline}
                  </motion.h1>

                  {/* Gold accent line */}
                  <motion.p
                    variants={textItem}
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "clamp(1rem, 2vw, 1.45rem)",
                      fontWeight: 600,
                      color: "#C9973E",
                      marginBottom: "1rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {slide.accent}
                  </motion.p>

                  {/* Body text */}
                  <motion.p
                    variants={textItem}
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.80)",
                      marginBottom: "2rem",
                      maxWidth: "420px",
                    }}
                  >
                    {slide.body}
                  </motion.p>

                  {/* CTA buttons */}
                  <motion.div variants={textItem} className="flex flex-wrap gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-green flex items-center gap-2 px-6 py-3 text-sm"
                    >
                      <ShoppingBag className="w-4 h-4" /> Order on WhatsApp
                    </a>
                    <a
                      href={callUrl}
                      className="flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.35)",
                        color: "#FFFFFF",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
                    >
                      <Phone className="w-4 h-4" /> Call to Order
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Left arrow ─────────────────────────────────── */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            width: "46px", height: "46px",
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.30)",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.28)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* ── Right arrow ────────────────────────────────── */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            width: "46px", height: "46px",
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.30)",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.28)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* ── Dot indicators + counter ────────────────────── */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-350"
              style={{
                width:      i === current ? "28px" : "8px",
                height:     "8px",
                background: i === current ? "#C9973E" : "rgba(255,255,255,0.45)",
                boxShadow:  i === current ? "0 0 8px rgba(201,151,62,0.6)" : "none",
              }}
            />
          ))}
        </div>

        {/* Slide counter — bottom right */}
        <div
          className="absolute bottom-5 right-5 z-20 text-xs font-semibold tabular-nums"
          style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-poppins)" }}
        >
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

        {/* Progress bar — thin auto-play indicator at very top of carousel */}
        {!paused && (
          <motion.div
            key={`progress-${current}`}
            className="absolute top-0 left-0 h-0.5 z-20"
            style={{ background: "#C9973E", transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 4, ease: "linear" }}
          />
        )}
      </div>

      {/* ── Stats strip below carousel ─────────────────── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-3" style={{ borderBottom: "1px solid #F0F0F0" }}>
          {[
            { val: "800+", lbl: "Mangoes Per Weekend" },
            { val: "6",    lbl: "Premium Varieties"   },
            { val: "10+",  lbl: "US States Served"    },
          ].map(({ val, lbl }, i) => (
            <motion.div
              key={lbl}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE_CURVE }}
              className="py-5 text-center"
              style={{ borderRight: i < 2 ? "1px solid #F0F0F0" : "none" }}
            >
              <p className="font-bold text-xl" style={{ fontFamily: "var(--font-poppins)", color: "#15562B" }}>{val}</p>
              <p className="text-xs mt-0.5" style={{ color: "#888888" }}>{lbl}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
