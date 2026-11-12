"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Highlight, SectionTitle } from "@/components/shared/Highlight";
import { cn } from "@/lib/utils";

// TODO: replace problem/solution/result copy (and add real logos) with each client's actual story.
const CLIENTS = [
  {
    name: "Warkop Galaksi",
    tone: "bg-coral text-ink",
    problem: "Pesanan dari WA sering kelewat pas lagi ramai",
    solution: "Menu digital dan sistem pesanan online",
    result: "Pesanan tercatat rapi, nggak ada yang kelewat",
  },
  {
    name: "TK Istiqamah",
    tone: "bg-blue text-white",
    problem: "Pendaftaran murid baru masih pakai kertas",
    solution: "Website sekolah dengan formulir pendaftaran online",
    result: "Data pendaftar langsung terkumpul di satu tempat",
  },
  {
    name: "Firma Hukum :(",
    tone: "bg-teal text-ink",
    problem: "Calon klien susah menemukan info layanan",
    solution: "Website profil yang rapi dan mudah dibuka dari HP",
    result: "Calon klien bisa langsung konsultasi lewat WA",
  },
  {
    name: "AWeHa",
    tone: "bg-yellow text-ink",
    problem: "Stok sering selisih antara gudang dan catatan",
    solution: "Sistem pencatatan stok otomatis",
    result: "Stok selalu sesuai, nggak perlu hitung ulang",
  },
  {
    name: "Adhivasindog",
    tone: "bg-purple text-white",
    problem: "Rekap penjualan makan waktu berjam-jam",
    solution: "Dashboard laporan penjualan harian",
    result: "Omzet bisa dicek kapan aja dari HP",
  },
  {
    name: "Barrack Biliard",
    tone: "bg-orange text-ink",
    problem: "Jadwal booking meja bentrok",
    solution: "Sistem booking meja online",
    result: "Jadwal tertata, pelanggan bisa pesan sendiri",
  },
];

function initials(name: string) {
  return name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Portfolio() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="portofolio" className="sheet bg-lavender pb-28 pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>
          Portofolio <Highlight tone="blue">kami</Highlight>
        </SectionTitle>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          Masalah yang mereka bawa, solusi yang kami buat, dan hasilnya. Ketuk kartu klien untuk
          melihatnya.
        </p>

        <div className="mt-10 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c, i) => {
            const isOpen = open === i;
            const light = c.tone.includes("text-white");
            return (
              <motion.button
                key={c.name}
                type="button"
                layout
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                whileHover={{ y: -4 }}
                transition={{ layout: { duration: 0.3 } }}
                className={cn(
                  "flex min-h-[170px] flex-col rounded-2xl p-5 text-left shadow-[0_12px_28px_-16px_rgba(27,31,58,0.45)] outline-offset-4 focus-visible:outline-2 focus-visible:outline-ink",
                  c.tone
                )}
              >
                <motion.span
                  layout="position"
                  className="grid h-12 w-12 place-items-center rounded-xl bg-white text-xs font-bold text-ink"
                  aria-hidden
                >
                  {initials(c.name)}
                </motion.span>
                <motion.span layout="position" className="mt-auto pt-6 text-lg font-bold">
                  {c.name}
                </motion.span>

                <AnimatePresence initial={false} mode="popLayout">
                  {isOpen ? (
                    <motion.span
                      key="detail"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-3 flex flex-col gap-2 text-sm"
                    >
                      <Pill light={light}>Masalah</Pill>
                      <span>{c.problem}</span>
                      <Pill light={light}>Solusi</Pill>
                      <span>{c.solution}</span>
                      <span className="mt-2 rounded-xl bg-white p-3 text-ink">
                        <span className="inline-block rounded-full bg-yellow px-2 py-0.5 text-[10px] font-bold uppercase">
                          Hasil
                        </span>
                        <span className="mt-1.5 block font-semibold">{c.result}</span>
                      </span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="hint"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-xs"
                    >
                      Ketuk untuk lihat masalah, solusi, dan hasilnya
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pill({ light, children }: { light: boolean; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase",
        light ? "bg-white/25 text-white" : "bg-white/60 text-ink"
      )}
    >
      {children}
    </span>
  );
}
