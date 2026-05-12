"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faq";

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-amber-300/70 bg-amber-50/60 shadow-[0_4px_20px_rgba(245,158,11,0.1)]"
          : "border-stone-200 bg-white hover:border-amber-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-display font-semibold text-base leading-snug transition-colors ${
          isOpen ? "text-amber-700" : "text-stone-900"
        }`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
            isOpen
              ? "border-amber-300 bg-amber-100 text-amber-600"
              : "border-stone-200 bg-stone-50 text-stone-500"
          }`}
        >
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-amber-200/60 mb-4" />
              <p className="text-stone-600 text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="badge-premium mb-5 inline-flex">
              <span>❓</span> FAQ
            </span>
            <h2 className="heading-section text-stone-900 mb-5">
              Everything You{" "}
              <span className="mango-gradient-text">Want to Know</span>
            </h2>
            <p className="text-body text-lg mb-8">
              We believe in full transparency. Here are the most common questions from our
              customers — answered honestly.
            </p>

            {/* Quick info pills */}
            <div className="space-y-3 mb-8">
              {[
                { emoji: "✅", text: "100% naturally ripened — no chemicals" },
                { emoji: "✅", text: "USDA approved for US import" },
                { emoji: "✅", text: "2–4 day fresh delivery" },
                { emoji: "✅", text: "WhatsApp support 8am–8pm daily" },
              ].map(({ emoji, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="text-base">{emoji}</span>
                  <span className="text-stone-600 text-sm">{text}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-500 text-sm mb-3">Still have questions?</p>
            <motion.a
              href="https://wa.me/15550006264?text=Hi+MangoRoots!+I+have+a+question."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] text-white
                         font-semibold text-sm shadow-[0_4px_14px_rgba(37,211,102,0.4)]
                         hover:bg-[#1ebe5d] transition-all duration-200"
            >
              💬 Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
