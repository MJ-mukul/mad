"use client";

import Link from "next/link";
import { Command, Menu, Moon, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="MAD home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-sm font-black text-black">MAD</span>
          <span className="hidden text-sm font-semibold text-white sm:inline">NIT Kurukshetra</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Command palette">
            <Command className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Theme">
            <Moon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Menu">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className={cn("grid transition-all lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <nav className="overflow-hidden px-4 pb-4" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-3 text-sm text-zinc-200">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
