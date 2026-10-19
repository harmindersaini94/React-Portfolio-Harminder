import profile from "../data/profile";
import Avatar from "./Avatar";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-heading" className="section-anchor border-t border-edge outline-none">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 md:grid-cols-[auto_1fr] md:px-8 md:py-20">
        <Reveal>
          <Avatar />
        </Reveal>
        <div>
          <Reveal>
            <p className="mb-3 font-mono text-sm text-mint">{profile.about.kicker}</p>
            <h2 id="about-heading" className="max-w-3xl text-pretty text-2xl font-semibold leading-snug md:text-3xl">
              {profile.about.title}
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-dim">{profile.about.body}</p>
          </Reveal>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {profile.education.map((item, index) => (
              <Reveal key={item.school} delay={0.08 + index * 0.06}>
                <div className="h-full rounded-xl border border-edge bg-panel/70 p-4">
                  <dt className="font-medium text-fg">{item.credential}</dt>
                  <dd className="mt-1 text-sm text-dim">
                    {item.school}
                    <span className="mt-1 block">{item.detail}</span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
