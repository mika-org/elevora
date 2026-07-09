"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Layers, BookOpen, Share2 } from "lucide-react";

export function WhatYouGet() {
  const items = [
    {
      num: "01",
      icon: <Globe className="h-6 w-6" />,
      title: "Landing Utama",
      description: "Website, landing page, atau sistem utama yang dirancang sesuai kebutuhan bisnis Anda agar tampil profesional.",
      bgClass: "bg-[#FD7272] dark:bg-[#e15f5f]",
    },
    {
      num: "02",
      icon: <Layers className="h-6 w-6" />,
      title: "Content Management Sistem",
      description: "Panel admin untuk mengubah konten layanan utama seperti teks, gambar, banner, dan informasi dengan sangat mudah.",
      bgClass: "bg-[#7C3AED] dark:bg-[#5b21b6]",
    },
    {
      num: "03",
      icon: <BookOpen className="h-6 w-6" />,
      title: "Manual Book",
      description: "Panduan penggunaan yang memudahkan tim dalam menjalankan layanan utama dan content management system secara mandiri.",
      bgClass: "bg-[#06B6D4] dark:bg-[#0891b2]",
    },
    {
      num: "04",
      icon: <Share2 className="h-6 w-6" />,
      title: "Konten Media Sosial",
      description: "Desain feeds dan story untuk membantu mengumumkan sistem baru untuk meningkatkan traffic dan membangun brand awareness.",
      bgClass: "bg-[#F5B041] dark:bg-[#d98b25]",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-brand-dark transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Paket Output
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark dark:text-white">
            Apa yang akan kamu dapat?
          </p>
          <div className="w-24 h-1 bg-gray-200 dark:bg-zinc-800 mx-auto mt-4" />
        </div>

        {/* Horizontal Card Layout (Matching 4.png style with modern swipe/scroll list) */}
        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`flex-shrink-0 w-[280px] sm:w-[350px] md:w-[450px] rounded-[2.5rem] p-8 md:p-10 text-white shadow-lg flex flex-col justify-between min-h-[300px] snap-center cursor-default relative overflow-hidden transition-transform duration-300 ${item.bgClass}`}
            >
              {/* Card glow overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />

              {/* Number and Icon Row */}
              <div className="flex items-center justify-between">
                <span className="text-4xl md:text-5xl font-black opacity-30 font-mono tracking-tighter">
                  {item.num}
                </span>
                <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                  {item.icon}
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-8">
                <h3 className="text-2xl font-black tracking-tight mb-3 font-sans">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Swipe Hint */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xs font-semibold text-brand-gray/60 dark:text-gray-500 md:hidden animate-pulse">
          <span>Geser untuk melihat detail</span>
          <ArrowRight className="h-3 w-3" />
        </div>

      </div>
    </section>
  );
}
