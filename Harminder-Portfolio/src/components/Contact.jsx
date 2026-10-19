import profile from "../data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="section-anchor border-t border-edge outline-none">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="rounded-2xl border border-edge bg-gradient-to-br from-panel to-[#0E1A1C] p-8 text-center shadow-[0_0_80px_rgba(94,234,212,0.06)] md:p-12">
            <p className="mb-4 font-mono text-sm text-mint">{profile.contact.kicker}</p>
            <h2 id="contact-heading" className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
              {profile.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-dim">{profile.contact.body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a className="btn-mint max-w-full break-all" href={profile.mailto}>
                {profile.email}
              </a>
              <a className="btn-line" href={profile.resume.href} download={profile.resume.filename}>
                download resume ↓
              </a>
            </div>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-dim">
              {profile.socials.map((item) => (
                <a key={item.id} className="hover:text-mint" href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
              <a className="hover:text-mint" href={profile.phoneHref}>
                {profile.phone}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
