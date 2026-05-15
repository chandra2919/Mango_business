"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const features = [
  {
    n: "01",
    title: "Farm-Direct Sourcing",
    desc: "Sourced directly from trusted orchards in Andhra Pradesh, Maharashtra & Gujarat — no middlemen, no cold-chain delays.",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    barColor: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
  },
  {
    n: "02",
    title: "Air-Flown, Not Sea Freight",
    desc: "We airlift mangoes so they arrive in days, not weeks. Every box is freshness-first — quality is never compromised for cost.",
    border: "#F7C873",
    numColor: "#C9973E",
    barColor: "linear-gradient(90deg, #C9973E, #F7C873)",
  },
  {
    n: "03",
    title: "USDA Approved & Certified",
    desc: "All imports fully USDA inspected and compliant with US agricultural import regulations.",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    barColor: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
  },
  {
    n: "04",
    title: "Grade A Handpicked Only",
    desc: "Every mango individually selected for size, colour, and ripeness at peak season. No seconds, no shortcuts, ever.",
    border: "#F7C873",
    numColor: "#C9973E",
    barColor: "linear-gradient(90deg, #C9973E, #F7C873)",
  },
  {
    n: "05",
    title: "2–4 Day Door Delivery",
    desc: "Confirmed and shipped via overnight or 2-day air freight. Your family gets fresh Indian mangoes within days of harvest.",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    barColor: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
  },
  {
    n: "06",
    title: "1000+ Happy Families",
    desc: "Indian-American families across 10+ US states trust MangoRoots every season. Repeat customers are our biggest pride.",
    border: "#F7C873",
    numColor: "#C9973E",
    barColor: "linear-gradient(90deg, #C9973E, #F7C873)",
  },
];

/* Scroll entry: left col ← left, center ↑ bottom, right col → right */
const entryDir = (i: number) => {
  const col = i % 3;
  if (col === 0) return { x: -50, y: 0 };
  if (col === 2) return { x:  50, y: 0 };
  return             { x:   0, y: 35 };
};

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="sec"
      style={{ position: "relative", background: "#FFFFFF", borderTop: "1px solid #F0F0F0", overflow: "hidden" }}
    >
      {/* ── Background image — very subtle texture/depth layer ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/cover5_div4.jpg"
          alt=""
          fill
          priority={false}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Warm ivory overlay — toned down so background image is clearly visible */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, rgba(255,253,247,0.62) 0%, rgba(255,248,236,0.55) 50%, rgba(255,253,247,0.62) 100%)",
          }}
        />
      </div>

      <div className="page-wrap" style={{ position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <span className="sec-num">02 — Why MangoRoots</span>
          <span className="sec-label block mt-1">Our Commitment to Quality</span>
          <h2 className="sec-heading mt-2 mb-4">What Makes Us Different</h2>
          <p className="sec-body max-w-xl mt-5">
            We do one thing and we do it well — authentic Indian mangoes, fresh to your USA door.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const dir = entryDir(i);
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: dir.x, y: dir.y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.09, ease: EASE }}
                whileHover={{ y: -6 }}
                className="relative cursor-default flex flex-col overflow-hidden"
                style={{
                  borderRadius: "18px",
                  border: `1.5px solid ${f.border}`,
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  padding: "1.75rem 1.75rem 2rem",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  transition: "box-shadow 0.35s ease",
                }}
              >
                {/* Large faint italic number — top-left watermark, decorative only */}
                <span
                  className="select-none pointer-events-none block mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    color: f.numColor,
                    opacity: 0.35,
                    lineHeight: 1,
                  }}
                >
                  {f.n}
                </span>

                {/* Title */}
                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.92rem",
                    color: "#111111",
                    lineHeight: 1.3,
                  }}
                >
                  {f.title}
                </h3>

                {/* Description */}
                <p
                  className="flex-1"
                  style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#555555" }}
                >
                  {f.desc}
                </p>

                {/* Bottom accent bar */}
                <div
                  className="mt-5"
                  style={{
                    height: "2.5px",
                    width: "36px",
                    background: f.barColor,
                    borderRadius: "2px",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
