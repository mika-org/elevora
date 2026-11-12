"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Highlight, SectionTitle } from "@/components/shared/Highlight";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Ngobrol",
    desc: "Ceritain kondisi bisnismu apa adanya. Tenang kok nggak perlu bahas teknis",
    dot: "bg-yellow text-ink",
    bar: "bg-yellow",
  },
  {
    title: "Pemberian Saran",
    desc: "Dari ceritamu, kami kasih beberapa ide solusi yang paling tepat buat bisnismu",
    dot: "bg-teal text-ink",
    bar: "bg-teal",
  },
  {
    title: "Intip Gambarannya",
    desc: "Kamu lihat rancangan tampilannya dulu. Cocok? Lanjut. Kalo belum? Kita sesuaikan lagi",
    dot: "bg-coral text-white",
    bar: "bg-coral",
  },
  {
    title: "Proses Pembuatan",
    desc: "Kalau udah cocok, baru kami mulai buat. Tenang kamu tetap dapat kabar progres pembuatannya kok",
    dot: "bg-blue text-white",
    bar: "bg-blue",
  },
  {
    title: "Peluncuran",
    desc: "Web atau aplikasimu sudah jadi dan kami pastikan semuanya jalan lancar",
    dot: "bg-purple text-white",
    bar: "bg-purple",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  const isLast = active === STEPS.length - 1;

  return (
    <section id="cara-kerja" className="sheet bg-mint pb-28 pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>
          Cara kerjanya <Highlight tone="teal">gampang</Highlight>
        </SectionTitle>
        <p className="mt-3 text-sm text-ink-soft">
          Nggak perlu ngerti IT. Kamu cukup cerita, sisanya kami yang urus
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-[230px_1fr] md:items-start">
          <ol className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
            {STEPS.map((s, i) => (
              <li key={s.title} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={i === active ? "step" : undefined}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors",
                    i === active
                      ? "bg-ink text-white"
                      : "bg-white text-ink hover:bg-white/70"
                  )}
                >
                  <span
                    className={cn(
                      "grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-semibold",
                      s.dot
                    )}
                  >
                    {i + 1}
                  </span>
                  {s.title}
                </button>
              </li>
            ))}
          </ol>

          <div className="rounded-3xl bg-white p-6 shadow-[0_16px_40px_-24px_rgba(27,31,58,0.35)] sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
              </motion.div>
            </AnimatePresence>

            <div
              className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-[#ece6d6]"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={STEPS.length}
              aria-valuenow={active + 1}
            >
              <motion.div
                className={cn("h-full rounded-full", step.bar)}
                animate={{ width: `${((active + 1) / STEPS.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <button
              type="button"
              onClick={() => setActive(isLast ? 0 : active + 1)}
              className="mt-6 rounded-lg bg-blue px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              {isLast ? "Mulai dari awal" : "Langkah berikutnya"}
            </button>
          </div>
        </div>

        <p className="mt-6 text-xs text-ink-soft">*Klik tiap langkah buat lihat detailnya</p>
      </div>
    </section>
  );
}
