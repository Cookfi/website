import Image from "next/image";

export function FeaturesSection4() {
  return (
    <section className="container gap-20 space-y-24">
      <div className="rounded-t-[2.5rem] bg-gradient-to-b from-primary/25 to-primary/0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative order-2 flex-1 overflow-hidden rounded-t-[2.5rem] rounded-br-[5rem] bg-gradient-to-br from-secondary to-primary pt-10 md:order-none">
            <Image
              alt="SaaS Dashboard"
              src="/images/cookies.webp"
              width={500}
              height={0}
              className="w-full"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-6 md:gap-10">
            <div className="flex flex-col gap-3">
              <span className="pt-6 text-left font-heading font-bold italic text-primary md:pt-10">
                Leveraging Cookie.fun Data Swarm
              </span>
              <h2 className="text-balance text-left font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                fuled by cookies (Cookie.fun, to be specific)
              </h2>
            </div>
            <p className="max-w-lg text-balance text-left text-base text-muted-foreground md:text-lg">
              Cookie.fun Data Swarm APIs power CookFi. Cookie.fun is aggregating and scraping data
              from across the internet and making it available to agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
