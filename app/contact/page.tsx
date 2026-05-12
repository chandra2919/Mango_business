import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Contact — MangoRoots | Order Fresh Indian Mangoes",
  description:
    "Contact MangoRoots to order premium Indian mangoes. Reach us via WhatsApp or phone. Fast responses, 8am–8pm daily.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <div className="bg-cream-100 py-16 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Let&rsquo;s{" "}
            <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              Talk Mangoes
            </span>
          </h1>
          <p className="text-stone-600 text-lg max-w-lg mx-auto">
            We&rsquo;re available 8am–8pm daily. Drop us a WhatsApp, give us a call, or browse
            our FAQs below.
          </p>
        </div>
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
