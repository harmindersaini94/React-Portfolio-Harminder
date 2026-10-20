import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function Pipeline({ pipeline }) {
  const reduce = usePrefersReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "80px" });
  const [centers, setCenters] = useState([]);
  const y = useMotionValue(0);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const measure = () => {
      const rootBox = root.getBoundingClientRect();
      const nodes = root.querySelectorAll("[data-step]");
      const next = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const box = nodes[i].getBoundingClientRect();
        next.push(box.top - rootBox.top + box.height / 2 - 9);
      }
      setCenters((prev) => {
        if (prev.length === next.length && prev.every((value, index) => Math.abs(value - next[index]) < 0.5)) {
          return prev;
        }
        return next;
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    return () => observer.disconnect();
  }, [pipeline]);

  useEffect(() => {
    if (reduce || !inView || centers.length < 2) return undefined;

    let stopped = false;
    let timer = 0;
    let active;
    let index = 0;
    y.set(centers[0]);

    const travel = () => {
      if (stopped) return;
      active = animate(y, centers[index], {
        duration: 0.48,
        ease: [0.45, 0, 0.2, 1],
      });
      active.then(() => {
        if (stopped) return;
        timer = window.setTimeout(() => {
          index = (index + 1) % centers.length;
          travel();
        }, 520);
      });
    };

    travel();

    return () => {
      stopped = true;
      window.clearTimeout(timer);
      active?.stop();
    };
  }, [centers, inView, reduce, y]);

  return (
    <div>
      <p className="mb-3 font-mono text-xs text-dim">{pipeline.caption}</p>
      <div ref={ref} className="relative">
        <div className="absolute bottom-3 left-[7px] top-3 w-px bg-edge" aria-hidden="true" />
        <ol className="space-y-3">
          {pipeline.steps.map((step, index) => (
            <li key={step.title} data-step className="flex gap-3">
              <span
                className="relative z-[1] mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-mint shadow-[0_0_10px_#5EEAD4]"
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1 rounded-lg border border-edge bg-bg/60 px-3 py-2.5">
                <span className="font-mono text-xs text-mint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-0.5 block text-sm text-fg">{step.title}</span>
                <span className="block text-xs text-dim">{step.detail}</span>
              </span>
            </li>
          ))}
        </ol>
        {!reduce && centers.length > 0 && (
          <motion.span
            aria-hidden="true"
            className="absolute left-[-4px] top-0 z-[2] h-[18px] w-[18px] rounded-full border border-mint bg-bg shadow-[0_0_16px_#5EEAD4]"
            style={{ y }}
          />
        )}
      </div>
    </div>
  );
}
