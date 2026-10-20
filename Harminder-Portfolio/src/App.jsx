import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import About from "./components/About";
import BootScreen from "./components/BootScreen";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";
import Work from "./components/Work";
import usePrefersReducedMotion from "./hooks/usePrefersReducedMotion";

function alreadyBooted() {
  if (typeof window === "undefined") return true;
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
    return sessionStorage.getItem("hs-boot") === "1";
  } catch {
    return false;
  }
}

export default function App() {
  const reduce = usePrefersReducedMotion();
  const shellRef = useRef(null);
  const [booted, setBooted] = useState(alreadyBooted);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    if (booted) shell.removeAttribute("inert");
    else shell.setAttribute("inert", "");
  }, [booted]);

  const finishBoot = () => {
    try {
      sessionStorage.setItem("hs-boot", "1");
    } catch {
      /* private mode */
    }
    setBooted(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <CursorGlow />
      <div ref={shellRef} className="relative z-10">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-mint focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:font-bold focus:text-bg focus:outline-none"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero ready={booted || reduce} />
          <About />
          <Work />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      <AnimatePresence>
        {!booted && !reduce && <BootScreen key="boot" onDone={finishBoot} />}
      </AnimatePresence>
    </MotionConfig>
  );
}
