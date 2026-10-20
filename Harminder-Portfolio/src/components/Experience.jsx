import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import profile from "../data/profile";
import Reveal from "./Reveal";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

function CommitDot({ current }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const lit = current || seen;

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-bg ${
        lit ? "bg-mint shadow-[0_0_12px_#5EEAD4]" : "border border-dim bg-edge"
      }`}
    />
  );
}

export default function Experience() {
  const reduce = usePrefersReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    mass: 0.4,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-heading"
      className="section-anchor border-t border-edge outline-none"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-mint">{profile.experienceIntro.kicker}</p>
          <h2 id="experience-heading" className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
            {profile.experienceIntro.title}
          </h2>
        </Reveal>

        <ol ref={ref} className="relative ml-1 space-y-10">
          <div className="absolute bottom-2 left-[6px] top-2 w-px bg-edge" aria-hidden="true" />
          {!reduce && (
            <motion.div
              aria-hidden="true"
              className="absolute bottom-2 left-[6px] top-2 w-px bg-mint shadow-[0_0_12px_#5EEAD4]"
              style={{ scaleY, transformOrigin: "top center" }}
            />
          )}
          {profile.experience.map((job) => (
            <li key={job.id} className="relative pl-8">
              <CommitDot current={job.current} />
              <Reveal>
                <p className="font-mono text-xs text-amber">
                  {job.current ? "HEAD → " : ""}
                  {job.dates} · {job.location}
                </p>
                <h3 className="mt-1 text-xl font-bold">
                  {job.title} · <span className={job.current ? "text-mint" : "text-fg"}>{job.org}</span>
                </h3>
                <ul className="mt-3 max-w-3xl space-y-1.5 leading-relaxed text-dim">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-mint" aria-hidden="true">
                        ›
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
