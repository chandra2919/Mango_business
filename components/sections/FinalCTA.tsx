"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ShoppingBag, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const trustBadges = [
  { icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: "USDA Approved"       },
  { icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: "Air-Flown Fresh"     },
  { icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: "Naturally Ripened"   },
  { icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: "Imported Weekly"     },
  { icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: "1000+ Happy Families"},
];

export function FinalCTA() {
  const waUrl      = getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage);
  const bulkUrl    = getWhatsAppUrl(BRAND.whatsapp, "Hi MangoRoots! I'm interested in placing a bulk order. Please share pricing and availability.");
  const callUrl    = getCallUrl(BRAND.phone);

  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid #F0EDE6" }}
    >
      {/* ── Warm tropical background ───────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, #FFFDF7 0%, #FFF8EC 35%, #FFFDF7 60%, #E9F5EC 100%)",
          zIndex: 0,
        }}
      />

      {/* Decorative floating elements — purely visual, very low opacity */}
      <div
        className="pointer-events-none select-none absolute left-[-40px] top-[10%] text-[9rem] animate-float-slow"
        style={{ opacity: 0.07, zIndex: 1 }}
        aria-hidden="true"
      >
        🥭
      </div>
      <div
        className="pointer-events-none select-none absolute right-[-30px] bottom-[12%] text-[7rem] animate-float"
        style={{ opacity: 0.06, zIndex: 1, animationDelay: "1.2s" }}
        aria-hidden="true"
      >
        🌿
      </div>
      <div
        className="pointer-events-none select-none absolute right-[12%] top-[8%] text-[4rem] animate-float"
        style={{ opacity: 0.05, zIndex: 1, animationDelay: "0.5s" }}
        aria-hidden="true"
      >
        🍃
      </div>

      {/* Soft warm radial glow at centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(247,200,115,0.13) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative sec page-wrap" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Gold ornamental line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-20" style={{ background: "linear-gradient(90deg, transparent, #F7C873)" }} />
            <span className="text-2xl animate-float" style={{ animationDelay: "0.3s" }}>🥭</span>
            <div className="h-px flex-1 max-w-20" style={{ background: "linear-gradient(90deg, #F7C873, transparent)" }} />
          </div>

          <span className="sec-num block mb-2">07 — Order Today</span>
          <span className="sec-label block mb-4">Don&rsquo;t Miss the Season</span>

          {/* Headline */}
          <h2
            className="font-extrabold mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              color: "#1A1A1A",
              letterSpacing: "-0.025em",
            }}
          >
            Taste the Real<br />
            <span
              style={{
                background: "linear-gradient(90deg, #F4A300 0%, #C9973E 60%, #2D6A4F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Indian Summer
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="mb-10 leading-relaxed mx-auto"
            style={{
              fontSize: "1rem",
              color: "#4A4A4A",
              maxWidth: "440px",
            }}
          >
            Fresh seasonal mangoes available now.
            Don&rsquo;t let another mango season pass without bringing home
            the real taste of India.
          </p>

          {/* ── CTA Button hierarchy ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          >
            {/* PRIMARY — WhatsApp (most dominant) */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp flex items-center gap-2.5 w-full sm:w-auto justify-center"
              style={{
                padding: "0.9rem 2rem",
                fontSize: "0.95rem",
                borderRadius: "14px",
                fontFamily: "var(--font-poppins)",
                fontWeight: 700,
                boxShadow: "0 6px 28px rgba(37,211,102,0.35)",
                letterSpacing: "0.01em",
              }}
            >
              <MessageCircle className="w-4.5 h-4.5" style={{ width: "1.1rem", height: "1.1rem" }} />
              Order on WhatsApp
            </a>

            {/* SECONDARY — Call (outline) */}
            <a
              href={callUrl}
              className="btn btn-outline flex items-center gap-2 w-full sm:w-auto justify-center"
              style={{
                padding: "0.85rem 1.75rem",
                fontSize: "0.9rem",
                borderRadius: "14px",
                fontFamily: "var(--font-poppins)",
              }}
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>

            {/* TERTIARY — Bulk (smaller, neutral) */}
            <a
              href={bulkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center gap-2 w-full sm:w-auto justify-center"
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "0.82rem",
                borderRadius: "14px",
                background: "#F0EDE6",
                color: "#4A4A4A",
                border: "1px solid #E0D8CC",
                fontFamily: "var(--font-poppins)",
                fontWeight: 600,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#FFE8B6";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F7C873";
                (e.currentTarget as HTMLAnchorElement).style.color = "#7A4E1D";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#F0EDE6";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E0D8CC";
                (e.currentTarget as HTMLAnchorElement).style.color = "#4A4A4A";
              }}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Bulk Orders
            </a>
          </motion.div>

          {/* ── Trust indicators ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          >
            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1" style={{ background: "#F0EDE6" }} />
              <span style={{ fontSize: "0.7rem", color: "#B0A898", letterSpacing: "0.12em", fontWeight: 600 }}>
                TRUSTED & CERTIFIED
              </span>
              <div className="h-px flex-1" style={{ background: "#F0EDE6" }} />
            </div>

            {/* Badge row */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
              {trustBadges.map(({ icon, label }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.07, ease: EASE }}
                  className="flex items-center gap-1.5 cursor-default"
                  style={{ fontSize: "0.78rem", color: "#4A4A4A", fontWeight: 500 }}
                >
                  <span style={{ color: "#2D6A4F" }}>{icon}</span>
                  <span>{label}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
