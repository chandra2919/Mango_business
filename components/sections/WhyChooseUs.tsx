"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const features = [
  { title: "Farm-Direct Sourcing",       desc: "Sourced directly from trusted orchards in Andhra Pradesh, Maharashtra & Gujarat — no middlemen.",  border: "#BBF7D0", numColor: "#15562B", n: "01" },
  { title: "Air-Flown, Not Sea Freight", desc: "We airlift mangoes so they arrive in days, not weeks. Freshness is never compromised.",             border: "#E8C87A",  numColor: "#C9973E", n: "02" },
  { title: "USDA Approved & Certified",  desc: "All imports fully USDA inspected and compliant with US agricultural import regulations.",            border: "#BBF7D0", numColor: "#15562B", n: "03" },
  { title: "Grade A Handpicked Only",    desc: "Every mango individually selected for size, colour, and ripeness. No seconds, no compromises.",       border: "#E8C87A",  numColor: "#C9973E", n: "04" },
  { title: "2–4 Day Delivery",           desc: "Confirmed and shipped via overnight or 2-day air freight. Fresh at your door within days.",           border: "#BBF7D0", numColor: "#15562B", n: "05" },
  { title: "1000+ Happy Families",       desc: "Indian-American families across 10+ US states trust MangoRoots every mango season.",                 border: "#E8C87A",  numColor: "#C9973E", n: "06" },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="sec" style={{ background: "#FFFFFF", borderTop: "1px solid #F0F0F0" }}>
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <span className="sec-num">02 — Why MangoRoots</span>
          <span className="sec-label block mt-1">Our Commitment to Quality</span>
          <h2 className="sec-heading mt-2 mb-4">What Makes Us Different</h2>
          <p className="sec-body max-w-xl mt-5">
            We do one thing and we do it well — authentic Indian mangoes, fresh to your USA door.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.09, ease: EASE }}
              className="card-lift rounded-2xl p-6 cursor-default"
              style={{ background: "#FFFFFF", border: `1.5px solid ${f.border}` }}
            >
              {/* Decorative number */}
              <p className="font-bold text-3xl mb-3"
                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", color: f.numColor, opacity: 0.35 }}>
                {f.n}
              </p>
              <h3 className="font-semibold text-sm mb-2"
                style={{ fontFamily: "var(--font-poppins)", color: "#111111" }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
