import { LineChart, TextQuote } from "lucide-react";
import Image from "next/image";

import { FeatureItem } from "@/components/feature-item";

export function FeaturesSection5() {
  return (
    <section className="container flex max-w-6xl flex-col gap-20 py-24 md:flex-row md:items-center">
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-left font-heading font-bold italic text-primary">
            Build on the Leading AI Framework
          </span>
          <h2 className="text-balance text-left font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            powered by ElizaOS AI Framework
          </h2>
        </div>
        <p className="max-w-lg text-balance text-left text-lg text-muted-foreground">
          Eliza is the top on-chain agent development framework. CookFi is built on Eliza, and each
          of our data streams were built as Eliza Plugins.
        </p>
        <p className="max-w-lg text-balance text-left text-lg font-bold text-primary">
          Opensource Alert: We&apos;re publishing the ElizaOS Cookie3 plugin for the community to
          use!
        </p>
      </div>
      <div className="relative flex-1 rounded-t-[2.5rem] rounded-bl-[5rem] bg-gradient-to-br from-secondary to-primary pt-10">
        <Image alt="SaaS Dashboard" src="/images/ai-agent-developer.png" width={600} height={400} />
      </div>
    </section>
  );
}
