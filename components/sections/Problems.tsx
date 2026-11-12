"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Highlight, SectionTitle } from "@/components/shared/Highlight";
import { cn } from "@/lib/utils";

const PROBLEMS = [
  {
    title: "Pesanan numpuk di WA dan DM",
    solution: "Sistem pesanan: semua pesanan masuk ke satu tempat.",
    color: "bg-coral text-white",
  },
  {
    title: "Stok sering selisih",
    solution: "Pencatatan stok: stok tercatat otomatis tiap ada transaksi.",
    color: "bg-blue text-white",
  },
  {
    title: "Laporan baru jadi akhir bulan",
    solution: "Dashboard laporan: omzet & pesanan bisa dicek kapan aja.",
    color: "bg-teal text-ink",
  },
  {
    title: "Rekap sampai larut malam",
    solution: "Otomasi: rekap jalan sendiri, kamu bisa istirahat.",
    color: "bg-purple text-white",
  },
  {
    title: "Kasir hitung ulang struk",
    solution: "Kasir digital: total dan struk dihitung otomatis.",
    color: "bg-yellow text-ink",
  },
];

export function Problems() {
  const [solved, setSolved] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    const next = new Set(solved);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setSolved(next);
    if (next.size === PROBLEMS.length) {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#FF6B6B", "#1E79EE", "#55BDB5", "#7B47CB", "#FDBE3B"],
      });
    }
  };

  return (
    <section className="sheet bg-ink pb-28 pt-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle className="text-white">
          Kedengeran <Highlight tone="coral">familiar?</Highlight>
        </SectionTitle>
        <p className="mt-3 text-sm text-white/70">
          Ketuk kartu yang paling kamu rasakan dan ingin diselesaikan
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PROBLEMS.map((p, i) => {
            const isSolved = solved.has(i);
            return (
              <motion.button
                key={p.title}
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={isSolved}
                whileHover={{ rotate: i % 2 ? 2 : -2, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "flex min-h-[124px] flex-col rounded-2xl p-4 text-left shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] outline-offset-4 focus-visible:outline-2 focus-visible:outline-white",
                  p.color
                )}
              >
                <span
                  className={cn(
                    "text-sm font-semibold leading-snug transition-opacity",
                    isSolved && "line-through opacity-70"
                  )}
                >
                  {p.title}
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isSolved ? "s" : "h"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "mt-2 block text-xs leading-snug",
                      isSolved ? "font-semibold" : "opacity-80"
                    )}
                  >
                    {isSolved ? p.solution : "Ketuk untuk lihat jalan keluarnya"}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-white/70" aria-live="polite">
          {solved.size} dari {PROBLEMS.length} masalah beres
        </p>
      </div>
    </section>
  );
}
