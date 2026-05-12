"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";

const floating = [
  { emoji: "🥭", x: "7%",  y: "18%", cls: "animate-float-1" },
  { emoji: "🌿", x: "89%", y: "14%", cls: "animate-float-2" },
  { emoji: "🥭", x: "84%", y: "68%", cls: "animate-float-3" },
  { emoji: "⭐", x: "4%",  y: "74%", cls: "animate-float-1" },
  { emoji: "🥭", x: "50%", y: "4%",  cls: "animate-float-2" },
];

export function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage);
  const callUrl     = getCallUrl(BRAND.phone);

  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FDFCF9 0%, #FAF6EE 40%, #F5EDD8 75%, #EDE1C2 100%)" }}
    >
      {/* Soft radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 55% at 50% 50%, rgba(184,115,42,0.09) 0%, transparent 70%)" }}
      />

      {/* Floating decorations */}
      {floating.map((f, i) => (
        <div key={i}
          className={`absolute text-5xl select-none pointer-events-none opacity-20 ${f.cls}`}
          style={{ left: f.x, top: f.y }}
        >
          {f.emoji}
        </div>
      ))}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          style={{ background: "#F5EBD8", color: "#8B5218", border: "1px solid #E2C99A" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#B8732A" }} />
          Seasonal Stock Available Now
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", color: "#2E2520" }}
        >
          Bring Home the Taste of
          <br />
          <span className="mango-gradient-text">Indian Summers</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-12"
          style={{ color: "#6B5C53" }}
        >
          Don&rsquo;t let another mango season pass without tasting the real thing.
          Order now and let us deliver a piece of India straight to your family.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full
                       text-white text-base font-bold w-full sm:w-auto"
            style={{ background: "#3aac6f", boxShadow: "0 6px 24px rgba(58,172,111,0.32)" }}
          >
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp
          </motion.a>

          <motion.a
            href={callUrl}
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full
                       text-base font-bold border w-full sm:w-auto"
            style={{
              background: "#FFFFFF",
              color: "#2E2520",
              border: "1px solid #E0D4C4",
              boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
            }}
          >
            <Phone className="w-5 h-5" style={{ color: "#B8732A" }} />
            Call Us Now
          </motion.a>
        </motion.div>

        {/* Trust notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm"
          style={{ color: "#9A8880" }}
        >
          {[
            { e: "✅", t: "No minimum order" },
            { e: "🚚", t: "Fast 2–4 day delivery" },
            { e: "🌿", t: "100% naturally ripened" },
            { e: "⭐", t: "1000+ happy families" },
          ].map(({ e, t }) => (
            <div key={t} className="flex items-center gap-1.5">
              <span>{e}</span><span>{t}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
