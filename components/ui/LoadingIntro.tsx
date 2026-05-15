"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/* ── Inline mango SVG — front face ───────────────────── */
function MangoMark({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="7" fill="#2D6A4F" />
      <rect width="32" height="32" rx="7" fill="url(#vig)" opacity="0.2" />
      <ellipse cx="16" cy="18" rx="7.5" ry="9.2" fill="url(#mg)" transform="rotate(-7 16 18)" />
      <ellipse cx="13.2" cy="15.5" rx="2.2" ry="3.2" fill="#FFE566" opacity="0.28" transform="rotate(-18 13.2 15.5)" />
      <ellipse cx="19.5" cy="19" rx="1.8" ry="3.5" fill="#C97A00" opacity="0.15" transform="rotate(-7 19.5 19)" />
      <path d="M15.8 8.8 Q15.4 6.8 15.2 5.6" stroke="#A5D6A7" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M15.2 5.6 C17 3.2 22 3.5 21 7.2 C19.5 8.5 16.5 7.8 15.2 5.6 Z" fill="#66BB6A" />
      <path d="M15.2 5.6 C17.5 5.8 19.5 6.2 21 7.2" stroke="#2D6A4F" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.5" />
      <defs>
        <radialGradient id="mg" cx="40%" cy="38%" r="62%" fx="38%" fy="35%">
          <stop offset="0%"   stopColor="#FFD042" />
          <stop offset="45%"  stopColor="#F4A300" />
          <stop offset="100%" stopColor="#D4800A" />
        </radialGradient>
        <radialGradient id="vig" cx="50%" cy="50%" r="70%">
          <stop offset="0%"   stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="1" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ── Small decorative dot grid — side/top/bottom faces ── */
function DotGrid({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      {[8, 20, 32].map(x =>
        [8, 20, 32].map(y => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill={color} opacity="0.45" />
        ))
      )}
    </svg>
  );
}

/* ── Leaf silhouette — back face ─────────────────────── */
function LeafMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path
        d="M22 38 C22 38 6 28 6 16 C6 8 13 4 22 4 C31 4 38 8 38 16 C38 28 22 38 22 38 Z"
        fill="#2D6A4F"
        opacity="0.18"
      />
      <path
        d="M22 38 C22 38 6 28 6 16 C6 8 13 4 22 4 C31 4 38 8 38 16 C38 28 22 38 22 38 Z"
        stroke="#2D6A4F"
        strokeWidth="1.5"
        fill="none"
        opacity="0.55"
      />
      <line x1="22" y1="38" x2="22" y2="8" stroke="#2D6A4F" strokeWidth="1" opacity="0.35" />
    </svg>
  );
}

export function LoadingIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => { document.body.style.overflow = ""; }, 560);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
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
            gap: 0,
          }}
        >

          {/* ── 3D Rotating cube ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="intro-scene"
          >
            <div className="intro-cube">

              {/* FRONT — mango icon */}
              <div className="intro-face front">
                <MangoMark size={64} />
              </div>

              {/* BACK — leaf */}
              <div className="intro-face back">
                <LeafMark />
              </div>

              {/* RIGHT — gold dots */}
              <div className="intro-face right">
                <DotGrid color="#C9973E" />
              </div>

              {/* LEFT — green dots */}
              <div className="intro-face left">
                <DotGrid color="#15562B" />
              </div>

              {/* TOP — thin gold line */}
              <div className="intro-face top">
                <div style={{
                  width: 36,
                  height: 2,
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #F4A300, #C9973E)",
                }} />
              </div>

              {/* BOTTOM — thin green line */}
              <div className="intro-face bottom">
                <div style={{
                  width: 36,
                  height: 2,
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #2D6A4F, #15562B)",
                }} />
              </div>

            </div>
          </motion.div>

          {/* ── Brand name ──────────────────────────────── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.42, ease: EASE }}
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "1.2rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#111111",
              marginTop: "2rem",
              lineHeight: 1,
            }}
          >
            Mango<span style={{ color: "#15562B" }}>Roots</span>
          </motion.p>

          {/* ── Italic tagline ──────────────────────────── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.68, ease: EASE }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "0.82rem",
              color: "#C9973E",
              marginTop: "0.4rem",
              letterSpacing: "0.03em",
            }}
          >
            Authentic Indian Mangoes
          </motion.p>

          {/* ── Gold → green progress bar at bottom ─────── */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2.0, delay: 0.4, ease: "linear" }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2.5px",
              background: "linear-gradient(90deg, #F4A300 0%, #C9973E 40%, #2D6A4F 100%)",
              transformOrigin: "left center",
            }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
