import { TextQuote, LineChart } from "lucide-react";
import Image from "next/image";

import { FeatureItem } from "@/components/feature-item";

export function FeaturesSection3() {
  return (
    <section className="container flex flex-col py-24 md:flex-row md:items-center gap-8 gap-20 max-w-6xl">
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-left italic font-heading">
            The Missing Link in Trading Agents
          </span>
          <h2 className="font-heading text-3xl tracking-tight sm:text-4xl text-balance text-left font-bold">
            bringing the &quot;autonamous&quot; back to autonamous agents
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left hidden">
          Gain valuable insights to make informed decisions and optimize your strategy for continued
          success.
        </p>
        <div className="flex flex-col gap-8">
          <FeatureItem
            icon={TextQuote}
            title="Content Recommendations"
            description="AI-generated suggestions ensuring the best performance for your audience."
          />
          <FeatureItem
            icon={LineChart}
            title="Trend Analysis"
            description="Providing insights that align with current interests and maximizes impact"
          />
        </div>
      </div>
      <div className="relative flex-1 pt-10 rounded-tl-[2.5rem] rounded-bl-[5rem] rounded-tr-[2.5rem] bg-gradient-to-br to-primary from-secondary">
        <Image alt="SaaS Dashboard" src="/images/$APE-(1).png" width={600} height={400} />
      </div>
    </section>
  );
}
