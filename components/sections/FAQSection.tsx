"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faq";
import { BRAND } from "@/constants/branding";
import { getWhatsAppUrl } from "@/lib/utils";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className="rounded-2xl overflow-hidden"
      style={{
        background: isOpen ? "#FAFAF8" : "#FFFFFF",
        border: `1.5px solid ${isOpen ? "#E8C87A" : "#EBEBEB"}`,
        transition: "border-color 0.25s ease, background 0.25s ease",
      }}
    >
      <button onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
        aria-expanded={isOpen}>
        <span className="text-sm font-semibold leading-snug transition-colors duration-200"
          style={{ color: isOpen ? "#7A5A1E" : "#111111" }}>
          {question}
        </span>
        <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
          style={{
            background: isOpen ? "#FBF3E0" : "#F5F5F5",
            border: `1px solid ${isOpen ? "#E8C87A" : "#E5E5E5"}`,
          }}>
          {isOpen
            ? <Minus className="w-3.5 h-3.5" style={{ color: "#C9973E" }} />
            : <Plus  className="w-3.5 h-3.5" style={{ color: "#555555" }} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="px-5 pb-5 pt-1" style={{ borderTop: "1px solid #E8C87A" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");
  const waUrl = getWhatsAppUrl(BRAND.whatsapp, "Hi MangoRoots! I have a question.");

  return (
    <section id="faq" className="sec" style={{ background: "#FFFFFF", borderTop: "1px solid #F0F0F0" }}>
      <div className="page-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">

          {/* Left — sticky sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, ease: EASE }}
            >
              <span className="sec-num">06 — FAQ</span>
              <span className="sec-label block mt-1">Got Questions?</span>
              <h2 className="sec-heading mt-2 mb-4">Frequently Asked Questions</h2>
              <p className="sec-body mb-6 mt-5">
                Everything you want to know about our mangoes, delivery, and ordering.
              </p>

              <div className="rounded-2xl p-5 mb-6"
                style={{ background: "#FAFAF8", border: "1.5px solid #E8C87A" }}>
                {[
                  "Naturally ripened — no chemicals",
                  "USDA certified import",
                  "2–4 day delivery",
                  "WhatsApp support daily",
                ].map(t => (
                  <div key={t} className="flex items-center gap-2.5 text-sm py-2"
                    style={{ color: "#15562B", borderBottom: "1px solid #F0F0F0" }}>
                    <span style={{ color: "#C9973E" }}>✦</span> {t}
                  </div>
                ))}
              </div>

              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="btn btn-green inline-flex items-center gap-2 px-5 py-2.5 text-sm"
              >
                💬 Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((f, i) => (
              <motion.div key={f.id}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
              >
                <FAQItem question={f.question} answer={f.answer}
                  isOpen={openId === f.id}
                  onToggle={() => setOpenId(openId === f.id ? null : f.id)} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
