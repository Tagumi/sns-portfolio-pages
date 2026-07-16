"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { withBasePath } from "@/lib/basePath";

type FeaturedImage = {
  title: string;
  image?: string;
  noBorder?: boolean;
};

export default function FeaturedImages({ images }: { images: FeaturedImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-14 max-w-xl mx-auto sm:max-w-none mt-14 md:mt-20">
        {images.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <p className="mb-4 font-serif text-lg text-ink">{item.title}</p>
            <div
              className={`relative aspect-square bg-ivory-soft overflow-hidden ${
                item.noBorder ? "" : "border border-line"
              } ${item.image ? "cursor-zoom-in" : ""}`}
              onClick={() => item.image && setOpenIndex(i)}
            >
              {item.image ? (
                <Image
                  src={withBasePath(item.image)}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-serif-en text-xs tracking-[0.3em] uppercase text-ink-soft/60">
                    Image
                  </span>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {active?.image && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-6 md:p-16"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="閉じる"
            onClick={() => setOpenIndex(null)}
            className="absolute top-6 right-6 text-ivory text-3xl leading-none"
          >
            ×
          </button>
          <div className="relative w-full h-full">
            <Image
              src={withBasePath(active.image)}
              alt={active.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
