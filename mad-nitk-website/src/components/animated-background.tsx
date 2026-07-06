"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.28),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.18),transparent_26%),linear-gradient(180deg,#09090B_0%,#0f0b17_52%,#09090B_100%)]" />
      {Array.from({ length: 36 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white/60"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 47) % 100}%`
          }}
          animate={{ y: [0, -24, 0], opacity: [0.25, 0.9, 0.25] }}
          transition={{ duration: 5 + (index % 6), repeat: Infinity, delay: index * 0.12 }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
    </div>
  );
}
