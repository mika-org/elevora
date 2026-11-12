import { Highlight, SectionTitle } from "@/components/shared/Highlight";

const TESTIMONIALS = [
  {
    quote:
      "Awalnya bingung mau mulai dari mana. Eh, malah diajak ngobrol santai soal usahaku dulu, dan tiba-tiba udah ada solusinya",
    by: "Iki, penjual ayam kampung",
    mark: "text-blue",
  },
  {
    quote:
      "Aku bisa lihat tampilannya dulu sebelum jadi. Jadi tenang, nggak takut hasilnya beda dari yang dibayangin.",
    by: "Kang Irpan, Warkop Galaksi",
    mark: "text-coral",
  },
  {
    quote:
      "Sekarang ganti harga dan foto produk bisa sendiri, nggak perlu nunggu dan nanya-nanya lagi.",
    by: "Agus Mulyana, Tukang Fotokopi",
    mark: "text-yellow",
  },
];

export function Testimonials() {
  return (
    <section id="testimoni" className="sheet bg-peach pb-28 pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>
          Kata <Highlight tone="teal">mereka</Highlight>
        </SectionTitle>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.by}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_12px_28px_-18px_rgba(27,31,58,0.4)]"
            >
              <span aria-hidden className={`font-serif text-5xl font-black leading-none ${t.mark}`}>
                &ldquo;
              </span>
              <blockquote className="mt-3 text-[15px] font-semibold leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs text-ink-soft">{t.by}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
