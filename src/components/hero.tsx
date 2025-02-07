"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { CtaButton } from "@/components/cta-button";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 via-70% pb-28 pt-20">
      <div className="container flex flex-col items-center gap-8 sm:gap-10">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 5, opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex cursor-pointer items-center gap-1 rounded-full bg-secondary/10 px-4 py-1 font-medium text-secondary hover:bg-secondary/20"
        >
          <span className="text-sm">Introducing Cookfi AI</span>
        </motion.div>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance text-center font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          the trading agent with&nbsp;
          <span className=" from-primary  bg-clip-text text-primary">real intelligence</span>
        </motion.h1>
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl"
        >
          CookFi AI is the first trading agent to leverage Cookie3&apos;s real-time data feeds to
          make intelligent trades and win big profits
        </motion.p>
        <motion.div
          animate={{ y: 0.4, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex columns-3"
        >
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
        </motion.div>
        <motion.div
          animate={{ y: 0.4, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Image alt="SaaS Dashboard" src="/images/$APE.png" width={1100} height={698} priority />
        </motion.div>
      </div>
    </section>
  );
}
