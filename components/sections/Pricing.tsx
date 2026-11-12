import { Highlight } from "@/components/shared/Highlight";
import { whatsappLink } from "@/lib/site";

export function Pricing() {
  return (
    <section id="harga" className="sheet bg-ink pb-24 pt-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <Highlight tone="yellow">Harga</Highlight>
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            Harga menyesuaikan kerumitan dan fitur. Estimasi kami kasih setelah ngobrol.
          </p>
        </div>

        <a
          href={whatsappLink("Halo Elevore, aku mau tanya estimasi harga")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-2xl bg-yellow px-6 py-5 text-ink shadow-[0_14px_30px_-12px_rgba(253,190,59,0.6)] transition hover:-translate-y-1 hover:rotate-[-1deg]"
        >
          <span className="block text-2xl font-bold sm:text-3xl">Mulai Rp300rb!</span>
          <span className="mt-1 block text-xs">Ketuk untuk hubungi kami sekarang</span>
        </a>
      </div>
    </section>
  );
}
