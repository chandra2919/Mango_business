"use client";

import { motion } from "framer-motion";
import { Leaf, Package, Plane, Home, ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Leaf,
    title: "Orchard Harvest",
    description:
      "Mangoes are handpicked at peak ripeness from our trusted partner orchards in Andhra Pradesh, Maharashtra & Gujarat.",
    detail: "Vijayawada · Ratnagiri · Gir",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    emoji: "🌳",
  },
  {
    step: 2,
    icon: Package,
    title: "Premium Packaging",
    description:
      "Each mango is individually cushioned in protective packaging to prevent bruising during the long journey to the USA.",
    detail: "Zero damage guarantee",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    emoji: "📦",
  },
  {
    step: 3,
    icon: Plane,
    title: "Direct Air Freight",
    description:
      "Air-flown directly from India — not sea freight. This keeps mangoes fresh, fragrant, and perfectly ripened on arrival.",
    detail: "India → USA in 24–36 hrs",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    emoji: "✈️",
  },
  {
    step: 4,
    icon: Home,
    title: "Fresh to Your Door",
    description:
      "USDA inspected and delivered straight to your doorstep within 2–4 days. Track your order via WhatsApp updates.",
    detail: "10+ states across USA",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    emoji: "🏠",
  },
];

export function DeliveryProcess() {
  return (
    <section id="delivery" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-flex">
            <span>✈️</span> Our Process
          </span>
          <h2 className="heading-section text-stone-900 mb-4">
            From Orchard to{" "}
            <span className="mango-gradient-text">Your Table</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            A carefully managed journey that preserves every drop of flavor, every trace of
            freshness from the moment of harvest.
          </p>
        </motion.div>

        {/* Steps — Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-200 via-amber-300 to-rose-200" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Step circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative w-14 h-14 rounded-2xl ${step.iconBg} border-2 ${step.border}
                                flex items-center justify-center mb-5 z-10 shadow-card-premium`}
                  >
                    <Icon className={`w-6 h-6 ${step.color}`} />
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-stone-900 text-white
                                    text-[10px] font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Emoji accent */}
                  <span className="text-2xl mb-3">{step.emoji}</span>

                  {/* Title */}
                  <h3 className="font-display font-bold text-stone-900 text-base mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-500 text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {/* Detail badge */}
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${step.bg} ${step.color} border ${step.border}`}>
                    {step.detail}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Steps — Mobile Vertical */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`flex gap-5 p-5 rounded-2xl bg-gradient-to-r ${step.bg} border ${step.border}`}
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl ${step.iconBg} border ${step.border}
                                   flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 mt-3 bg-stone-200 rounded-full min-h-[20px]" />
                  )}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-stone-400">STEP {step.step}</span>
                    <span className="text-base">{step.emoji}</span>
                  </div>
                  <h3 className="font-display font-bold text-stone-900 text-base mb-1.5">{step.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-2">{step.description}</p>
                  <span className={`text-xs font-semibold ${step.color}`}>{step.detail}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-amber-200
                          shadow-card-premium text-sm text-stone-600">
            <span className="text-base">⚡</span>
            Average delivery time: <span className="font-semibold text-amber-600">2–4 business days</span> after order confirmation
          </div>
        </motion.div>
      </div>
    </section>
  );
}
