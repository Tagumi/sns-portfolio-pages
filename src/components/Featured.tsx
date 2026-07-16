import { siteContent } from "@/data/content";
import Reveal from "./Reveal";
import ReelVideo from "./ReelVideo";
import FeaturedImages from "./FeaturedImages";

export default function Featured() {
  const { featured } = siteContent;

  return (
    <section id="featured" className="px-6 md:px-10 py-28 md:py-40 bg-ivory-soft">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-serif-en text-sm tracking-[0.4em] uppercase text-gold mb-6">
            {featured.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">{featured.title}</h2>
          <p className="max-w-xl text-sm leading-loose text-ink-soft font-light mb-16 md:mb-20">
            {featured.description}
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-x-10 gap-y-14">
          {featured.reels.map((reel, i) => (
            <Reveal key={reel.title} delay={i * 100} className="w-full max-w-xl">
              <p className="mb-4 font-serif text-lg text-ink">{reel.title}</p>
              <div className="aspect-[4/5] bg-ink border border-line overflow-hidden">
                <ReelVideo src={reel.video} />
              </div>
            </Reveal>
          ))}
        </div>

        <FeaturedImages images={featured.images} />
      </div>
    </section>
  );
}
