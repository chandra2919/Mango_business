"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-stone-300"}`}
        />
      ))}
    </div>
  );
}

function AvatarInitials({ initials, gradient }: { initials: string; gradient: string }) {
  return (
    <div
      className={`w-11 h-11 rounded-full ${gradient} flex items-center justify-center shrink-0`}
    >
      <span className="text-white font-bold text-sm">{initials}</span>
    </div>
  );
}

const gradients = [
  "bg-gradient-to-br from-amber-400 to-orange-500",
  "bg-gradient-to-br from-rose-400 to-pink-500",
  "bg-gradient-to-br from-violet-400 to-purple-500",
  "bg-gradient-to-br from-emerald-400 to-teal-500",
  "bg-gradient-to-br from-blue-400 to-indigo-500",
  "bg-gradient-to-br from-amber-500 to-yellow-600",
  "bg-gradient-to-br from-red-400 to-rose-500",
  "bg-gradient-to-br from-teal-400 to-cyan-500",
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const total = testimonials.length;

  const prev = () => {
    setCurrent((c) => (c - 1 + total) % total);
    setIsAutoPlaying(false);
  };

  const next = () => {
    setCurrent((c) => (c + 1) % total);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4500);
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, total]);

  // Visible set of 3 testimonials
  const getVisible = () => {
    return [
      testimonials[current % total],
      testimonials[(current + 1) % total],
      testimonials[(current + 2) % total],
    ];
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-stone-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
           style={{
             backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
             backgroundSize: "40px 40px"
           }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                           bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
            <span>💬</span> Real Reviews
          </span>
          <h2 className="heading-section text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            Real families, real emotions, real Indian mangoes.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {getVisible().map((testimonial, i) => (
              <motion.div
                key={`${testimonial.id}-${current}-${i}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`relative rounded-2xl p-7 border transition-all ${
                  i === 0
                    ? "bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-500/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-amber-500/40 mb-4" />

                {/* Review text */}
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                {/* Variety badge */}
                {testimonial.variety && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full
                                  bg-amber-500/15 border border-amber-500/25 text-amber-400 text-xs font-medium mb-4">
                    🥭 {testimonial.variety}
                  </div>
                )}

                {/* Stars + Author */}
                <div className="flex items-center gap-3">
                  <AvatarInitials
                    initials={testimonial.initials}
                    gradient={gradients[parseInt(testimonial.id) - 1] || gradients[0]}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{testimonial.name}</p>
                    <p className="text-stone-500 text-xs">{testimonial.location}</p>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500/30 border border-white/15
                       hover:border-amber-500/40 flex items-center justify-center transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-amber-400"
                    : "w-2 h-2 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500/30 border border-white/15
                       hover:border-amber-500/40 flex items-center justify-center transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
