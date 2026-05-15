"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/*
  CSS-only icon shapes — no emojis, no SVGs, no icon libraries.
  Each shape is rendered purely through div geometry + CSS.
*/
type ShapeProps = { color: string; bg: string; border: string };

function ShapeBar({ color, bg, border }: ShapeProps) {
  // Three stacked horizontal bars (like a signal / quantity indicator)
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {[100, 70, 45].map((w, i) => (
        <div
          key={i}
          style={{
            width: `${w}%`,
            height: "3px",
            background: color,
            borderRadius: "2px",
            opacity: 1 - i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

function ShapeGrid({ color }: { color: string }) {
  // 2×2 dot grid (delivery boxes / variety grid feel)
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px" }}>
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "3px",
            background: color,
            opacity: i % 2 === 0 ? 1 : 0.45,
          }}
        />
      ))}
    </div>
  );
}

function ShapeDiamond({ color }: { color: string }) {
  // Single rotated square — clean geometric premium mark
  return (
    <div
      style={{
        width: "16px",
        height: "16px",
        background: `linear-gradient(135deg, ${color}, ${color}88)`,
        borderRadius: "3px",
        transform: "rotate(45deg)",
      }}
    />
  );
}

function ShapePin({ color }: { color: string }) {
  // Abstracted location / reach indicator: circle + vertical line
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
      <div
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: `2.5px solid ${color}`,
        }}
      />
      <div
        style={{ width: "2.5px", height: "8px", background: color, borderRadius: "2px" }}
      />
    </div>
  );
}

const stats = [
  {
    value: 800,
    suffix: "+",
    label: "Mangoes Every Weekend",
    sub: "Sold fresh every Saturday & Sunday",
    Shape: (p: ShapeProps) => <ShapeBar {...p} />,
    border: "#F7C873",
    iconBg: "#FFF8EC",
    shapeColor: "#F4A300",
    numColor: "#F4A300",
    featured: false,
  },
  {
    value: 500,
    suffix: "+",
    label: "Weekday Orders",
    sub: "Consistent daily demand nationwide",
    Shape: (p: ShapeProps) => <ShapeGrid color={p.color} />,
    border: "#B7DEC8",
    iconBg: "#E9F5EC",
    shapeColor: "#2D6A4F",
    numColor: "#2D6A4F",
    featured: false,
  },
  {
    value: 6,
    suffix: "",
    label: "Premium Varieties",
    sub: "Banginapalli, Alphonso, Rasalu & more",
    Shape: (p: ShapeProps) => <ShapeDiamond color={p.color} />,
    border: "#F7C873",
    iconBg: "#FFE8B6",
    shapeColor: "#F4A300",
    numColor: "#F4A300",
    featured: true,
  },
  {
    value: 10,
    suffix: "+",
    label: "US States We Deliver",
    sub: "CA, TX, NY, NJ, IL, GA, FL & more",
    Shape: (p: ShapeProps) => <ShapePin color={p.color} />,
    border: "#B7DEC8",
    iconBg: "#E9F5EC",
    shapeColor: "#2D6A4F",
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

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-12"
        >
          {/* Pure CSS ornament — two thin lines flanking a rotated square */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #F7C873)" }} />
            <div
              style={{
                width: "7px", height: "7px",
                background: "#C9973E",
                borderRadius: "1.5px",
                transform: "rotate(45deg)",
              }}
            />
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #F7C873, transparent)" }} />
          </div>

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
              {/* Featured pill */}
              {s.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-white font-bold"
                  style={{
                    background: "linear-gradient(90deg, #F4A300, #C9973E)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.10em",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 10px rgba(244,163,0,0.35)",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* CSS shape container — replaces emoji icon bubble */}
              <div
                className="flex items-center justify-center mb-5"
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: s.iconBg,
                  border: `1px solid ${s.border}`,
                }}
              >
                <s.Shape color={s.shapeColor} bg={s.iconBg} border={s.border} />
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

              {/* Sub */}
              <p style={{ fontSize: "0.72rem", color: "#7A7A7A", lineHeight: 1.5 }}>
                {s.sub}
              </p>

              {/* Bottom gradient accent line */}
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
