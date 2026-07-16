import { siteContent } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-serif-en text-sm tracking-[0.4em] uppercase text-gold mb-8">
            {contact.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl leading-[1.6] whitespace-pre-line text-ink mb-8">
            {contact.title}
          </h2>
          <p className="text-sm leading-loose text-ink-soft font-light mb-14">
            {contact.description}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-4 border border-ink px-10 py-4 text-xs tracking-[0.25em] uppercase text-ink hover:bg-ink hover:text-ivory transition-colors"
          >
            ✉ SEND MAIL
          </a>
        </Reveal>
      </div>
    </section>
  );
}
