"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem } from "@/components/mobile-nav-item";

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
          <NavItem href="https://x.com/Cookfi_agent" label="CookFi Agent X Profile" />
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
            <MobileNavItem
              href="https://solscan.io/account/7wdHGhLJvh4PKhgbDjaJembQFD8NBujFG494nA1hZ8bW"
              label="View Agent Trades"
            />
            <MobileNavItem href="https://x.com/Cookfi_agent" label="CookFi Agent X Profile" />
            <MobileNavItem href="https://x.com/cookfiai" label="CookFi X Profile" />
            <MobileNavItem href="https://app.cookfi.tech/" label="Chat with Agent" />
            <Button asChild>
              <Link href="https://github.com/Cookfi" className="cursor-pointer">
                View Github
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </motion.header>
  );
}
