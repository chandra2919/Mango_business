"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  {
    value: 800, suffix: "+",
    label: "Mangoes Every Weekend",
    description: "Fresh stock sold to happy families across the USA each weekend",
    emoji: "🥭",
    bg: "#FDF8F2", border: "#EDD9BC", iconBg: "#F5EBD8",
  },
  {
    value: 500, suffix: "+",
    label: "Weekday Orders",
    description: "Consistent demand every weekday from our loyal customer base",
    emoji: "📦",
    bg: "#F8F5FF", border: "#DDD5F0", iconBg: "#EEEAF8",
  },
  {
    value: 6, suffix: "",
    label: "Premium Varieties",
    description: "Banginapalli, Rasalu, Alphonso, Kesar, Himayat & Mallika",
    emoji: "✨",
    bg: "#F2FAF5", border: "#BCDECB", iconBg: "#DAEEE3",
  },
  {
    value: 10, suffix: "+",
    label: "States Delivered",
    description: "From California to New York — coast to coast freshness",
    emoji: "🚚",
    bg: "#F2F6FD", border: "#BCCFE8", iconBg: "#DAEAF6",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.11 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-flex">📊 Our Numbers</span>
          <h2 className="heading-section mb-4" style={{ color: "#2E2520" }}>
            Trusted by{" "}
            <span className="mango-gradient-text">Thousands of Families</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Every weekend, hundreds of Indian-American families rely on MangoRoots
            for the authentic taste of home.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group rounded-2xl p-7 overflow-hidden cursor-default"
              style={{
                background: s.bg,
                border: `1px solid ${s.border}`,
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-2xl"
                style={{ background: s.iconBg }}
              >
                {s.emoji}
              </div>

              <div className="font-display text-4xl font-bold mb-1" style={{ color: "#2E2520" }}>
                <AnimatedCounter to={s.value} suffix={s.suffix} duration={2.2} />
              </div>

              <h3 className="font-display font-semibold text-base mb-2" style={{ color: "#3A2E28" }}>
                {s.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#7A6B62" }}>
                {s.description}
              </p>

              {/* decorative corner emoji */}
              <div className="absolute top-4 right-4 text-3xl opacity-10 group-hover:opacity-20 transition-opacity select-none">
                {s.emoji}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm mt-10"
          style={{ color: "#B8A898" }}
        >
          Fresh seasonal stock available every week · Limited quantities · Order early
        </motion.p>
      </div>
    </section>
  );
}
