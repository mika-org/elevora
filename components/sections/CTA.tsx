"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export function CTA() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const triggerConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#4F46E5", "#06B6D4", "#F5B041"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#7C3AED", "#FD7272", "#26C6DA"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      triggerConfetti();
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success status after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-[90px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-80 h-80 rounded-full bg-brand-accent/5 blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent rounded-[3rem] p-8 md:p-12 lg:p-16 text-white shadow-xl flex flex-col lg:flex-row items-stretch gap-12">
          
          {/* Left: Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between text-left">
            <div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-[10px] font-black uppercase tracking-wider mb-6">
                Hubungi Kami
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 font-sans">
                Siap Meningkatkan Kualitas Digital Bisnis Kamu?
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-md font-medium">
                Mari diskusikan ide, kebutuhan fitur, dan budget proyek Anda. Tim analis Elevora siap merumuskan solusi teknologi terbaik.
              </p>
            </div>

            {/* Micro Details List */}
            <div className="flex flex-col gap-5 mt-4">
              <div className="flex items-center gap-4 text-xs md:text-sm font-semibold">
                <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span>hello@elevora.com</span>
              </div>
              <div className="flex items-center gap-4 text-xs md:text-sm font-semibold">
                <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span>+62 821-3456-7890</span>
              </div>
              <div className="flex items-center gap-4 text-xs md:text-sm font-semibold">
                <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span>Jakarta Selatan, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphism Contact Form */}
          <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/20 flex flex-col justify-center">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div className="h-16 w-16 bg-white/20 border border-white/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-2 font-sans">
                  Pesan Terkirim!
                </h3>
                <p className="text-white/80 text-sm max-w-xs leading-relaxed font-medium">
                  Terima kasih sudah menghubungi kami. Tim kami akan merespons konsultasi Anda dalam waktu 1x24 jam.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-white/95">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-white/15 border border-white/20 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/50 text-white"
                  />
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-white/95">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="Masukkan email aktif"
                    className="w-full bg-white/15 border border-white/20 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/50 text-white"
                  />
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-white/95">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Deskripsikan kebutuhan website bisnis Anda..."
                    className="w-full bg-white/15 border border-white/20 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/50 text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full py-6 bg-white text-brand-primary hover:bg-white/90 font-black text-sm w-full mt-2 shadow-md shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <span>Kirim Konsultasi</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
