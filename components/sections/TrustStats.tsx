"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  {
    value: 800,
    suffix: "+",
    label: "Mangoes Every Weekend",
    description: "Fresh stock sold to happy families across the USA each weekend",
    emoji: "🥭",
    gradient: "from-amber-50 to-yellow-50",
    border: "border-amber-200/60",
    iconBg: "bg-amber-100",
  },
  {
    value: 500,
    suffix: "+",
    label: "Weekday Orders",
    description: "Consistent demand every weekday from our loyal customer base",
    emoji: "📦",
    gradient: "from-orange-50 to-amber-50",
    border: "border-orange-200/60",
    iconBg: "bg-orange-100",
  },
  {
    value: 6,
    suffix: "",
    label: "Premium Varieties",
    description: "Banginapalli, Rasalu, Alphonso, Kesar, Himayat & Mallika",
    emoji: "✨",
    gradient: "from-yellow-50 to-lime-50",
    border: "border-yellow-200/60",
    iconBg: "bg-yellow-100",
  },
  {
    value: 10,
    suffix: "+",
    label: "States Delivered",
    description: "From California to New York — coast to coast freshness",
    emoji: "🚚",
    gradient: "from-emerald-50 to-teal-50",
    border: "border-emerald-200/60",
    iconBg: "bg-emerald-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-flex">
            <span>📊</span> Our Numbers
          </span>
          <h2 className="heading-section text-stone-900 mb-4">
            Trusted by{" "}
            <span className="mango-gradient-text">Thousands of Families</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Every weekend, hundreds of Indian-American families rely on MangoRoots
            for the authentic taste of home.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative group rounded-2xl bg-gradient-to-br ${stat.gradient} border ${stat.border}
                          p-7 shadow-card-premium overflow-hidden cursor-default`}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-400/0
                              group-hover:from-amber-400/5 group-hover:to-transparent transition-all duration-300 rounded-2xl" />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center mb-5 text-2xl`}>
                {stat.emoji}
              </div>

              {/* Counter */}
              <div className="mb-2">
                <AnimatedCounter
                  to={stat.value}
                  suffix={stat.suffix}
                  duration={2.2}
                  className="font-display text-4xl font-bold text-stone-900"
                />
              </div>

              {/* Label */}
              <h3 className="font-display font-semibold text-stone-800 text-base mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-stone-500 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 text-3xl opacity-10 group-hover:opacity-20 transition-opacity">
                {stat.emoji}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-stone-400 text-sm mt-10"
        >
          Fresh seasonal stock available every week · Limited quantities · Order early
        </motion.p>
      </div>
    </section>
  );
}
