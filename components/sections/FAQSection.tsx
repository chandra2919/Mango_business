"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faq";

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-250"
      style={{
        background: isOpen ? "#FDF8F0" : "#FFFFFF",
        border: isOpen ? "1px solid #E2C99A" : "1px solid #EAE2D6",
        boxShadow: isOpen ? "0 4px 20px rgba(184,115,42,0.09)" : "0 1px 6px rgba(0,0,0,0.04)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="font-display font-semibold text-base leading-snug"
          style={{ color: isOpen ? "#8B5218" : "#2E2520" }}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: isOpen ? "#F5EBD8" : "#F4EFE6",
            border: isOpen ? "1px solid #E2C99A" : "1px solid #E0D4C4",
          }}
        >
          <Plus className="w-4 h-4" style={{ color: isOpen ? "#8B5218" : "#7A6B62" }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6">
              <div className="h-px mb-4" style={{ background: "#E2C99A" }} />
              <p className="text-sm leading-relaxed" style={{ color: "#5A4A42" }}>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section id="faq" className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28"
          >
            <span className="badge-premium mb-5 inline-flex">❓ FAQ</span>
            <h2 className="heading-section mb-5" style={{ color: "#2E2520" }}>
              Everything You{" "}
              <span className="mango-gradient-text">Want to Know</span>
            </h2>
            <p className="text-body text-lg mb-8">
              We believe in full transparency. Here are the most common questions — answered honestly.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "✅ 100% naturally ripened — no chemicals",
                "✅ USDA approved for US import",
                "✅ 2–4 day fresh delivery",
                "✅ WhatsApp support 8am–8pm daily",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5">
                  <span className="text-base">{text.split(" ")[0]}</span>
                  <span className="text-sm" style={{ color: "#5A4A42" }}>{text.slice(3)}</span>
                </div>
              ))}
            </div>

            <p className="text-sm mb-3" style={{ color: "#9A8880" }}>Still have questions?</p>
            <motion.a
              href="https://wa.me/15550006264?text=Hi+MangoRoots!+I+have+a+question."
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white text-sm font-semibold"
              style={{ background: "#3aac6f", boxShadow: "0 4px 14px rgba(58,172,111,0.3)" }}
            >
              💬 Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-3"
          >
            {faqs.map((f) => (
              <FAQItem
                key={f.id}
                question={f.question}
                answer={f.answer}
                isOpen={openId === f.id}
                onToggle={() => setOpenId(openId === f.id ? null : f.id)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
