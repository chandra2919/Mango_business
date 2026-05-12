"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Plane,
  Heart,
  Award,
  Clock,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    id: "farm-fresh",
    icon: Leaf,
    title: "Farm-Direct Freshness",
    description:
      "Every mango is sourced directly from orchards we trust — no middlemen, no cold storage waiting. Straight from the tree to your family.",
    size: "large",
    gradient: "from-emerald-50 to-teal-50",
    border: "border-emerald-200/60",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    id: "air-shipped",
    icon: Plane,
    title: "Air-Flown from India",
    description:
      "Airlifted directly — not sea freight. Your mangoes fly the same route you did when you came to America.",
    size: "medium",
    gradient: "from-blue-50 to-sky-50",
    border: "border-blue-200/60",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    id: "natural-ripening",
    icon: Heart,
    title: "100% Naturally Ripened",
    description:
      "Never chemically treated. Our mangoes ripen the way your grandmother's did — naturally, slowly, perfectly.",
    size: "medium",
    gradient: "from-rose-50 to-pink-50",
    border: "border-rose-200/60",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
  },
  {
    id: "handpicked",
    icon: Award,
    title: "Handpicked Premium Grade",
    description:
      "Only Grade A mangoes make the cut. Each piece is individually inspected for size, color, and perfection.",
    size: "small",
    gradient: "from-amber-50 to-yellow-50",
    border: "border-amber-200/60",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    id: "fast-delivery",
    icon: Clock,
    title: "2–4 Day Fresh Delivery",
    description:
      "Overnight and 2-day air shipping. Your mangoes arrive fresh, ripe, and ready to enjoy — every single time.",
    size: "small",
    gradient: "from-violet-50 to-purple-50",
    border: "border-violet-200/60",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
  },
  {
    id: "usda-approved",
    icon: ShieldCheck,
    title: "USDA Approved & Safe",
    description:
      "Fully certified, inspected, and compliant with all US agricultural import regulations. Complete peace of mind.",
    size: "small",
    gradient: "from-indigo-50 to-blue-50",
    border: "border-indigo-200/60",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
  },
  {
    id: "community",
    icon: Users,
    title: "Beloved by 1000+ Families",
    description:
      "From Diwali gifts to weekly family rituals — thousands of Indian-American families trust us every mango season.",
    size: "medium",
    gradient: "from-orange-50 to-amber-50",
    border: "border-orange-200/60",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
  },
  {
    id: "exclusive",
    icon: Sparkles,
    title: "Rare Seasonal Exclusivity",
    description:
      "These varieties are only available May–August. Once the season ends, they're gone until next year. This is not a supermarket shelf.",
    size: "large",
    gradient: "from-yellow-50 to-amber-50",
    border: "border-yellow-200/60",
    iconColor: "text-yellow-700",
    iconBg: "bg-yellow-100",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white">
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
            <span>🌟</span> Why MangoRoots
          </span>
          <h2 className="heading-section text-stone-900 mb-4">
            Not Just Mangoes.{" "}
            <span className="mango-gradient-text">A Promise.</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            We exist to bring you the most authentic Indian mango experience possible —
            with the quality, care, and respect that such a precious fruit deserves.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const colSpan =
              feature.size === "large"
                ? "lg:col-span-2"
                : feature.size === "medium"
                ? "lg:col-span-2"
                : "lg:col-span-1";

            return (
              <motion.div
                key={feature.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`${colSpan} group relative rounded-2xl bg-gradient-to-br ${feature.gradient}
                            border ${feature.border} p-6 sm:p-7
                            shadow-[0_2px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.09)]
                            transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient border glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                pointer-events-none"
                     style={{ boxShadow: "inset 0 0 0 1.5px rgba(245,158,11,0.3)" }} />

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-stone-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
