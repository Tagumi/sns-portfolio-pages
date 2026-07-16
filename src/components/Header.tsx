"use client";

import { useEffect, useState } from "react";
import { siteContent } from "@/data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ivory/90 backdrop-blur-sm border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          className={`font-serif-en text-2xl tracking-wide transition-colors ${
            scrolled ? "text-ink" : "text-ivory"
          }`}
        >
          {siteContent.name}
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs tracking-[0.2em] uppercase hover:text-gold transition-colors ${
                scrolled ? "text-ink-soft" : "text-ivory/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="メニューを開く"
          className="md:hidden flex flex-col gap-1.5 w-7"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-full transition-colors ${scrolled ? "bg-ink" : "bg-ivory"}`} />
          <span className={`h-px w-full transition-colors ${scrolled ? "bg-ink" : "bg-ivory"}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-ivory">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm tracking-[0.15em] uppercase text-ink-soft"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
