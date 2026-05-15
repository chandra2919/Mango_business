"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ShoppingBag } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function FinalCTA() {
  const waUrl   = getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage);
  const callUrl = getCallUrl(BRAND.phone);

  return (
    <section className="sec" style={{ background: "#FFFFFF", borderTop: "1px solid #F0F0F0" }}>
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Gold decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-16" style={{ background: "linear-gradient(90deg, transparent, #E8C87A)" }} />
            <span className="text-2xl">🥭</span>
            <div className="h-px flex-1 max-w-16" style={{ background: "linear-gradient(90deg, #E8C87A, transparent)" }} />
          </div>

          <span className="sec-num block mb-2">07 — Order Today</span>
          <span className="sec-label block mb-3">Don&rsquo;t Miss the Season</span>
          <h2 className="sec-heading mx-auto text-center mb-5" style={{ display: "inline-block" }}>
            Bring Home the Taste of Indian Summers
          </h2>
          <p className="sec-body mb-10 max-w-xl mx-auto mt-6">
            Fresh seasonal mangoes available now. Don&rsquo;t let another mango season pass.
            Order via WhatsApp or call us — we respond the same day.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp flex items-center gap-2 px-7 py-3.5 text-sm w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
            <a href={callUrl}
              className="btn btn-outline flex items-center gap-2 px-7 py-3.5 text-sm w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-green flex items-center gap-2 px-7 py-3.5 text-sm w-full sm:w-auto justify-center"
            >
              <ShoppingBag className="w-4 h-4" /> Bulk Order
            </a>
          </div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            className="flex flex-wrap items-center justify-center gap-6 text-xs"
            style={{ color: "#555555" }}
          >
            {[
              { e: "✅", t: "No minimum order"     },
              { e: "🚚", t: "Fast 2–4 day delivery" },
              { e: "🌿", t: "Naturally ripened"     },
              { e: "⭐", t: "1000+ happy families"  },
            ].map(({ e, t }) => (
              <motion.span key={t}
                whileHover={{ scale: 1.08, color: "#15562B" }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1.5 cursor-default"
              >
                <span>{e}</span><span>{t}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
