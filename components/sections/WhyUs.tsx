import { Highlight, SectionTitle } from "@/components/shared/Highlight";
import { cn } from "@/lib/utils";

const REASONS = [
  {
    title: "Ngobrol dulu, bukan ngomongin IT",
    desc: "Ceritain bisnismu apa adanya. Nggak perlu ngerti istilah teknis, kami yang menerjemahkan",
    tone: "bg-yellow text-ink",
  },
  {
    title: "Intip rancangannya dulu",
    desc: "Kamu lihat gambaran tampilannya sebelum kami mulai membangun. Cocok? Lanjut. Belum? Kita rapikan bareng",
    tone: "bg-blue text-white",
  },
  {
    title: "Kelola webnya sendiri",
    desc: "Ganti foto, harga, atau info kapan aja lewat dashboard yang gampang dipahami. Jadi nggak perlu nunggu kami",
    tone: "bg-teal text-ink",
  },
  {
    title: "Dibuat sesuai bisnismu",
    desc: "Bukan template. Fiturnya kami sesuaikan dengan cara kerja usahamu, bukan sebaliknya",
    tone: "bg-coral text-white",
  },
];

export function WhyUs() {
  return (
    <section id="kenapa" className="sheet bg-cream pb-28 pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>
          Kenapa <Highlight tone="coral">Elevore</Highlight>
        </SectionTitle>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className={cn(
                "rounded-2xl p-6 shadow-[0_12px_28px_-18px_rgba(27,31,58,0.5)] transition-transform hover:-translate-y-1",
                r.tone
              )}
            >
              <h3 className="text-base font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-90">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
