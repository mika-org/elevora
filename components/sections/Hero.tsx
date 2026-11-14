"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type ChatStep =
  | { from: "kamu" | "elevore"; text: string }
  | { typing: true };

// Mirrors the "Hero Chat" component states in Figma.
const SCRIPT: ChatStep[] = [
  { from: "kamu", text: "Halo, pesanan tokoku numpuk di WA terus" },
  { typing: true },
  { from: "elevore", text: "Ceritain aja dulu. Sehari biasanya berapa pesanan?" },
  { from: "kamu", text: "Sekitar 50, stok juga sering selisih" },
  { typing: true },
  { from: "elevore", text: "Okeyy kami punya ide, mau lihat gambarannya?" },
];

function HeroChat() {
  const [step, setStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const done = step >= SCRIPT.length;
    const current = SCRIPT[step - 1];
    const delay = done ? 3200 : current && "typing" in current ? 1100 : 1300;
    const t = setTimeout(() => setStep(done ? 0 : step + 1), delay);
    return () => clearTimeout(t);
  }, [step]);

  const visible = SCRIPT.slice(0, step).filter(
    (m, i) => !("typing" in m) || i === step - 1
  );

  // Keep the newest bubble in view: smooth-scroll to the bottom on each step.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const id = requestAnimationFrame(() =>
      el.scrollTo({ top: step === 0 ? 0 : el.scrollHeight, behavior: "smooth" })
    );
    return () => cancelAnimationFrame(id);
  }, [step]);

  return (
    <div
      ref={scrollRef}
      className="flex h-[320px] w-full flex-col justify-start gap-3 overflow-y-auto overscroll-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-3xl bg-white p-5 shadow-[0_20px_50px_-24px_rgba(27,31,58,0.25)] sm:h-[340px]"
      aria-label="Contoh percakapan dengan Elevore"
      role="img"
    >
      <AnimatePresence initial={false}>
        {visible.map((m, i) =>
          "typing" in m ? (
            <motion.div
              key={`typing-${step}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex w-fit gap-1 rounded-full bg-yellow px-3 py-2"
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-ink"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={`${i}-${m.text}`}
              layout
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "max-w-[78%] rounded-2xl px-4 py-2.5 text-sm",
                m.from === "kamu"
                  ? "self-end rounded-tr-md bg-blue text-white"
                  : "self-start rounded-tl-md bg-yellow text-ink"
              )}
            >
              <span className="block text-[10px] font-semibold opacity-80">
                {m.from === "kamu" ? "Kamu" : "Elevore"}
              </span>
              {m.text}
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="dot-grid bg-cream pb-28 pt-28 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="text-[2.1rem] font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            <span className="inline-block bg-yellow px-2 sm:px-3">Ngobrol aja dulu,</span>
            <br />
            <span className="mt-2 inline-block bg-blue px-2 text-[1.45rem] text-white sm:px-3 sm:text-[2.1rem]">
              Bisnismu naik level abis itu
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            Ceritain bisnismu apa adanya. Kami yang cari cara menyelesaikannya dengan
            automasi.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue px-6 py-3 text-sm font-medium text-white shadow-[0_8px_20px_-8px_rgba(30,121,238,0.8)] transition hover:-translate-y-0.5"
            >
              Yuk ngobrol
            </a>
            <a
              href="#cara-kerja"
              className="rounded-lg border-2 border-ink bg-white px-6 py-2.5 text-sm font-medium text-ink transition hover:-translate-y-0.5"
            >
              Lihat cara kerjanya
            </a>
          </div>

          {/* TODO: confirm the exact number with the team */}
          <p className="mt-6 text-xs text-ink-soft">Dipercaya 10+ bisnis dan instansi</p>
        </div>

        <HeroChat />
      </div>
    </section>
  );
}
