"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

export function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16 });
  const springY = useSpring(y, { stiffness: 220, damping: 16 });

  return (
    <motion.div
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.24);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.24);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
    >
      <Link
        href={href}
        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-black transition hover:bg-zinc-200"
      >
        {children}
      </Link>
    </motion.div>
  );
}
