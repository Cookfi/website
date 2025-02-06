import Image from "next/image";

import { StatItem } from "@/components/stat-item";

export function FeaturesSection4() {
  return (
    <section className="container gap-20 space-y-24">
      <div className="rounded-t-[2.5rem] bg-gradient-to-b from-primary/25 to-primary/0">
        <div className="grid grid-cols-2 gap-8">
          <div className="relative order-1 flex-1 overflow-hidden rounded-t-[2.5rem] rounded-br-[5rem] bg-gradient-to-br from-secondary to-primary pt-10 md:order-none">
            <Image alt="SaaS Dashboard" src="/images/cookies.webp" width={500} height={0} />
          </div>
          <div className="flex flex-1 flex-col items-start gap-10">
            <div className="flex flex-col gap-3">
              <span className="pt-10 text-left font-heading font-bold italic text-primary">
                Leveraging Cookie3&apos;s Data Swarm
              </span>
              <h2 className="text-balance text-left font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                fuled by cookies (Cookie3, to be specific)
              </h2>
            </div>
            <p className="max-w-lg text-balance text-left text-lg text-muted-foreground">
              Cookie3 Data Swarm APIs power CookFi. Cookie3 is aggregating and scraping data from
              across the internet and making it available to agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
