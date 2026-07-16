import { siteContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Career() {
  const { career } = siteContent;

  return (
    <section id="career" className="px-6 md:px-10 py-28 md:py-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-serif-en text-sm tracking-[0.4em] uppercase text-gold mb-6">
            {career.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-16 md:mb-20">
            {career.title}
          </h2>
        </Reveal>

        <ol className="space-y-14">
          {career.items.map((item, i) => (
            <Reveal key={item.role + item.period} delay={i * 100}>
              <li className="pl-8 border-l border-line relative">
                <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-gold" />
                <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-2">
                  {item.period}
                </p>
                <p className="font-serif text-xl text-ink">{item.role}</p>
                {item.org && <p className="mt-1 text-xs text-ink-soft">{item.org}</p>}
                <p className="mt-4 text-sm leading-relaxed text-ink-soft font-light">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
