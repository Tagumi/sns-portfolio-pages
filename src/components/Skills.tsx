import { siteContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Skills() {
  const { skills } = siteContent;

  return (
    <section id="skills" className="px-6 md:px-10 py-28 md:py-40 bg-ivory-soft">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-serif-en text-sm tracking-[0.4em] uppercase text-gold mb-6">
            {skills.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-16 md:mb-20">
            {skills.title}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-14">
          {skills.categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 100}>
              <h3 className="text-xs tracking-[0.2em] uppercase text-ink-soft pb-4 mb-6 border-b border-line">
                {cat.name}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-ink-soft border border-line px-4 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
