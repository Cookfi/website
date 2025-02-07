"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { MobileNavItem } from "@/components/mobile-nav-item";
import { MobileNavbar } from "@/components/mobile-navbar";
import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <motion.header
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mt-0 flex items-center justify-between gap-10 py-4 md:mt-4"
    >
      <Logo />
      <div className="flex items-center gap-10">
        <nav className="hidden items-center justify-end gap-10 md:flex">
          <NavItem
            href="https://solscan.io/account/7wdHGhLJvh4PKhgbDjaJembQFD8NBujFG494nA1hZ8bW"
            label="View Agent Trades"
          />
          {/* <NavItem href="https://x.com/Cookfi_agent" label="CookFi Agent X Profile" /> */}
          <NavItem href="https://x.com/cookfiai" label="CookFi X Profile" />
          <NavItem href="https://app.cookfi.tech/" label="Chat with Agent" />
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="https://github.com/Cookfi" className="cursor-pointer">
              View Github
            </Link>
          </Button>
        </div>
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem href="/about" label="About" />
            <MobileNavItem href="/docs" label="Docs" />
            <MobileNavItem href="/blog" label="Blog" />
            <MobileNavItem href="/pricing" label="Pricing" />
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Watch The Demo
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </motion.header>
  );
}
