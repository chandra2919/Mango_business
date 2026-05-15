"use client";

import { motion } from "framer-motion";
import { Calendar, AlertCircle } from "lucide-react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function SeasonalStock() {
  const waUrl = getWhatsAppUrl(BRAND.whatsapp,
    "Hi MangoRoots! I'd like to pre-order for this weekend. Please share details.");

  return (
    <section
      id="seasonal"
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(232,200,122,0.25)" }}
    >
      {/* ── Background video ─────────────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/images/cover_video.mp4" type="video/mp4" />
      </video>

      {/* ── Multi-layer overlay: darken + desaturate the video ── */}
      {/* Layer 1 — deep forest-green tint (brand colour) */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: "rgba(8, 24, 12, 0.70)",
        }}
      />
      {/* Layer 2 — subtle warm gold vignette from the sides */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(8,24,12,0.55) 100%)",
        }}
      />
      {/* Layer 3 — top & bottom soft fade to anchor content */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 3,
          background:
            "linear-gradient(to bottom, rgba(8,24,12,0.40) 0%, transparent 25%, transparent 75%, rgba(8,24,12,0.40) 100%)",
        }}
      />

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative sec page-wrap" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* ── Left — text ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Alert badge */}
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-4 h-4" style={{ color: "#E8C87A" }} />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#E8C87A" }}
              >
                Limited Seasonal Availability
              </span>
            </div>

            {/* Section number */}
            <span
              className="sec-num block mb-2"
              style={{ color: "#C9973E" }}
            >
              05 — Season &amp; Stock
            </span>

            {/* Heading */}
            <h2
              className="font-extrabold leading-tight mb-5"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                textShadow: "0 2px 24px rgba(0,0,0,0.45)",
              }}
            >
              Fresh Stock Available<br />
              <span style={{ color: "#E8C87A" }}>May – August Only</span>
            </h2>

            {/* Gold underline accent */}
            <div
              className="mb-6"
              style={{
                width: "52px",
                height: "3px",
                background: "linear-gradient(90deg, #C9973E, #15562B)",
                borderRadius: "2px",
              }}
            />

            {/* Body text */}
            <p
              className="mb-7 leading-relaxed"
              style={{
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.82)",
                maxWidth: "420px",
                textShadow: "0 1px 8px rgba(0,0,0,0.3)",
              }}
            >
              Indian mangoes have a strict 3-month season. Once it ends,
              they&rsquo;re gone until next year. Weekend stock sells out fast
              — pre-order early to secure yours.
            </p>

            {/* Bullet points */}
            <div className="space-y-3 mb-9">
              {[
                "600–800 mangoes sold every weekend",
                "Weekend pre-orders recommended — stock is limited",
                "First ordered, first served — limited air freight capacity",
              ].map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: EASE }}
                  className="flex items-start gap-3 text-sm"
                >
                  {/* Gold diamond bullet */}
                  <span
                    className="flex-shrink-0 mt-0.5 text-base"
                    style={{ color: "#C9973E" }}
                  >
                    ✦
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.80)",
                      textShadow: "0 1px 6px rgba(0,0,0,0.25)",
                    }}
                  >
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green inline-flex items-center gap-2 px-7 py-3.5 text-sm"
              style={{ boxShadow: "0 4px 24px rgba(21,86,43,0.55)" }}
            >
              <Calendar className="w-4 h-4" />
              Pre-Order This Weekend
            </a>
          </motion.div>

          {/* ── Right — countdown card ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            <div
              className="rounded-2xl p-10 cursor-default"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1.5px solid rgba(232,200,122,0.40)",
                boxShadow:
                  "0 8px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Card label */}
              <p
                className="text-xs font-bold uppercase tracking-widest mb-8 text-center"
                style={{ color: "#E8C87A", fontFamily: "var(--font-poppins)" }}
              >
                Next Weekend Fresh Stock In
              </p>

              {/* Countdown */}
              <div className="flex justify-center mb-8">
                <CountdownTimer />
              </div>

              {/* Season note */}
              <div
                className="mt-4 pt-4 text-center"
                style={{ borderTop: "1px solid rgba(232,200,122,0.25)" }}
              >
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  🌿&nbsp; Season: May – August 2025
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
