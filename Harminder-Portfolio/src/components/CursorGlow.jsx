import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const SIZE = 460;

export default function CursorGlow() {
  const reduce = usePrefersReducedMotion();
  const [finePointer, setFinePointer] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    return window.matchMedia("(pointer: fine)").matches;
  });
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const springX = useSpring(x, { stiffness: 70, damping: 22, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 70, damping: 22, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const onChange = () => setFinePointer(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduce || !finePointer) return undefined;

    const onMove = (event) => {
      x.set(event.clientX - SIZE / 2);
      y.set(event.clientY - SIZE / 2);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [finePointer, reduce, x, y]);

  if (reduce || !finePointer) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] rounded-full"
      style={{
        width: SIZE,
        height: SIZE,
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, rgba(94,234,212,0.16) 0%, rgba(94,234,212,0.05) 38%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
