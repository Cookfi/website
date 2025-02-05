import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeaturesSection } from "@/components/features-section";
import { FeaturesSection2 } from "@/components/features-section-2";
import { FeaturesSection3 } from "@/components/features-section-3";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <FeaturesSection2 />
      <FeaturesSection3 />
      <CtaSection />
      <Footer />
    </>
  );
}
