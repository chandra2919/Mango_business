"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const stats = [
  {
    value: 800,
    suffix: "+",
    label: "Mangoes Every Weekend",
    sub: "Sold fresh every Saturday & Sunday",
    border: "#F7C873",
    numColor: "#F4A300",
    featured: false,
  },
  {
    value: 500,
    suffix: "+",
    label: "Weekday Orders",
    sub: "Consistent daily demand nationwide",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    featured: false,
  },
  {
    value: 6,
    suffix: "",
    label: "Premium Varieties",
    sub: "Banginapalli, Alphonso, Rasalu & more",
    border: "#F7C873",
    numColor: "#F4A300",
    featured: true,
  },
  {
    value: 10,
    suffix: "+",
    label: "US States We Deliver",
    sub: "CA, TX, NY, NJ, IL, GA, FL & more",
    border: "#B7DEC8",
    numColor: "#2D6A4F",
    featured: false,
  },
];

export function TrustStats() {
  return (
    <section
      id="stats"
      className="py-16"
      style={{
        background: "#FFFDF7",
        borderBottom: "1px solid #F0EDE6",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "#C9973E", fontFamily: "var(--font-poppins)", letterSpacing: "0.18em" }}
          >
            By The Numbers
          </p>
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            Trusted by Indian Families Across the USA
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: EASE }}
              whileHover={{ y: -6 }}
              className="relative cursor-default"
              style={{
                borderRadius: "20px",
                border: `1.5px solid ${s.border}`,
                background: "#FFFFFF",
                padding: s.featured ? "clamp(1.25rem,3vw,2.25rem) 1rem clamp(1.5rem,3vw,2.5rem)" : "clamp(1rem,2.5vw,2rem) 1rem clamp(1.25rem,2.5vw,2.25rem)",
                boxShadow: s.featured
                  ? "0 8px 32px rgba(244,163,0,0.10), 0 2px 8px rgba(0,0,0,0.03)"
                  : "0 2px 16px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.35s ease",
              }}
            >
              {/* Featured badge */}
              {s.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-white font-bold"
                  style={{
                    background: "linear-gradient(90deg, #F4A300, #C9973E)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.10em",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 10px rgba(244,163,0,0.30)",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Thin top accent line */}
              <div
                className="absolute top-0 left-8 right-8"
                style={{
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${s.border}, transparent)`,
                  borderRadius: "0 0 2px 2px",
                }}
              />

              {/* Number */}
              <div
                className="font-extrabold mb-2"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: s.featured ? "clamp(1.8rem,5vw,2.8rem)" : "clamp(1.6rem,4.5vw,2.4rem)",
                  lineHeight: 1,
                  color: s.numColor,
                  letterSpacing: "-0.04em",
                }}
              >
                <AnimatedCounter to={s.value} suffix={s.suffix} duration={2.2} />
              </div>

              {/* Label */}
              <p
                className="font-semibold mb-1.5"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "0.83rem",
                  color: "#1A1A1A",
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </p>

              {/* Sub */}
              <p style={{ fontSize: "0.72rem", color: "#7A7A7A", lineHeight: 1.5 }}>
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
