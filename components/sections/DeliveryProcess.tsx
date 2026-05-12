"use client";

import { motion } from "framer-motion";
import { Leaf, Package, Plane, Home } from "lucide-react";

const steps = [
  {
    step: 1, icon: Leaf,
    title: "Orchard Harvest",
    description: "Mangoes are handpicked at peak ripeness from partner orchards in Andhra Pradesh, Maharashtra & Gujarat.",
    detail: "Vijayawada · Ratnagiri · Gir",
    emoji: "🌳",
    bg: "#F2F8F4", border: "#C8E0CC", iconBg: "#DAF0DF", iconColor: "#3A7D5A",
  },
  {
    step: 2, icon: Package,
    title: "Premium Packaging",
    description: "Each mango is individually cushioned to prevent bruising during the long journey to the USA.",
    detail: "Zero damage guarantee",
    emoji: "📦",
    bg: "#FDF8F0", border: "#EDD9BC", iconBg: "#F5EBD8", iconColor: "#8B5218",
  },
  {
    step: 3, icon: Plane,
    title: "Direct Air Freight",
    description: "Air-flown from India — not sea freight. Keeps mangoes fresh, fragrant, and perfectly ripened on arrival.",
    detail: "India → USA in 24–36 hrs",
    emoji: "✈️",
    bg: "#F2F5FD", border: "#C4D4EC", iconBg: "#DAEAF6", iconColor: "#3A5C8A",
  },
  {
    step: 4, icon: Home,
    title: "Fresh to Your Door",
    description: "USDA inspected and delivered to your doorstep in 2–4 days. Track via WhatsApp updates.",
    detail: "10+ states across USA",
    emoji: "🏠",
    bg: "#FDF4F4", border: "#E8C8C8", iconBg: "#F8DADA", iconColor: "#8A3A3A",
  },
];

export function DeliveryProcess() {
  return (
    <section id="delivery" className="py-24 md:py-32" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-flex">✈️ Our Process</span>
          <h2 className="heading-section mb-4" style={{ color: "#2E2520" }}>
            From Orchard to{" "}
            <span className="mango-gradient-text">Your Table</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            A carefully managed journey preserving every drop of flavour from harvest to your door.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div
            className="absolute top-16 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, #C8E0CC, #EDD9BC, #C4D4EC, #E8C8C8)" }}
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.11 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 z-10"
                    style={{
                      background: s.iconBg,
                      border: `2px solid ${s.border}`,
                      boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: s.iconColor }} />
                    <div
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ background: "#3A2E28" }}
                    >
                      {s.step}
                    </div>
                  </motion.div>

                  <span className="text-2xl mb-3">{s.emoji}</span>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: "#2E2520" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#7A6B62" }}>{s.description}</p>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: s.bg, color: s.iconColor, border: `1px solid ${s.border}` }}
                  >
                    {s.detail}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-2xl"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: s.iconBg, border: `1px solid ${s.border}` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.iconColor }} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-3 min-h-[20px]" style={{ background: "#E0D4C4" }} />
                  )}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold" style={{ color: "#B8A898" }}>STEP {s.step}</span>
                    <span>{s.emoji}</span>
                  </div>
                  <h3 className="font-display font-bold text-base mb-1" style={{ color: "#2E2520" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-1.5" style={{ color: "#7A6B62" }}>{s.description}</p>
                  <span className="text-xs font-semibold" style={{ color: s.iconColor }}>{s.detail}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm"
            style={{ background: "#FFFFFF", border: "1px solid #E8DDD0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
          >
            <span>⚡</span>
            <span style={{ color: "#5A4A42" }}>Average delivery:</span>
            <span className="font-semibold" style={{ color: "#B8732A" }}>2–4 business days</span>
            <span style={{ color: "#5A4A42" }}>after order confirmation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
