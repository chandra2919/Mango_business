import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustStats } from "@/components/sections/TrustStats";
import { MangoVarieties } from "@/components/sections/MangoVarieties";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { DeliveryProcess } from "@/components/sections/DeliveryProcess";
import { SeasonalStock } from "@/components/sections/SeasonalStock";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TrustStats />
        <MangoVarieties />
        <WhyChooseUs />
        <Testimonials />
        <DeliveryProcess />
        <SeasonalStock />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
