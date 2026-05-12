"use client";

import { motion } from "framer-motion";
import { Leaf, Plane, Heart, Award, Clock, ShieldCheck, Users, Sparkles } from "lucide-react";

const features = [
  {
    id: "farm-fresh", icon: Leaf, size: "large",
    title: "Farm-Direct Freshness",
    description: "Every mango is sourced directly from orchards we trust — no middlemen, no long cold storage. Straight from the tree to your family.",
    bg: "#F2F8F4", border: "#C8E0CC", iconBg: "#DAF0DF", iconColor: "#3A7D5A",
  },
  {
    id: "air-shipped", icon: Plane, size: "medium",
    title: "Air-Flown from India",
    description: "Airlifted directly — not sea freight. Your mangoes fly the same route you did when you came to America.",
    bg: "#F2F5FD", border: "#C4D4EC", iconBg: "#DAEAF6", iconColor: "#3A5C8A",
  },
  {
    id: "natural-ripening", icon: Heart, size: "medium",
    title: "100% Naturally Ripened",
    description: "Never chemically treated. Our mangoes ripen the way your grandmother's did — naturally, slowly, perfectly.",
    bg: "#FDF4F6", border: "#ECC8D0", iconBg: "#F8DAE0", iconColor: "#8A3A50",
  },
  {
    id: "handpicked", icon: Award, size: "small",
    title: "Handpicked Premium Grade",
    description: "Only Grade A mangoes make the cut. Each piece is individually inspected for size, colour, and perfection.",
    bg: "#FDF8F0", border: "#EDD9BC", iconBg: "#F5EBD8", iconColor: "#8B5218",
  },
  {
    id: "fast-delivery", icon: Clock, size: "small",
    title: "2–4 Day Fresh Delivery",
    description: "Overnight and 2-day air shipping. Your mangoes arrive fresh, ripe, and ready — every single time.",
    bg: "#F4F2FD", border: "#D0C8EC", iconBg: "#E4DEFA", iconColor: "#5A3A8A",
  },
  {
    id: "usda", icon: ShieldCheck, size: "small",
    title: "USDA Approved & Safe",
    description: "Fully certified and compliant with all US agricultural import regulations. Complete peace of mind.",
    bg: "#F2F6FD", border: "#BFD0E8", iconBg: "#DAE8F6", iconColor: "#3A5C8A",
  },
  {
    id: "community", icon: Users, size: "medium",
    title: "Loved by 1000+ Families",
    description: "From Diwali gifts to weekly family rituals — thousands of Indian-American families trust us every mango season.",
    bg: "#FEF7F0", border: "#EDD0B0", iconBg: "#FAE5CC", iconColor: "#8A4A18",
  },
  {
    id: "exclusive", icon: Sparkles, size: "large",
    title: "Rare Seasonal Exclusivity",
    description: "These varieties are only available May–August. Once the season ends, they're gone until next year. This is not a supermarket shelf.",
    bg: "#FDFAF0", border: "#E8DCA8", iconBg: "#F5ECC0", iconColor: "#7A6010",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="badge-premium mb-4 inline-flex">🌟 Why MangoRoots</span>
          <h2 className="heading-section mb-4" style={{ color: "#2E2520" }}>
            Not Just Mangoes.{" "}
            <span className="mango-gradient-text">A Promise.</span>
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            We exist to bring the most authentic Indian mango experience possible — with the
            quality, care, and respect such a precious fruit deserves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            const colSpan = f.size !== "small" ? "lg:col-span-2" : "lg:col-span-1";
            return (
              <motion.div
                key={f.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`${colSpan} group relative rounded-2xl p-6 sm:p-7 overflow-hidden`}
                style={{
                  background: f.bg,
                  border: `1px solid ${f.border}`,
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: f.iconBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.iconColor }} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#2E2520" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A6B62" }}>
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
