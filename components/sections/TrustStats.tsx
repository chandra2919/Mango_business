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
    icon: "🥭",
    border: "#F7C873",
    iconBg: "#FFF8EC",
    numColor: "#F4A300",
    featured: false,
  },
  {
    value: 500,
    suffix: "+",
    label: "Weekday Orders",
    sub: "Consistent daily demand nationwide",
    icon: "📦",
    border: "#B7DEC8",
    iconBg: "#E9F5EC",
    numColor: "#2D6A4F",
    featured: false,
  },
  {
    value: 6,
    suffix: "",
    label: "Premium Varieties",
    sub: "Banginapalli, Alphonso, Rasalu & more",
    icon: "🌿",
    border: "#F7C873",
    iconBg: "#FFE8B6",
    numColor: "#F4A300",
    featured: true,
  },
  {
    value: 10,
    suffix: "+",
    label: "US States We Deliver",
    sub: "CA, TX, NY, NJ, IL, GA, FL & more",
    icon: "✈️",
    border: "#B7DEC8",
    iconBg: "#E9F5EC",
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
        background: "linear-gradient(160deg, #FFFDF7 0%, #FFF8EC 60%, #F2FAF5 100%)",
        borderBottom: "1px solid #F0EDE6",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{
              color: "#C9973E",
              fontFamily: "var(--font-poppins)",
              letterSpacing: "0.18em",
            }}
          >
            ✦ &nbsp;By The Numbers&nbsp; ✦
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

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.58, delay: i * 0.10, ease: EASE }}
              whileHover={{ y: -6 }}
              className="relative cursor-default"
              style={{
                borderRadius: "22px",
                border: `1.5px solid ${s.border}`,
                background: "#FFFFFF",
                padding: s.featured ? "2rem 1.5rem 2.25rem" : "1.75rem 1.5rem 2rem",
                boxShadow: s.featured
                  ? "0 8px 32px rgba(244,163,0,0.12), 0 2px 8px rgba(0,0,0,0.04)"
                  : "0 4px 20px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.38s ease",
              }}
            >
              {/* "Most Popular" badge on featured card */}
              {s.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-white font-bold"
                  style={{
                    background: "linear-gradient(90deg, #F4A300, #C9973E)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.10em",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 10px rgba(244,163,0,0.35)",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Icon bubble */}
              <div
                className="flex items-center justify-center mb-4"
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: s.iconBg,
                  border: `1px solid ${s.border}`,
                  fontSize: "1.25rem",
                }}
              >
                {s.icon}
              </div>

              {/* Number */}
              <div
                className="font-bold mb-2"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: s.featured ? "2.5rem" : "2.1rem",
                  lineHeight: 1,
                  color: s.numColor,
                  letterSpacing: "-0.03em",
                }}
              >
                <AnimatedCounter to={s.value} suffix={s.suffix} duration={2.2} />
              </div>

              {/* Label */}
              <p
                className="font-semibold mb-1.5"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "0.82rem",
                  color: "#1A1A1A",
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </p>

              {/* Sub text */}
              <p style={{ fontSize: "0.72rem", color: "#7A7A7A", lineHeight: 1.5 }}>
                {s.sub}
              </p>

              {/* Bottom gradient accent */}
              <div
                className="absolute bottom-0 left-6 right-6"
                style={{
                  height: "2.5px",
                  background: `linear-gradient(90deg, transparent, ${s.border}, transparent)`,
                  borderRadius: "2px",
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
