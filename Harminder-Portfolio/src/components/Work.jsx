import { motion } from "framer-motion";
import profile from "../data/profile";
import Counter from "./Counter";
import Pipeline from "./Pipeline";
import Reveal from "./Reveal";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

function CardFrame({ children, className = "" }) {
  const reduce = usePrefersReducedMotion();

  return (
    <motion.article
      className={`group relative rounded-2xl border border-edge bg-panel ${className}`}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-mint/0 transition-colors duration-200 group-hover:border-mint" aria-hidden="true" />
      <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-mint/0 transition-colors duration-200 group-hover:border-mint" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-mint/0 transition-colors duration-200 group-hover:border-mint" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-mint/0 transition-colors duration-200 group-hover:border-mint" aria-hidden="true" />
      {children}
    </motion.article>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a className="text-mint hover:underline" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function Work() {
  const [featured, ...rest] = profile.caseStudies;

  return (
    <section id="work" tabIndex={-1} aria-labelledby="work-heading" className="section-anchor border-t border-edge outline-none">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-mint">{profile.work.kicker}</p>
          <h2 id="work-heading" className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
            {profile.work.title}
          </h2>
        </Reveal>

        <Reveal>
          <CardFrame className="grid overflow-hidden lg:grid-cols-2">
            <div className="p-6 md:p-8">
              <p className="mb-3 font-mono text-xs uppercase tracking-wide text-amber">{featured.eyebrow}</p>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">{featured.title}</h3>
              <p className="leading-relaxed text-dim">
                {featured.body}{" "}
                <span className="text-amber">({featured.note})</span>.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs" aria-label="Technologies">
                {featured.tags.map((tag) => (
                  <li key={tag} className="rounded border border-edge px-2.5 py-1 text-mint">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-edge bg-ink p-6 md:p-8 lg:border-l lg:border-t-0">
              <Pipeline pipeline={featured.pipeline} />
            </div>
          </CardFrame>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((study) => (
            <Reveal key={study.id}>
              <CardFrame className="h-full p-6 md:p-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-wide text-amber">{study.eyebrow}</p>
                <h3 className="mb-3 text-xl font-bold md:text-2xl">{study.title}</h3>
                <p className="leading-relaxed text-dim">{study.body}</p>
                {study.hops && (
                  <ol className="mt-5 flex flex-wrap gap-2 font-mono text-xs" aria-label="Payment flow">
                    {study.hops.map((hop, index) => (
                      <li key={hop} className="flex items-center gap-2">
                        <span
                          className="hop-chip rounded border border-edge px-2 py-1 text-dim"
                          style={{ animationDelay: `${index * 0.48}s` }}
                        >
                          {hop}
                        </span>
                        {index < study.hops.length - 1 && (
                          <span className="text-mint/80" aria-hidden="true">
                            →
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                )}
                {study.metrics && (
                  <dl className="mt-5 grid grid-cols-3 gap-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="sr-only">{metric.label}</dt>
                        <dd>
                          <Counter value={metric.value} suffix={metric.suffix} label={metric.label} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </CardFrame>
            </Reveal>
          ))}
        </div>

        <h3 className="mb-6 mt-16 font-mono text-sm font-medium text-mint">{profile.work.sideKicker}</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {profile.projects.map((project) => (
            <Reveal key={project.id}>
              <CardFrame className="h-full overflow-hidden hover:border-mint/60">
                {project.image ? (
                  <div className="overflow-hidden border-b border-edge">
                    <motion.img
                      src={project.image}
                      alt={project.imageAlt}
                      width={1280}
                      height={470}
                      loading="lazy"
                      decoding="async"
                      className="aspect-video w-full object-cover object-top"
                      whileHover={{ scale: 1.035 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                ) : (
                  <div
                    className="flex aspect-video flex-col justify-center border-b border-edge bg-ink px-4 font-mono text-[11px] leading-6 text-dim sm:text-xs"
                    aria-hidden="true"
                  >
                    <p>
                      <span className="text-mint">➜</span> ~/portfolio
                    </p>
                    <p className="mt-2 text-fg">React · Framer Motion · Tailwind</p>
                    <p>CI/CD · GitHub · Vercel</p>
                    <p className="mt-3 text-amber">live · react-portfolio-harminder</p>
                  </div>
                )}
                <div className="p-5">
                  <h4 className="text-lg font-bold">{project.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-dim">{project.summary}</p>
                  <p className="mt-4 flex gap-4 font-mono text-xs">
                    {project.live && <ExternalLink href={project.live}>live ↗</ExternalLink>}
                    {project.source && <ExternalLink href={project.source}>source ↗</ExternalLink>}
                  </p>
                </div>
              </CardFrame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
