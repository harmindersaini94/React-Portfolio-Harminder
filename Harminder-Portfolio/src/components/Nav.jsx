import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import profile from "../data/profile";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

function scrollToSection(href) {
  const id = href.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  target.focus({ preventScroll: true });
}

export default function Nav() {
  const reduce = usePrefersReducedMotion();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = profile.nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onNavigate = (event, href) => {
    event.preventDefault();
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-edge bg-bg/75 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-5 font-mono text-sm md:px-8">
        <a href="#top" className="shrink-0 text-fg" onClick={(event) => onNavigate(event, "#top")}>
          <span className="text-mint">~/</span>harminder<span className="text-dim">.dev</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-4 md:gap-5">
          <div className="hidden items-center gap-5 md:flex">
            {profile.nav.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative py-1 transition-colors hover:text-mint ${isActive ? "text-mint" : "text-dim"}`}
                  onClick={(event) => onNavigate(event, item.href)}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-mint"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
          <a className="btn-resume" href={profile.resume.href} download={profile.resume.filename}>
            resume.pdf ↓
          </a>
          <button
            type="button"
            className="rounded-md border border-edge px-2.5 py-1 text-dim hover:border-mint hover:text-mint md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "close" : "menu"}
          </button>
        </nav>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={menuId}
            key="mobile-nav"
            className="overflow-hidden border-t border-edge md:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0.01 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 font-mono text-sm">
              {profile.nav.map((item) => {
                const id = item.href.slice(1);
                const isActive = active === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`rounded-md px-2 py-2 hover:bg-panel hover:text-mint ${isActive ? "text-mint" : "text-dim"}`}
                    onClick={(event) => onNavigate(event, item.href)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
