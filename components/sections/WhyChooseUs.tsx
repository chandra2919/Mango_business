"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const features = [
  {
    n: "01",
    icon: "🌾",
    title: "Farm-Direct Sourcing",
    desc: "Sourced directly from trusted orchards in Andhra Pradesh, Maharashtra & Gujarat — no middlemen, no cold-chain delays.",
    bg: "#FFFFFF",
    iconBg: "#FFF8EC",
    border: "#F7C873",
    numColor: "#F4A300",
    accentBar: "linear-gradient(90deg, #F4A300, #C9973E)",
  },
  {
    n: "02",
    icon: "✈️",
    title: "Air-Flown, Not Sea Freight",
    desc: "We airlift mangoes so they arrive in days, not weeks. Every box is freshness-first — quality is never compromised for cost.",
    bg: "#FFFFFF",
    iconBg: "#E9F5EC",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    accentBar: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
  },
  {
    n: "03",
    icon: "✅",
    title: "USDA Approved & Certified",
    desc: "Every shipment is fully USDA inspected and compliant. You can trust what arrives at your door is safe, clean, and authentic.",
    bg: "#FFFDF7",
    iconBg: "#FFF8EC",
    border: "#F7C873",
    numColor: "#F4A300",
    accentBar: "linear-gradient(90deg, #F4A300, #C9973E)",
  },
  {
    n: "04",
    icon: "🏅",
    title: "Grade A Handpicked Only",
    desc: "Every mango individually selected for size, colour, and ripeness at peak season. No seconds, no shortcuts, ever.",
    bg: "#FFFFFF",
    iconBg: "#E9F5EC",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    accentBar: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
  },
  {
    n: "05",
    icon: "🚚",
    title: "2–4 Day Door Delivery",
    desc: "Confirmed and shipped via overnight or 2-day air freight. Your family gets fresh Indian mangoes within days of harvest.",
    bg: "#FFFFFF",
    iconBg: "#FFF8EC",
    border: "#F7C873",
    numColor: "#F4A300",
    accentBar: "linear-gradient(90deg, #F4A300, #C9973E)",
  },
  {
    n: "06",
    icon: "❤️",
    title: "1000+ Happy Families",
    desc: "Indian-American families across 10+ US states trust MangoRoots every season. Repeat customers are our biggest pride.",
    bg: "#FFFDF7",
    iconBg: "#E9F5EC",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    accentBar: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
  },
];

/* Scroll direction: left col from left, right col from right */
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
        background: "linear-gradient(180deg, #FFFDF7 0%, #FFF8EC 50%, #FFFDF7 100%)",
        borderTop: "1px solid #F0EDE6",
      }}
    >
      {/* Faint decorative leaf — top right */}
      <div
        className="pointer-events-none select-none absolute right-8 top-12 text-6xl"
        style={{ opacity: 0.06, transform: "rotate(25deg)" }}
        aria-hidden="true"
      >
        🌿
      </div>

      <div className="page-wrap relative">

        {/* Section header */}
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
            Real Indian Mangoes.<br />
            <span style={{ color: "#2D6A4F" }}>No Compromise.</span>
          </h2>
          <p className="sec-body max-w-xl mt-5">
            We do one thing and we do it well — authentic Indian mangoes, fresh to your USA door,
            every single season.
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
                className="relative cursor-default flex flex-col"
                style={{
                  borderRadius: "22px",
                  border: `1.5px solid ${f.border}`,
                  background: f.bg,
                  padding: "1.75rem 1.75rem 2rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.38s ease",
                  overflow: "hidden",
                }}
              >
                {/* Faint large italic number — decorative background */}
                <span
                  className="absolute top-3 right-4 select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "4.5rem",
                    fontWeight: 700,
                    color: f.numColor,
                    opacity: 0.08,
                    lineHeight: 1,
                  }}
                >
                  {f.n}
                </span>

                {/* Icon bubble */}
                <div
                  className="flex items-center justify-center mb-5"
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    background: f.iconBg,
                    border: `1px solid ${f.border}`,
                    fontSize: "1.4rem",
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>

                {/* Content */}
                <h3
                  className="font-bold mb-2.5"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.95rem",
                    color: "#1A1A1A",
                    lineHeight: 1.3,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  className="flex-1"
                  style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#4A4A4A" }}
                >
                  {f.desc}
                </p>

                {/* Bottom accent bar */}
                <div
                  className="mt-5"
                  style={{
                    height: "2.5px",
                    width: "40px",
                    background: f.accentBar,
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
