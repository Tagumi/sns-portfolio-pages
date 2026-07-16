import Image from "next/image";
import { siteContent } from "@/data/content";
import Reveal from "./Reveal";
import { withBasePath } from "@/lib/basePath";

export default function Works() {
  const { works } = siteContent;

  return (
    <section id="works" className="px-6 md:px-10 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-serif-en text-sm tracking-[0.4em] uppercase text-gold mb-6">
            {works.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">{works.title}</h2>
          <p className="text-sm leading-loose text-ink-soft font-light mb-16 md:mb-20 text-pretty">
            {works.description}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {works.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 100}>
              <article className="group">
                <p className="text-[11px] tracking-[0.2em] uppercase text-gold">
                  {item.category}
                </p>
                <h3 className="mt-2 font-serif text-lg text-ink">{item.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-relaxed text-ink-soft font-light">
                  {item.description}
                </p>
                <div className="relative aspect-[4/5] bg-ivory-soft border border-line overflow-hidden mt-6">
                  {item.link ? (
                    <>
                      <iframe
                        src={item.link}
                        title={item.title}
                        loading="lazy"
                        tabIndex={-1}
                        className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none"
                      />
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/50 transition-colors"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-ivory text-xs tracking-[0.25em] uppercase">
                          Visit Site ↗
                        </span>
                      </a>
                    </>
                  ) : item.image ? (
                    <Image
                      src={withBasePath(item.image)}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-serif-en text-xs tracking-[0.3em] uppercase text-ink-soft/60 group-hover:text-gold transition-colors">
                        Image {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
