import { siteContent } from "@/data/content";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-line">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif-en text-sm tracking-wide text-ink-soft">
          {siteContent.name}
        </span>
        <p className="text-xs text-ink-soft/70">
          © {new Date().getFullYear()} {siteContent.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
