"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";

export function Hero() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#4F46E5", "#7C3AED", "#06B6D4", "#F5B041", "#FD7272"],
    });
  };

  const handleConsultation = () => {
    triggerConfetti();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden gradient-mesh dark:bg-zinc-950 transition-colors duration-500"
    >
      {/* Floating Animated Shapes in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-brand-primary/10 blur-[80px]"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-brand-accent/10 blur-[100px]"
        />
        <div className="absolute top-[10%] right-[25%] w-48 h-48 rounded-full bg-brand-secondary/5 blur-[50px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* main orange-yellow rounded container card, matching the layout structure of 1.png */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#F5B041] dark:bg-[#d98b25] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-xl border border-white/20 dark:border-white/5 overflow-hidden flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Subtle overlay grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* Left Text Block */}
          <div className="w-full lg:w-3/5 flex flex-col items-start text-left relative z-10 text-slate-900">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/25 border border-white/30 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-6 text-slate-900"
            >
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping" />
              Web Agency Terpercaya
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6 text-slate-950 font-sans"
            >
              Bangun Website dan Sistem Digital untuk Bisnis Kamu
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-10 max-w-2xl text-slate-900/90"
            >
              Elevora membantu bisnis, event, dan brand tampil lebih profesional lewat website, landing page, sistem registrasi, dan dashboard yang mudah digunakan.
            </motion.p>

            {/* Interactive Custom Button Layout, matching the cutout styling of 1.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button
                onClick={handleConsultation}
                size="lg"
                className="bg-[#06B6D4] text-white hover:bg-[#0891B2] font-extrabold text-base rounded-full px-8 py-6.5 shadow-lg shadow-[#06B6D4]/30 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Konsultasi Gratis Sekarang
                <ArrowRight className="h-5 w-5" />
              </Button>

              <a
                href="#layanan"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "text-slate-950 hover:bg-white/20 font-bold text-base rounded-full px-6 py-6.5 gap-2 border border-slate-950/20"
                )}
              >
                <Play className="h-4 w-4 fill-current text-slate-950" />
                Lihat Layanan
              </a>
            </motion.div>
          </div>

          {/* Right Vector Mockup / Code Graphic, matching the illustration description */}
          <div className="w-full lg:w-2/5 flex justify-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
              className="relative w-full max-w-sm aspect-square bg-slate-900/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-[2rem] border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden"
            >
              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80" />
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-400/80" />
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="px-3 py-1 rounded bg-white/5 text-[10px] text-gray-400 font-mono">
                  elevora-config.json
                </div>
              </div>

              {/* Code Area */}
              <div className="font-mono text-xs md:text-sm text-gray-300 py-6 flex-1 flex flex-col gap-2.5">
                <div>
                  <span className="text-pink-500">const</span>{" "}
                  <span className="text-cyan-400">agency</span> = {"{"}
                </div>
                <div className="pl-5">
                  <span className="text-amber-300">name</span>:{" "}
                  <span className="text-emerald-400">&quot;Elevora&quot;</span>,
                </div>
                <div className="pl-5">
                  <span className="text-amber-300">speed</span>:{" "}
                  <span className="text-purple-400">99</span>,{" "}
                  <span className="text-gray-500">// % optimized</span>
                </div>
                <div className="pl-5">
                  <span className="text-amber-300">stack</span>: [
                  <span className="text-emerald-400">&quot;NextJS&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;Tailwind&quot;</span>]
                </div>
                <div>{"};"}</div>
                
                <div className="mt-4 text-emerald-400 animate-pulse">
                  &gt; Project compiled successfully.
                </div>
              </div>

              {/* Floating micro stats inside code element */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 right-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/10 shadow-lg text-white flex flex-col gap-1 z-20"
              >
                <div className="text-[10px] text-indigo-100 font-semibold uppercase tracking-wider">
                  Conversion
                </div>
                <div className="text-xl font-black font-sans leading-none">
                  +98.2%
                </div>
              </motion.div>

              {/* Decorative nodes */}
              <div className="absolute top-1/2 left-0 w-24 h-24 bg-brand-accent/20 blur-xl pointer-events-none rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
