"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const steps = [
  { n: 1, title: "Orchard Harvest",   desc: "Handpicked at peak ripeness from orchards in Andhra Pradesh, Maharashtra & Gujarat.", detail: "Farm Direct", border: "#BBF7D0", numBg: "#15562B", detailBg: "#DCFCE7", detailColor: "#15562B" },
  { n: 2, title: "Premium Packaging", desc: "Each mango individually cushioned in protective packaging. Zero bruising guaranteed.",  detail: "Zero Damage", border: "#E8C87A",  numBg: "#C9973E", detailBg: "#FBF3E0", detailColor: "#7A5A1E"  },
  { n: 3, title: "Air Freight",       desc: "Air-flown from India in 24–36 hrs — not slow sea freight. Freshness preserved.",       detail: "24–36 hrs",   border: "#BBF7D0", numBg: "#15562B", detailBg: "#DCFCE7", detailColor: "#15562B" },
  { n: 4, title: "Delivered to You",  desc: "USDA inspected and at your door in 2–4 days. WhatsApp order tracking included.",       detail: "2–4 Days",    border: "#E8C87A",  numBg: "#C9973E", detailBg: "#FBF3E0", detailColor: "#7A5A1E"  },
];

export function DeliveryProcess() {
  return (
    <section id="delivery" className="sec" style={{ background: "#FFFFFF", borderTop: "1px solid #F0F0F0" }}>
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <span className="sec-num">03 — How It Works</span>
          <span className="sec-label block mt-1">Transparent Supply Chain</span>
          <h2 className="sec-heading mt-2 mb-4">From Orchard to Your Door</h2>
          <p className="sec-body max-w-xl mt-5">
            A transparent 4-step supply chain that preserves every ounce of freshness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: EASE }}
              className="card-lift rounded-2xl p-6 cursor-default"
              style={{ background: "#FFFFFF", border: `1.5px solid ${s.border}` }}
            >
              {/* Step number + detail badge in one row */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: s.numBg }}>
                  {s.n}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: s.detailBg, color: s.detailColor, border: `1px solid ${s.border}` }}>
                  {s.detail}
                </span>
              </div>

              <h3 className="font-semibold text-sm mb-2"
                style={{ fontFamily: "var(--font-poppins)", color: "#111111" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="mt-8 flex items-center gap-2 text-sm px-1"
          style={{ color: "#555555" }}
        >
          <span>⚡</span>
          <span>Average total time after order: <strong style={{ color: "#15562B" }}>2–4 business days</strong></span>
        </motion.div>
      </div>
    </section>
  );
}
