import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function Counter({ value, suffix = "%", label }) {
  const reduce = usePrefersReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(reduce ? value : 0);
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return undefined;
    }
    if (!inView) return undefined;

    motionValue.set(0);
    const controls = animate(motionValue, value, {
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, motionValue, reduce, value]);

  return (
    <div ref={ref}>
      <p className="sr-only">
        {value}
        {suffix} {label}
      </p>
      <p aria-hidden="true" className="font-mono text-2xl font-bold tabular-nums text-mint">
        {display}
        {suffix}
      </p>
      <p aria-hidden="true" className="text-xs text-dim">
        {label}
      </p>
    </div>
  );
}
