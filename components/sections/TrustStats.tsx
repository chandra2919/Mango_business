"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const stats = [
  { value: 800, suffix: "+", label: "Mangoes Every Weekend",   sub: "Sold fresh each Saturday & Sunday",     border: "#E8C87A",  numColor: "#C9973E" },
  { value: 500, suffix: "+", label: "Weekday Orders",           sub: "Consistent daily demand nationwide",     border: "#BBF7D0", numColor: "#15562B" },
  { value: 6,   suffix: "",  label: "Premium Varieties",        sub: "Banginapalli, Alphonso, Rasalu & more", border: "#E8C87A",  numColor: "#C9973E" },
  { value: 10,  suffix: "+", label: "US States We Deliver To",  sub: "CA, TX, NY, NJ, IL, GA, FL & more",    border: "#BBF7D0", numColor: "#15562B" },
];

export function TrustStats() {
  return (
    <section id="stats" className="py-14" style={{ background: "#FFFFFF", borderBottom: "1px solid #F0F0F0" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="card-lift rounded-xl py-8 px-5 text-center cursor-default"
              style={{ border: `1.5px solid ${s.border}`, background: "#FFFFFF" }}
            >
              <div className="text-3xl font-bold mb-1.5"
                style={{ fontFamily: "var(--font-poppins)", color: s.numColor }}>
                <AnimatedCounter to={s.value} suffix={s.suffix} duration={2} />
              </div>
              <p className="text-sm font-semibold mb-1" style={{ color: "#111111" }}>{s.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
