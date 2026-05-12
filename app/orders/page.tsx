import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SeasonalStock } from "@/components/sections/SeasonalStock";

export const metadata: Metadata = {
  title: "Order Indian Mangoes — MangoRoots | Fresh Delivery USA",
  description:
    "Order premium Indian mangoes online. Pre-order weekend stock before it sells out. Fast delivery across 10+ US states.",
};

export default function OrdersPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <div className="bg-cream-100 py-16 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Order{" "}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              Your Mangoes
            </span>
          </h1>
          <p className="text-stone-600 text-lg max-w-lg mx-auto">
            Pre-order via WhatsApp to secure your weekend stock. Limited quantities — first come,
            first served.
          </p>
        </div>
        <SeasonalStock />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
