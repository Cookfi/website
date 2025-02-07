import Image from "next/image";

import { StatItem } from "@/components/stat-item";

export function FeaturesSection2() {
  return (
    <section className="container gap-20 space-y-24">
      <div className="rounded-t-[2.5rem] bg-gradient-to-b from-primary/25 to-primary/0">
        <div className="grid grid-cols-2 gap-8">
          <div className="relative order-1 flex-1 overflow-hidden rounded-t-[2.5rem] rounded-br-[5rem] bg-gradient-to-br from-secondary to-primary pt-10 md:order-none">
            <Image alt="SaaS Dashboard" src="/images/$APE-(2).png" width={500} height={0} />
          </div>
          <div className="flex flex-1 flex-col items-start gap-10">
            <div className="flex flex-col gap-3">
              <span className="pt-10 text-left font-heading font-bold italic text-primary">
                Trading Like A Human
              </span>
              <h2 className="text-balance text-left font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                capabilities to trade on major dexs on Solana
              </h2>
            </div>
            <p className="max-w-lg text-balance text-left text-lg text-muted-foreground">
              CookFi takes his market analysis and uses it to place trades directly and autonamously
              thanks to solana agent kit.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <StatItem label="Autonamous" value="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
