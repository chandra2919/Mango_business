"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ShoppingBag } from "lucide-react";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const trustBadges = [
  { label: "USDA Approved",        accent: "#2D6A4F" },
  { label: "Air-Flown Fresh",      accent: "#F4A300" },
  { label: "Naturally Ripened",    accent: "#2D6A4F" },
  { label: "Imported Weekly",      accent: "#F4A300" },
  { label: "1000+ Happy Families", accent: "#2D6A4F" },
];

export function FinalCTA() {
  const waUrl   = getWhatsAppUrl(BRAND.whatsapp, BRAND.whatsappMessage);
  const bulkUrl = getWhatsAppUrl(
    BRAND.whatsapp,
    "Hi MangoRoots! I'm interested in placing a bulk order. Please share pricing and availability."
  );
  const callUrl = getCallUrl(BRAND.phone);

  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid #F0EDE6" }}
    >
      {/* ── Warm tropical background ─────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(145deg, #FFFDF7 0%, #FFF8EC 35%, #FFFDF7 60%, #E9F5EC 100%)",
          zIndex: 0,
        }}
      />

      {/* Soft warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(247,200,115,0.13) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative sec page-wrap flex flex-col items-center" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center w-full max-w-2xl"
        >
          {/* Ornamental gold rule */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="h-px flex-1 max-w-20"
              style={{ background: "linear-gradient(90deg, transparent, #F7C873)" }}
            />
            {/* Pure CSS diamond instead of emoji */}
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                background: "linear-gradient(135deg, #F4A300, #C9973E)",
                borderRadius: "2px",
                transform: "rotate(45deg)",
                flexShrink: 0,
              }}
            />
            <div
              className="h-px flex-1 max-w-20"
              style={{ background: "linear-gradient(90deg, #F7C873, transparent)" }}
            />
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
                background: "linear-gradient(90deg, #F4A300 0%, #C9973E 55%, #2D6A4F 100%)",
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
            className="mb-10 leading-relaxed mx-auto text-center"
            style={{ fontSize: "clamp(0.9rem,2.5vw,1rem)", color: "#4A4A4A", maxWidth: "min(440px,100%)" }}
          >
            Fresh seasonal mangoes available now. Don&rsquo;t let another mango season
            pass without bringing home the real taste of India.
          </p>

          {/* ── CTA Button hierarchy ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          >
            {/* PRIMARY — WhatsApp */}
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
              }}
            >
              <MessageCircle style={{ width: "1.1rem", height: "1.1rem" }} />
              Order on WhatsApp
            </a>

            {/* SECONDARY — Call */}
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

            {/* TERTIARY — Bulk */}
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
                transition: "background 0.2s, border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#FFE8B6";
                el.style.borderColor = "#F7C873";
                el.style.color = "#7A4E1D";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#F0EDE6";
                el.style.borderColor = "#E0D8CC";
                el.style.color = "#4A4A4A";
              }}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Bulk Orders
            </a>
          </motion.div>

          {/* ── Trust indicator strip ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          >
            {/* Rule with label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1" style={{ background: "#F0EDE6" }} />
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "#B0A898",
                  letterSpacing: "0.16em",
                  fontWeight: 700,
                  fontFamily: "var(--font-poppins)",
                }}
              >
                TRUSTED &amp; CERTIFIED
              </span>
              <div className="h-px flex-1" style={{ background: "#F0EDE6" }} />
            </div>

            {/* Badge pills — no icons, pure CSS highlight effect */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
              {trustBadges.map(({ label, accent }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.38 + i * 0.07, ease: EASE }}
                  className="group relative inline-flex items-center cursor-default overflow-hidden"
                  style={{
                    padding: "0.35rem 0.85rem",
                    borderRadius: "999px",
                    border: "1px solid #F0EDE6",
                    background: "#FFFFFF",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#3A3A3A",
                    fontFamily: "var(--font-poppins)",
                    transition: "border-color 0.25s, box-shadow 0.25s",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                  }}
                  whileHover={{
                    boxShadow: `0 4px 16px ${accent}28`,
                    borderColor: accent,
                    y: -1,
                  }}
                >
                  {/* Left-edge accent dot */}
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: accent,
                      marginRight: "7px",
                      flexShrink: 0,
                      transition: "transform 0.2s",
                    }}
                  />
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
