import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MangoVarieties } from "@/components/sections/MangoVarieties";

export const metadata: Metadata = {
  title: "Our Mangoes — MangoRoots | Premium Indian Mango Varieties",
  description:
    "Explore our premium Indian mango varieties: Banginapalli, Rasalu, Alphonso, Kesar, Himayat & Mallika. Handpicked and delivered fresh across the USA.",
};

export default function MangoesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <div className="bg-cream-100 py-16 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Our Premium{" "}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              Mango Varieties
            </span>
          </h1>
          <p className="text-stone-600 text-lg max-w-xl mx-auto">
            Six legendary Indian mango varieties, each with its own story, flavor, and soul.
          </p>
        </div>
        <MangoVarieties />
      </main>
      <Footer />
    </>
  );
}
