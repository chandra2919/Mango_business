"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const SPRING = [0.34, 1.56, 0.64, 1] as const;

/* ── Inline mango SVG — zero network request, renders instantly ── */
function MangoMark({ size = 52 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="7" fill="#2D6A4F" />
      <rect width="32" height="32" rx="7" fill="url(#vignette)" opacity="0.2" />

      {/* Mango body */}
      <ellipse
        cx="16" cy="18"
        rx="7.5" ry="9.2"
        fill="url(#mangoGrad)"
        transform="rotate(-7 16 18)"
      />

      {/* Belly highlight */}
      <ellipse
        cx="13.2" cy="15.5"
        rx="2.2" ry="3.2"
        fill="#FFE566"
        opacity="0.30"
        transform="rotate(-18 13.2 15.5)"
      />

      {/* Side blush */}
      <ellipse
        cx="19.5" cy="19"
        rx="1.8" ry="3.5"
        fill="#C97A00"
        opacity="0.16"
        transform="rotate(-7 19.5 19)"
      />

      {/* Stem */}
      <path
        d="M15.8 8.8 Q15.4 6.8 15.2 5.6"
        stroke="#A5D6A7"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Leaf */}
      <path
        d="M15.2 5.6 C17 3.2 22 3.5 21 7.2 C19.5 8.5 16.5 7.8 15.2 5.6 Z"
        fill="#66BB6A"
      />

      {/* Leaf vein */}
      <path
        d="M15.2 5.6 C17.5 5.8 19.5 6.2 21 7.2"
        stroke="#2D6A4F"
        strokeWidth="0.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      <defs>
        <radialGradient id="mangoGrad" cx="40%" cy="38%" r="62%" fx="38%" fy="35%">
          <stop offset="0%"   stopColor="#FFD042" />
          <stop offset="45%"  stopColor="#F4A300" />
          <stop offset="100%" stopColor="#D4800A" />
        </radialGradient>
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%"   stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="1" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function LoadingIntro() {
  const [visible, setVisible] = useState(true);

  /* Lock body scroll while loading */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      /* Restore scroll after exit animation completes */
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 550);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.52, ease: EASE }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#FFFDF7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          {/* ── Icon ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.72, y: 6 }}
            animate={{ opacity: 1, scale: 1,    y: 0 }}
            transition={{ duration: 0.55, ease: SPRING }}
          >
            <MangoMark size={52} />
          </motion.div>

          {/* ── Brand name ────────────────────────────────── */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.38, ease: EASE }}
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "1.2rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#111111",
              marginTop: "1.1rem",
              lineHeight: 1,
            }}
          >
            Mango<span style={{ color: "#15562B" }}>Roots</span>
          </motion.p>

          {/* ── Tagline ───────────────────────────────────── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.62, ease: EASE }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "0.82rem",
              color: "#C9973E",
              marginTop: "0.45rem",
              letterSpacing: "0.03em",
            }}
          >
            Authentic Indian Mangoes
          </motion.p>

          {/* ── Gold progress line ────────────────────────── */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.5, ease: "linear" }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, #F4A300 0%, #2D6A4F 100%)",
              transformOrigin: "left center",
            }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
