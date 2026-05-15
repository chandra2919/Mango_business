"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const features = [
  {
    n: "01",
    title: "Farm-Direct Sourcing",
    desc: "Sourced directly from trusted orchards in Andhra Pradesh, Maharashtra & Gujarat — no middlemen, no cold-chain delays.",
    border: "#F7C873",
    numColor: "#F4A300",
    barColor: "linear-gradient(90deg, #F4A300, #C9973E)",
    bg: "#FFFFFF",
  },
  {
    n: "02",
    title: "Air-Flown, Not Sea Freight",
    desc: "We airlift mangoes so they arrive in days, not weeks. Every box is freshness-first — quality is never compromised for cost.",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    barColor: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
    bg: "#FFFFFF",
  },
  {
    n: "03",
    title: "USDA Approved & Certified",
    desc: "Every shipment is fully USDA inspected and compliant. You can trust what arrives at your door is safe, clean, and authentic.",
    border: "#F7C873",
    numColor: "#F4A300",
    barColor: "linear-gradient(90deg, #F4A300, #C9973E)",
    bg: "#FFFFFF",
  },
  {
    n: "04",
    title: "Grade A Handpicked Only",
    desc: "Every mango individually selected for size, colour, and ripeness at peak season. No seconds, no shortcuts, ever.",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    barColor: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
    bg: "#FFFFFF",
  },
  {
    n: "05",
    title: "2–4 Day Door Delivery",
    desc: "Confirmed and shipped via overnight or 2-day air freight. Your family gets fresh Indian mangoes within days of harvest.",
    border: "#F7C873",
    numColor: "#F4A300",
    barColor: "linear-gradient(90deg, #F4A300, #C9973E)",
    bg: "#FFFFFF",
  },
  {
    n: "06",
    title: "1000+ Happy Families",
    desc: "Indian-American families across 10+ US states trust MangoRoots every season. Repeat customers are our biggest pride.",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    barColor: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
    bg: "#FFFFFF",
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
      style={{
        background: "#FFFDF7",
        borderTop: "1px solid #F0EDE6",
      }}
    >
      <div className="page-wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <span className="sec-num">02 — Why MangoRoots</span>
          <span className="sec-label block mt-1">Our Commitment to You</span>
          <h2 className="sec-heading mt-2 mb-4">
            Real Indian Mangoes.{" "}
            <span style={{ color: "#2D6A4F" }}>No Compromise.</span>
          </h2>
          <p className="sec-body max-w-xl mt-5">
            We do one thing and we do it well — authentic Indian mangoes, fresh to your
            USA door, every single season.
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
                  borderRadius: "20px",
                  border: `1.5px solid ${f.border}`,
                  background: f.bg,
                  padding: "2rem 2rem 2.25rem",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.35s ease",
                }}
              >
                {/* Large italic number watermark — decorative only */}
                <span
                  className="absolute top-2 right-4 select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "5rem",
                    fontWeight: 700,
                    color: f.numColor,
                    opacity: 0.09,
                    lineHeight: 1,
                  }}
                >
                  {f.n}
                </span>

                {/* Numbered dot */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "8px",
                      background: f.numColor === "#F4A300" ? "#FFF8EC" : "#E9F5EC",
                      border: `1.5px solid ${f.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: f.numColor,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {f.n}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.95rem",
                    color: "#1A1A1A",
                    lineHeight: 1.3,
                  }}
                >
                  {f.title}
                </h3>

                {/* Description */}
                <p
                  className="flex-1"
                  style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#4A4A4A" }}
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
