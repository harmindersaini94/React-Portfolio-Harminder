import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import profile from "../data/profile";

export default function BootScreen({ onDone }) {
  const lines = profile.boot;
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  const skipRef = useRef(null);
  const [cursor, setCursor] = useState({ line: 0, chars: 0 });
  const finished = useRef(false);

  useEffect(() => {
    skipRef.current?.focus();
  }, []);

  useEffect(() => {
    let timer = 0;
    let line = 0;
    let chars = 0;
    let cancelled = false;

    const finish = () => {
      if (cancelled || finished.current) return;
      finished.current = true;
      onDoneRef.current();
    };

    const tick = () => {
      if (cancelled || finished.current) return;
      const text = lines[line].text;
      if (chars < text.length) {
        chars += 1;
        setCursor({ line, chars });
        timer = window.setTimeout(tick, chars < 4 ? 36 : 22);
        return;
      }
      if (line === lines.length - 1) {
        timer = window.setTimeout(finish, 560);
        return;
      }
      timer = window.setTimeout(() => {
        line += 1;
        chars = 0;
        setCursor({ line, chars });
        timer = window.setTimeout(tick, 90);
      }, 160);
    };

    timer = window.setTimeout(tick, 220);

    const onKey = (event) => {
      if (event.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [lines]);

  const skip = () => {
    if (finished.current) return;
    finished.current = true;
    onDoneRef.current();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-bg px-5"
      role="dialog"
      aria-modal="true"
      aria-label="Site intro"
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      exit={{
        clipPath: "inset(0% 0% 100% 0%)",
        transition: { duration: 0.55, ease: [0.65, 0, 0.35, 1] },
      }}
    >
      <div className="w-full max-w-md overflow-hidden rounded-xl border border-edge bg-panel font-mono text-sm shadow-2xl shadow-black/40">
        <div className="flex h-10 items-center gap-2 border-b border-edge bg-ink px-4" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-xs text-dim">boot · harminder.dev</span>
        </div>
        <div className="space-y-1.5 px-4 py-4 sm:px-5">
          {lines.map((line, index) => {
            const shown =
              index < cursor.line ? line.text : index === cursor.line ? line.text.slice(0, cursor.chars) : "";
            const complete = index < cursor.line || (index === cursor.line && cursor.chars === line.text.length);
            return (
              <p key={line.text} className="grid h-7 grid-cols-[1fr_auto] items-center gap-3">
                <span className="truncate">
                  <span className="text-mint">› </span>
                  <span className="text-fg">{shown}</span>
                  {index === cursor.line && !complete && <span className="caret" aria-hidden="true" />}
                </span>
                <span className={complete ? "text-mint" : "invisible"}>{line.status}</span>
              </p>
            );
          })}
        </div>
        <div className="flex justify-end border-t border-edge px-4 py-3">
          <button ref={skipRef} type="button" className="btn-resume" onClick={skip}>
            skip intro
          </button>
        </div>
      </div>
    </motion.div>
  );
}
