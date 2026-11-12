import { Highlight } from "@/components/shared/Highlight";
import { whatsappLink } from "@/lib/site";

export function CTA() {
  return (
    <section id="kontak" className="sheet bg-blue pb-32 pt-20 text-center text-white">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Siap <Highlight tone="yellow">cerita?</Highlight>
        </h2>
        <p className="mt-4 text-sm text-white/85">Ubah cerita kamu jadi alat untuk bantu bisnismu</p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-lg bg-yellow px-6 py-3 text-sm font-semibold text-ink shadow-[0_10px_24px_-10px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
        >
          Ngobrol via WhatsApp
        </a>
      </div>
    </section>
  );
}
