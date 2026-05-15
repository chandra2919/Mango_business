"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/*
  CSS-only icon marks — pure geometry, zero emojis.
  Each one visually encodes the concept through shape alone.
*/

// 01 Farm — three horizontal lines of decreasing width (field rows)
function IconFarm({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4.5px", width: "22px" }}>
      {[22, 16, 10].map((w, i) => (
        <div key={i} style={{ width: w, height: 2.5, background: color, borderRadius: 2, opacity: 1 - i * 0.2 }} />
      ))}
    </div>
  );
}

// 02 Air freight — thin diagonal arrow pointing up-right
function IconAir({ color }: { color: string }) {
  return (
    <div style={{ position: "relative", width: 22, height: 22 }}>
      <div style={{
        position: "absolute", bottom: 2, left: 2,
        width: 18, height: 2.5, background: color,
        borderRadius: 2, transformOrigin: "left center",
        transform: "rotate(-40deg)",
      }} />
      <div style={{
        position: "absolute", top: 2, right: 2,
        width: 8, height: 2.5, background: color, borderRadius: 2,
      }} />
      <div style={{
        position: "absolute", top: 2, right: 2,
        width: 2.5, height: 8, background: color, borderRadius: 2,
      }} />
    </div>
  );
}

// 03 Certified — square with inner check-mark made of two rects
function IconCert({ color }: { color: string }) {
  return (
    <div style={{ position: "relative", width: 20, height: 20 }}>
      <div style={{
        position: "absolute", inset: 0,
        border: `2px solid ${color}`, borderRadius: 5,
      }} />
      {/* tick — short left stroke */}
      <div style={{
        position: "absolute", bottom: 5, left: 4,
        width: 5, height: 2.5, background: color,
        borderRadius: 1, transform: "rotate(40deg)",
        transformOrigin: "right center",
      }} />
      {/* tick — long right stroke */}
      <div style={{
        position: "absolute", bottom: 6, left: 6,
        width: 9, height: 2.5, background: color,
        borderRadius: 1, transform: "rotate(-50deg)",
        transformOrigin: "left center",
      }} />
    </div>
  );
}

// 04 Grade-A — three stacked dots of decreasing size (podium / ranking)
function IconGrade({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
      {[10, 16, 12].map((h, i) => (
        <div key={i} style={{
          width: 6, height: h,
          background: color,
          borderRadius: 3,
          opacity: i === 1 ? 1 : 0.55,
        }} />
      ))}
    </div>
  );
}

// 05 Delivery — rounded rect (box) with two circle wheels below
function IconDeliver({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
      <div style={{ width: 20, height: 11, border: `2px solid ${color}`, borderRadius: 4 }} />
      <div style={{ display: "flex", gap: 6 }}>
        {[0, 1].map(i => (
          <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", border: `2px solid ${color}` }} />
        ))}
      </div>
    </div>
  );
}

// 06 Families — two circles side by side (people)
function IconFamily({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", gap: "5px", alignItems: "flex-end" }}>
      {[12, 16].map((size, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div style={{ width: size * 0.55, height: size * 0.55, borderRadius: "50%", background: color, opacity: i === 1 ? 1 : 0.6 }} />
          <div style={{ width: size, height: size * 0.45, background: color, borderRadius: `${size * 0.3}px ${size * 0.3}px 0 0`, opacity: i === 1 ? 1 : 0.6 }} />
        </div>
      ))}
    </div>
  );
}

const features = [
  {
    n: "01",
    Icon: IconFarm,
    title: "Farm-Direct Sourcing",
    desc: "Sourced directly from trusted orchards in Andhra Pradesh, Maharashtra & Gujarat — no middlemen, no cold-chain delays.",
    bg: "#FFFFFF",
    iconBg: "#FFF8EC",
    border: "#F7C873",
    shapeColor: "#F4A300",
    numColor: "#F4A300",
    accentBar: "linear-gradient(90deg, #F4A300, #C9973E)",
  },
  {
    n: "02",
    Icon: IconAir,
    title: "Air-Flown, Not Sea Freight",
    desc: "We airlift mangoes so they arrive in days, not weeks. Every box is freshness-first — quality is never compromised for cost.",
    bg: "#FFFFFF",
    iconBg: "#E9F5EC",
    border: "#B7DEC8",
    shapeColor: "#2D6A4F",
    numColor: "#2D6A4F",
    accentBar: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
  },
  {
    n: "03",
    Icon: IconCert,
    title: "USDA Approved & Certified",
    desc: "Every shipment is fully USDA inspected and compliant. You can trust what arrives at your door is safe, clean, and authentic.",
    bg: "#FFFDF7",
    iconBg: "#FFF8EC",
    border: "#F7C873",
    shapeColor: "#F4A300",
    numColor: "#F4A300",
    accentBar: "linear-gradient(90deg, #F4A300, #C9973E)",
  },
  {
    n: "04",
    Icon: IconGrade,
    title: "Grade A Handpicked Only",
    desc: "Every mango individually selected for size, colour, and ripeness at peak season. No seconds, no shortcuts, ever.",
    bg: "#FFFFFF",
    iconBg: "#E9F5EC",
    border: "#B7DEC8",
    shapeColor: "#2D6A4F",
    numColor: "#2D6A4F",
    accentBar: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
  },
  {
    n: "05",
    Icon: IconDeliver,
    title: "2–4 Day Door Delivery",
    desc: "Confirmed and shipped via overnight or 2-day air freight. Your family gets fresh Indian mangoes within days of harvest.",
    bg: "#FFFFFF",
    iconBg: "#FFF8EC",
    border: "#F7C873",
    shapeColor: "#F4A300",
    numColor: "#F4A300",
    accentBar: "linear-gradient(90deg, #F4A300, #C9973E)",
  },
  {
    n: "06",
    Icon: IconFamily,
    title: "1000+ Happy Families",
    desc: "Indian-American families across 10+ US states trust MangoRoots every season. Repeat customers are our biggest pride.",
    bg: "#FFFDF7",
    iconBg: "#E9F5EC",
    border: "#B7DEC8",
    shapeColor: "#2D6A4F",
    numColor: "#2D6A4F",
    accentBar: "linear-gradient(90deg, #2D6A4F, #B7DEC8)",
  },
];

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
      {/* CSS-only decorative corner mark — no emoji */}
      <div
        className="pointer-events-none select-none absolute right-8 top-10"
        aria-hidden="true"
        style={{ opacity: 0.06 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[60, 45, 30, 15].map((w, i) => (
            <div key={i} style={{
              width: w,
              height: 3,
              background: "#F4A300",
              borderRadius: 2,
              marginLeft: "auto",
            }} />
          ))}
        </div>
      </div>

      <div className="page-wrap relative">

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
            Real Indian Mangoes.<br />
            <span style={{ color: "#2D6A4F" }}>No Compromise.</span>
          </h2>
          <p className="sec-body max-w-xl mt-5">
            We do one thing and we do it well — authentic Indian mangoes, fresh to your USA
            door, every single season.
          </p>
        </motion.div>

        {/* Cards */}
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
                {/* Faint italic number watermark */}
                <span
                  className="absolute top-3 right-4 select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "4.5rem",
                    fontWeight: 700,
                    color: f.numColor,
                    opacity: 0.07,
                    lineHeight: 1,
                  }}
                >
                  {f.n}
                </span>

                {/* CSS shape icon bubble */}
                <div
                  className="flex items-center justify-center mb-5"
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    background: f.iconBg,
                    border: `1px solid ${f.border}`,
                    flexShrink: 0,
                  }}
                >
                  <f.Icon color={f.shapeColor} />
                </div>

                {/* Title */}
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

                {/* Description */}
                <p className="flex-1" style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#4A4A4A" }}>
                  {f.desc}
                </p>

                {/* Accent bar */}
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
