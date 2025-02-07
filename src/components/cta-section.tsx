import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container">
      <div className="relative flex flex-1 flex-col items-center gap-6 overflow-hidden rounded-t-[2.5rem] rounded-bl-[5rem] bg-gradient-to-br from-secondary to-primary px-6 pb-20 pt-24">
        <h2 className="text-balance text-left font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
          check out CookFi&apos;s Trades!
        </h2>
        <p className="max-w-xl text-center text-lg text-primary-foreground/80">
          Watch our agents trades in real-time, or ask him about his recent wins using our chat
          interface!
        </p>
        <div className="flex columns-3">
          <Button asChild>
            <Link
              href="https://solscan.io/account/7wdHGhLJvh4PKhgbDjaJembQFD8NBujFG494nA1hZ8bW"
              target="_blank"
              className="mx-5 cursor-pointer"
            >
              View Trades
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://app.cookfi.tech/" className="mx-5 cursor-pointer">
              Chat with Agent
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://x.com/Cookfi_agent" target="_blank" className="mx-5 cursor-pointer">
              View Agent X Profile
            </Link>
          </Button>
        </div>
        <Image
          alt="SaaS Dashboard"
          src="/images/chat.png"
          width={900}
          height={698}
          priority
          className="mt-0"
        />
      </div>
    </section>
  );
}
