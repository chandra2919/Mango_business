"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const avatarColors = ["#C9973E","#15562B","#A87D2E","#0D3D1E","#B8860B","#166534","#C9973E","#15562B"];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5"
          style={{ fill: i < n ? "#C9973E" : "none", color: i < n ? "#C9973E" : "#D0C8B0" }} />
      ))}
    </div>
  );
}

const cardStyles = [
  { bg: "#FFFFFF", border: "#E8C87A"  },
  { bg: "#FFFFFF", border: "#BBF7D0"  },
  { bg: "#FFFFFF", border: "#E8C87A"  },
];

export function Testimonials() {
  const [cur, setCur]   = useState(0);
  const [auto, setAuto] = useState(true);
  const total           = testimonials.length;

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setCur(c => (c + 1) % total), 5000);
    return () => clearInterval(id);
  }, [auto, total]);

  const prev = () => { setCur(c => (c - 1 + total) % total); setAuto(false); };
  const next = () => { setCur(c => (c + 1) % total); setAuto(false); };

  const vis = [testimonials[cur % total], testimonials[(cur + 1) % total], testimonials[(cur + 2) % total]];

  return (
    <section id="testimonials" className="sec" style={{ background: "#FFFFFF", borderTop: "1px solid #F0F0F0" }}>
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <span className="sec-num">04 — Customer Reviews</span>
          <span className="sec-label block mt-1">Real Families, Real Taste</span>
          <h2 className="sec-heading mt-2 mb-4">What Our Customers Say</h2>
          <p className="sec-body max-w-xl mt-5">Real Indian-American families sharing their mango experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <AnimatePresence mode="popLayout">
            {vis.map((t, i) => (
              <motion.div key={`${t.id}-${cur}-${i}`}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                className={`card-lift rounded-2xl p-5 sm:p-6 cursor-default ${i > 0 ? "hidden md:block" : ""}`}
                style={{ background: cardStyles[i].bg, border: `1.5px solid ${cardStyles[i].border}` }}
              >
                <Stars n={t.rating} />
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#555555" }}>
                  &ldquo;{t.review}&rdquo;
                </p>
                {t.variety && (
                  <span className="tag-gold text-xs mb-3 inline-block">🥭 {t.variety}</span>
                )}
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid #F0F0F0" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: avatarColors[(parseInt(t.id) - 1) % avatarColors.length] }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#111111" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#888888" }}>{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <button onClick={prev}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "#FBF3E0", border: "1.5px solid #E8C87A" }}>
            <ChevronLeft className="w-4 h-4" style={{ color: "#7A5A1E" }} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setCur(i); setAuto(false); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === cur ? "24px" : "8px", height: "8px",
                  background: i === cur ? "#C9973E" : "#E8C87A",
                }} />
            ))}
          </div>
          <button onClick={next}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "#FBF3E0", border: "1.5px solid #E8C87A" }}>
            <ChevronRight className="w-4 h-4" style={{ color: "#7A5A1E" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
