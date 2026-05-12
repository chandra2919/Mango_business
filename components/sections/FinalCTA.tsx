"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ShoppingBag } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";

const floatingItems = [
  { emoji: "🥭", x: "8%", y: "20%", delay: 0, className: "animate-float-1" },
  { emoji: "🌿", x: "90%", y: "15%", delay: 1, className: "animate-float-2" },
  { emoji: "🥭", x: "85%", y: "70%", delay: 0.5, className: "animate-float-3" },
  { emoji: "⭐", x: "5%", y: "75%", delay: 1.5, className: "animate-float-1" },
  { emoji: "🥭", x: "50%", y: "5%", delay: 0.8, className: "animate-float-2" },
];

export function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage);
  const callUrl = getCallUrl(BRAND.phone);

  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFF8E7 0%, #FEF3C7 40%, #FDE68A 70%, #FBBF24 100%)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,158,11,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Floating elements */}
      {floatingItems.map((item, i) => (
        <div
          key={i}
          className={`absolute text-5xl select-none pointer-events-none opacity-30 ${item.className}`}
          style={{ left: item.x, top: item.y }}
        >
          {item.emoji}
        </div>
      ))}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15
                     border border-amber-500/30 text-amber-700 text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Seasonal Stock Available Now
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-display font-bold text-stone-900 mb-6 leading-tight"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
        >
          Bring Home the Taste of
          <br />
          <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Indian Summers
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-12"
        >
          Don&rsquo;t let another mango season pass without tasting the real thing.
          Order now and let us deliver a piece of India straight to your family.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          {/* WhatsApp */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 px-8 py-4.5 py-4 rounded-full
                       bg-[#25D366] text-white text-base font-bold
                       shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)]
                       hover:bg-[#1ebe5d] transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp
          </motion.a>

          {/* Call */}
          <motion.a
            href={callUrl}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full
                       bg-white text-stone-800 text-base font-bold border border-stone-200
                       shadow-card-premium hover:border-amber-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]
                       transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5 text-amber-600" />
            Call Us Now
          </motion.a>
        </motion.div>

        {/* Small trust notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 text-stone-500 text-sm"
        >
          {[
            { emoji: "✅", text: "No minimum order" },
            { emoji: "🚚", text: "Fast 2–4 day delivery" },
            { emoji: "🌿", text: "100% naturally ripened" },
            { emoji: "⭐", text: "1000+ happy families" },
          ].map(({ emoji, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              <span>{emoji}</span>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
