import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-6 px-6 relative flex-1 rounded-tl-[2.5rem] rounded-bl-[5rem] rounded-tr-[2.5rem] bg-gradient-to-br to-primary overflow-hidden pt-24 from-secondary">
        <h2 className="font-heading text-3xl tracking-tight sm:text-4xl text-balance text-primary-foreground text-left font-bold md:text-5xl">
          check out our demo!
        </h2>
        <p className="max-w-xl text-lg text-primary-foreground/80 text-center">
          Watch our video where we show the full power of CookFi AI!
        </p>
        <Button
          size="lg"
          asChild
          variant="outline"
          className="cursor-pointer border-border bg-background hover:bg-background/90"
        >
          <Link href="#">View</Link>
        </Button>
        <Image
          alt="SaaS Dashboard"
          src="/images/Group-999-(1).png"
          width={900}
          height={698}
          priority
          className="mt-0"
        />
      </div>
    </section>
  );
}
