"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Calendar } from "lucide-react";
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
    "Hi MangoRoots! I'd like to place a weekend pre-order before stock runs out. Please share details."
  );

  return (
    <section id="seasonal" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
           style={{
             background: "linear-gradient(135deg, #92400E 0%, #B45309 30%, #D97706 60%, #F59E0B 100%)"
           }} />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
             backgroundSize: "30px 30px"
           }} />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)"
           }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm
                          border border-white/30 text-white text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            ⚠️ Limited Seasonal Availability
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Season Ends
            <br />
            <span className="text-yellow-200">In August.</span>
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
            These mangoes grow for only 3 months a year. After August, they&rsquo;re gone until
            next summer. Don&rsquo;t miss your window.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-16"
        >
          <p className="text-white/60 text-sm font-medium mb-4 uppercase tracking-widest">
            Next Weekend Fresh Stock In
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Urgency Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {urgencyPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
            >
              <span className="text-3xl mb-4 block">{point.emoji}</span>
              <h3 className="font-display font-bold text-white text-base mb-2">{point.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stock indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-10 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-yellow-300" />
              <span className="text-white font-semibold text-sm">This Weekend&rsquo;s Availability</span>
            </div>
            <span className="text-yellow-200 text-sm font-bold">Filling Fast</span>
          </div>

          {/* Progress bar */}
          <div className="h-3 bg-white/20 rounded-full overflow-hidden mb-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-amber-400"
            />
          </div>

          <div className="flex justify-between text-white/60 text-xs">
            <span>0 boxes</span>
            <span className="text-yellow-200 font-medium">72% pre-ordered this week</span>
            <span>Weekend max</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-amber-700 text-base font-bold
                       shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                       transition-all duration-200 w-full sm:w-auto justify-center"
          >
            🛒 Pre-Order This Weekend
          </motion.a>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Season: May – August 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
