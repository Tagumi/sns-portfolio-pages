import { siteContent } from "@/data/content";
import Reveal from "./Reveal";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  const { hero, roleJa } = siteContent;

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 md:px-10 pt-32 pb-24 overflow-hidden"
    >
      <HeroVideo />
      <div className="absolute inset-0 bg-ink/55" />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <Reveal>
          <p className="font-serif-en text-sm tracking-[0.4em] uppercase text-gold mb-8">
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[1.35] text-ivory">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 max-w-xl text-sm md:text-base leading-loose text-ivory/80 font-light">
            {hero.lead}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-14 flex items-center gap-6">
            <span className="h-px w-16 bg-ivory/40" />
            <span className="text-xs tracking-[0.25em] uppercase text-ivory/80">{roleJa}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
