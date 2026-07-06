"use client";

import { useMotionValue, motion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 140, damping: 24 });
  const springY = useSpring(y, { stiffness: 140, damping: 24 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 hidden h-80 w-80 rounded-full bg-cyan/10 blur-3xl lg:block"
      style={{ x: springX, y: springY }}
    />
  );
}
