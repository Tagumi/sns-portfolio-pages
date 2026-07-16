import { siteContent } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-40 bg-ivory-soft">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <Reveal>
            <p className="font-serif-en text-sm tracking-[0.4em] uppercase text-gold mb-6">
              {about.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-[1.6] whitespace-pre-line text-ink mb-10">
              {about.title}
            </h2>
            <div className="space-y-6">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-sm md:text-base leading-loose text-ink-soft font-light">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <dl className="grid grid-cols-2 gap-px bg-line border border-line">
              {about.stats.map((stat) => (
                <div key={stat.label} className="bg-ivory-soft p-8 md:p-10">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif-en text-4xl text-gold mb-3">{stat.number}</dd>
                  <dd className="text-xs tracking-[0.1em] text-ink-soft">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
