"use client";

import { motion } from "framer-motion";
import { TrendingUp, Calendar } from "lucide-react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

const urgencyPoints = [
  {
    emoji: "📅",
    title: "Only Available May – August",
    description: "Indian mangoes have a strict 3-month season. Once it ends, you wait a full year.",
  },
  {
    emoji: "🔥",
    title: "Weekend Stock Sells Out Fast",
    description: "600–800 mangoes are sold every weekend. Pre-orders are strongly recommended.",
  },
  {
    emoji: "✈️",
    title: "Limited Air Freight Capacity",
    description: "We can only fly in a limited quantity per week. First ordered, first served.",
  },
];

export function SeasonalStock() {
  const whatsappUrl = getWhatsAppUrl(
    BRAND.whatsapp,
    "Hi MangoRoots! I'd like to place a weekend pre-order. Please share details."
  );

  return (
    /* Warm earthy medium tone — readable but not harsh */
    <section
      id="seasonal"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(145deg, #6B3F18 0%, #8B5220 40%, #A86A28 100%)" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#FAF0DC" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#FAD090" }} />
            ⚠️ Limited Seasonal Availability
          </div>

          <h2
            className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#FDF6EC" }}
          >
            Season Ends <br />
            <span style={{ color: "#FAD090" }}>In August.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(253,246,236,0.80)" }}>
            These mangoes grow for only 3 months a year. After August, they&rsquo;re gone until
            next summer. Don&rsquo;t miss your window.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-col items-center mb-16"
        >
          <p className="text-xs font-medium mb-4 uppercase tracking-widest" style={{ color: "rgba(253,246,236,0.55)" }}>
            Next Weekend Fresh Stock In
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {urgencyPoints.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              <span className="text-3xl mb-4 block">{p.emoji}</span>
              <h3 className="font-display font-bold text-base mb-2" style={{ color: "#FDF6EC" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(253,246,236,0.68)" }}>{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stock bar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl p-6 mb-10 max-w-2xl mx-auto"
          style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" style={{ color: "#FAD090" }} />
              <span className="font-semibold text-sm" style={{ color: "#FDF6EC" }}>This Weekend&rsquo;s Availability</span>
            </div>
            <span className="text-sm font-bold" style={{ color: "#FAD090" }}>Filling Fast</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #D4922A, #FAD090)" }}
            />
          </div>
          <div className="flex justify-between text-xs mt-2" style={{ color: "rgba(253,246,236,0.50)" }}>
            <span>0 boxes</span>
            <span className="font-medium" style={{ color: "#FAD090" }}>72% pre-ordered</span>
            <span>Weekend max</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold
                       w-full sm:w-auto"
            style={{
              background: "#FAF0DC",
              color: "#7A4510",
              boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
            }}
          >
            🛒 Pre-Order This Weekend
          </motion.a>
          <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(253,246,236,0.60)" }}>
            <Calendar className="w-4 h-4" />
            Season: May – August 2025
          </div>
        </motion.div>
      </div>
    </section>
  );
}
