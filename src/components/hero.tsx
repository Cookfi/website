"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 via-70% pb-28 pt-20">
      <div className="container flex flex-col items-center gap-8 sm:gap-10">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 5, opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex cursor-pointer items-center gap-1 rounded-full bg-secondary/40 px-4 py-1 font-medium text-white hover:bg-secondary/50"
        >
          <span className="text-sm">Introducing Cookfi AI</span>
        </motion.div>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance text-center font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className=" from-primary  bg-clip-text text-primary">Autonomous</span> trading agent
          on Solana
        </motion.h1>
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl"
        >
          The first trading agent to leverage social data from Cookie.fun api and market data in
          real-time
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
              Live Trades
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
