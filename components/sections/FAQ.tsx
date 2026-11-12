"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Highlight, SectionTitle } from "@/components/shared/Highlight";
import { cn } from "@/lib/utils";

// TODO: review answers 2–6 with the team (only #1 is written in the Figma file).
const FAQS = [
  {
    q: "Harus paham teknis?",
    a: "Nggak kok. Kamu cukup cerita soal bisnismu. Urusan teknis kami yang pegang dan kami pastikan sesuai sama kebutuhan bisnismu.",
  },
  {
    q: "Berapa lama pengerjaannya?",
    a: "Tergantung kerumitan dan fiturnya. Setelah ngobrol, kami kasih perkiraan waktu yang jelas sebelum mulai mengerjakan.",
  },
  {
    q: "Bagaimana kalau mau ubah isi website?",
    a: "Kamu bisa ganti foto, harga, atau info sendiri lewat dashboard yang gampang dipakai. Kalau butuh perubahan yang lebih besar, tinggal kabari kami.",
  },
  {
    q: "Ada pendampingan setelah jadi?",
    a: "Ada. Setelah peluncuran kami bantu jelasin cara pakainya dan siap bantu kalau ada kendala.",
  },
  {
    q: "Bisa untuk sekolah atau usaha non-UMKM?",
    a: "Bisa. Kami juga bikin website dan sistem untuk sekolah, instansi, maupun usaha lain. Ceritain aja kebutuhannya.",
  },
  {
    q: "Bagaimana cara bayarnya?",
    a: "Detail pembayaran kami sampaikan setelah estimasi disepakati. Tanyakan langsung lewat WhatsApp ya.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="sheet bg-white pb-28 pt-20">
      <div className="mx-auto max-w-2xl px-6">
        <SectionTitle className="text-center">
          Pertanyaan yang <Highlight tone="yellow">sering muncul</Highlight>
        </SectionTitle>

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(
                  "rounded-xl border bg-white transition-colors",
                  isOpen ? "border-blue shadow-[0_8px_24px_-16px_rgba(30,121,238,0.6)]" : "border-ink/10"
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-ink"
                  >
                    {item.q}
                    <Plus
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        isOpen && "rotate-45"
                      )}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
