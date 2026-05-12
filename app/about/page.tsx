import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { DeliveryProcess } from "@/components/sections/DeliveryProcess";

export const metadata: Metadata = {
  title: "About Us — MangoRoots | Our Story",
  description:
    "Learn about MangoRoots — our mission to bring the most authentic premium Indian mangoes to Indian-American families across the USA.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <div
          className="py-20 text-center"
          style={{ background: "linear-gradient(160deg, #FFFDF7 0%, #FFF8E7 60%, #FEF3C7 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                             bg-amber-100 text-amber-700 border border-amber-200 mb-6">
              🥭 Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Born from a{" "}
              <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                Childhood Memory
              </span>
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              MangoRoots was born in 2022 from a simple, powerful feeling: the heartache of
              missing your favorite mango variety on a hot American summer day. We know that
              feeling intimately — because we felt it too.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              We built MangoRoots to ensure that every Indian family in America can close their
              eyes and taste the summer they grew up in — one perfect mango at a time.
            </p>
          </div>
        </div>
        <WhyChooseUs />
        <DeliveryProcess />
      </main>
      <Footer />
    </>
  );
}
