import profile from "../data/profile";
import { RevealGroup, RevealItem } from "./Reveal";

function SkillText({ item }) {
  if (typeof item === "string") return item;
  return (
    <>
      {item.label} <span className="text-amber">({item.note})</span>
    </>
  );
}

export default function Skills() {
  return (
    <section id="stack" tabIndex={-1} aria-labelledby="stack-heading" className="section-anchor border-t border-edge outline-none">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <RevealItem>
          <p className="mb-2 font-mono text-sm text-mint">{profile.stack.kicker}</p>
          <h2 id="stack-heading" className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
            {profile.stack.title}
          </h2>
        </RevealItem>
        <RevealGroup className="grid gap-4 font-mono text-sm sm:grid-cols-2 lg:grid-cols-3">
          {profile.stack.groups.map((group) => (
            <RevealItem key={group.id}>
              <div
                className={`h-full rounded-xl border bg-panel p-5 transition-colors hover:border-mint/50 ${
                  group.accent ? "border-mint/40" : "border-edge"
                }`}
              >
                <h3 className="mb-3 text-violet">{group.label}</h3>
                <p className="leading-7 text-dim">
                  {group.items.map((item, index) => (
                    <span key={typeof item === "string" ? item : item.label}>
                      {index > 0 ? " · " : ""}
                      <SkillText item={item} />
                    </span>
                  ))}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
