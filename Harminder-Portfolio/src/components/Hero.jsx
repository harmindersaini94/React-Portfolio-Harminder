import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../data/profile";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const ease = [0.22, 1, 0.36, 1];

function emphasize(text, phrases) {
  let parts = [{ key: "root", text, emph: false }];

  phrases.forEach((phrase) => {
    const next = [];
    parts.forEach((part) => {
      if (part.emph || !part.text.includes(phrase)) {
        next.push(part);
        return;
      }
      const [before, after] = part.text.split(phrase);
      if (before) next.push({ key: `${part.key}-before`, text: before, emph: false });
      next.push({ key: phrase, text: phrase, emph: true });
      if (after) next.push({ key: `${part.key}-after`, text: after, emph: false });
    });
    parts = next;
  });

  return parts.map((part) =>
    part.emph ? (
      <span key={part.key} className="text-fg">
        {part.text}
      </span>
    ) : (
      <span key={part.key}>{part.text}</span>
    )
  );
}

function TypedCommands({ commands, active }) {
  const reduce = usePrefersReducedMotion();
  const [text, setText] = useState(reduce ? commands[0] : "");

  useEffect(() => {
    if (reduce) {
      setText(commands[0]);
      return undefined;
    }
    if (!active) return undefined;

    let cancelled = false;
    let timer = 0;

    const wait = (ms) =>
      new Promise((resolve) => {
        timer = window.setTimeout(resolve, ms);
      });

    const run = async () => {
      let index = 0;
      while (!cancelled) {
        const command = commands[index % commands.length];
        for (let i = 1; i <= command.length; i += 1) {
          if (cancelled) return;
          setText(command.slice(0, i));
          await wait(36);
        }
        await wait(1400);
        if (cancelled) return;
        for (let i = command.length - 1; i >= 0; i -= 1) {
          if (cancelled) return;
          setText(command.slice(0, i));
          await wait(18);
        }
        index += 1;
        await wait(220);
      }
    };

    run();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [active, commands, reduce]);

  return (
    <>
      <p className="sr-only">Commands: {commands.join(", ")}</p>
      <p aria-hidden="true" className="mt-2 min-h-7 whitespace-nowrap">
        <span className="text-mint">➜</span> <span className="text-violet">~</span> {text}
        <span className="caret" />
      </p>
    </>
  );
}

export default function Hero({ ready }) {
  const reduce = usePrefersReducedMotion();
  const show = ready || reduce;
  const heroSocials = profile.socials.filter((item) => item.hero);

  return (
    <section className="relative" aria-labelledby="hero-heading">
      <div className="grid-mask pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="grid-bg grid-drift absolute -inset-12" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.p
            className="mb-5 inline-flex items-center gap-2 font-mono text-sm text-mint"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_#5EEAD4]" aria-hidden="true" />
            {profile.hero.kicker}
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="text-balance text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.05, ease }}
          >
            {profile.name}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-dim md:text-xl"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.12, ease }}
          >
            {emphasize(profile.hero.lede, profile.hero.ledeEmphasis)}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.18, ease }}
          >
            <a className="btn-mint" href={profile.hero.primaryCta.href}>
              {profile.hero.primaryCta.label}
            </a>
            {heroSocials.map((item) => (
              <a
                key={item.id}
                className="btn-ghost"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label} ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </motion.div>
        </div>

        <figure
          className="min-w-0 overflow-hidden rounded-xl border border-edge bg-panel/90 font-mono text-[13px] shadow-2xl shadow-black/40 md:text-sm"
          aria-label="Terminal summary of Harminder's profile"
        >
          <div className="flex h-10 items-center gap-2 border-b border-edge bg-ink px-4" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-xs text-dim">zsh · surrey-bc</span>
          </div>
          <div className="overflow-x-auto p-4 leading-7 sm:p-5">
            <p className="whitespace-nowrap">
              <span className="text-mint">➜</span> <span className="text-violet">~</span> {profile.terminal.command}
            </p>
            <div className="mt-1 text-[11px] leading-6 text-dim sm:text-[13px] sm:leading-7 md:text-sm">
              <div>{"{"}</div>
              {profile.terminal.fields.map((field, index) => (
                <motion.div
                  key={field.key}
                  className="whitespace-nowrap pl-3"
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                  transition={{ duration: 0.35, delay: show && !reduce ? 0.08 + index * 0.05 : 0, ease }}
                >
                  <span className="text-rose">&quot;{field.key}&quot;</span>
                  <span>: </span>
                  {field.values ? (
                    <span>
                      [
                      {field.values.map((value, valueIndex) => (
                        <span key={value}>
                          <span className="text-amber">&quot;{value}&quot;</span>
                          {valueIndex < field.values.length - 1 ? ", " : ""}
                        </span>
                      ))}
                      ]
                    </span>
                  ) : (
                    <span className="text-amber">&quot;{field.value}&quot;</span>
                  )}
                  {index < profile.terminal.fields.length - 1 ? "," : ""}
                </motion.div>
              ))}
              <div>{"}"}</div>
            </div>
            <TypedCommands commands={profile.terminal.followUps} active={show} />
          </div>
        </figure>
      </div>
    </section>
  );
}
