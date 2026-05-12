"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5"
          style={{ fill: i < rating ? "#D4922A" : "none", color: i < rating ? "#D4922A" : "#D0C8C0" }} />
      ))}
    </div>
  );
}

const avatarGrads = [
  "linear-gradient(135deg,#C8832A,#E0A840)",
  "linear-gradient(135deg,#A05070,#C87890)",
  "linear-gradient(135deg,#6060B0,#8080C8)",
  "linear-gradient(135deg,#3A8A60,#5AAA80)",
  "linear-gradient(135deg,#4060A8,#6080C0)",
  "linear-gradient(135deg,#B07020,#D09040)",
  "linear-gradient(135deg,#903040,#B05060)",
  "linear-gradient(135deg,#308888,#50A8A8)",
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const total = testimonials.length;

  const prev = () => { setCurrent(c => (c - 1 + total) % total); setAutoPlay(false); };
  const next = () => { setCurrent(c => (c + 1) % total); setAutoPlay(false); };

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => setCurrent(c => (c + 1) % total), 4500);
    return () => clearInterval(id);
  }, [autoPlay, total]);

  const visible = [
    testimonials[current % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ];

  return (
    /* Soft warm cream background — not dark */
    <section id="testimonials" className="py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F4EFE6 0%, #EDE5D8 100%)" }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-flex">💬 Real Reviews</span>
          <h2 className="heading-section mb-4" style={{ color: "#2E2520" }}>
            What Our{" "}
            <span className="mango-gradient-text">Customers Say</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Real families, real emotions, real Indian mangoes.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.id}-${current}-${i}`}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.96 }}
                transition={{ duration: 0.38, delay: i * 0.06 }}
                className="rounded-2xl p-7"
                style={{
                  background: i === 0 ? "#FFFFFF" : "rgba(255,255,255,0.70)",
                  border: "1px solid #E8DDD0",
                  boxShadow: i === 0 ? "0 4px 24px rgba(184,115,42,0.10)" : "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                {/* Quote icon */}
                <Quote className="w-7 h-7 mb-4" style={{ color: "#D4B896" }} />

                <p className="text-sm leading-relaxed mb-5" style={{ color: "#5A4A42" }}>
                  &ldquo;{t.review}&rdquo;
                </p>

                {t.variety && (
                  <div
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium mb-4"
                    style={{ background: "#F5EBD8", color: "#8B5218", border: "1px solid #E2C99A" }}
                  >
                    🥭 {t.variety}
                  </div>
                )}

                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: avatarGrads[parseInt(t.id) - 1] ?? avatarGrads[0] }}
                  >
                    <span className="text-white font-bold text-xs">{t.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate" style={{ color: "#2E2520" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#9A8880" }}>{t.location}</p>
                  </div>
                  <StarRating rating={t.rating} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button onClick={prev} aria-label="Previous"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px solid #E0D4C4" }}>
            <ChevronLeft className="w-5 h-5" style={{ color: "#7A6B62" }} />
          </button>

          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setAutoPlay(false); }}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  background: i === current ? "#B8732A" : "#D4C4B8",
                }}
              />
            ))}
          </div>

          <button onClick={next} aria-label="Next"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px solid #E0D4C4" }}>
            <ChevronRight className="w-5 h-5" style={{ color: "#7A6B62" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
