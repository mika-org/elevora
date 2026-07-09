"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop, Layout, Key, ShieldAlert, HeartHandshake, ClipboardList, PenTool } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Landing Page",
      description: "Halaman promosi untuk campaign, penawaran, atau pendaftaran.",
      icon: <Layout className="h-6 w-6 text-amber-500" />,
      bgClass: "bg-[#F5B041] dark:bg-[#d98b25]",
      spanClass: "md:col-span-1",
    },
    {
      title: "Admin Dashboard",
      description: "Dashboard untuk mengelola data, transaksi, dan informasi website.",
      icon: <Key className="h-6 w-6 text-indigo-400" />,
      bgClass: "bg-[#7C3AED] dark:bg-[#5b21b6]",
      spanClass: "md:col-span-1",
    },
    {
      title: "Website Development",
      description: "Website custom yang cepat, modern, aman, dan sesuai kebutuhan bisnis.",
      icon: <Laptop className="h-6 w-6 text-rose-500" />,
      bgClass: "bg-[#FD7272] dark:bg-[#e15f5f]",
      spanClass: "md:col-span-2",
    },
    {
      title: "Smart POS System",
      description: "Sistem kasir pintar berbasis web untuk monitoring transaksi, manajemen stok, dan laporan keuangan real-time.",
      icon: <ShieldAlert className="h-6 w-6 text-blue-400" />,
      bgClass: "bg-[#2563EB] dark:bg-[#1d4ed8]",
      spanClass: "md:col-span-2",
    },
    {
      title: "UI/UX Development",
      description: "Desain tampilan website yang nyaman, jelas, estetis, dan mudah digunakan.",
      icon: <PenTool className="h-6 w-6 text-teal-400" />,
      bgClass: "bg-[#06B6D4] dark:bg-[#0891b2]",
      spanClass: "md:col-span-1",
    },
    {
      title: "Registration System",
      description: "Sistem pendaftaran digital untuk PPDB sekolah, event ticketing, booking, atau inquiry form, dll.",
      icon: <ClipboardList className="h-6 w-6 text-amber-500" />,
      bgClass: "bg-[#F5B041] dark:bg-[#d98b25]",
      spanClass: "md:col-span-1",
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-white dark:bg-brand-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Layanan Kami
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark dark:text-white">
            Solusi Digital Elevora
          </p>
          <div className="w-24 h-1 bg-gray-200 dark:bg-zinc-800 mx-auto mt-4" />
        </div>

        {/* Masonry Grid (Matching 2.png style layout) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`relative rounded-[2rem] p-8 md:p-10 text-white shadow-md overflow-hidden group cursor-default flex flex-col justify-between min-h-[250px] ${service.bgClass} ${service.spanClass}`}
            >
              {/* Subtle background glow pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
              
              {/* Card Header (Icon) */}
              <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6 backdrop-blur-sm shadow-inner group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(service.icon, { className: "h-6 w-6 text-white" })}
              </div>

              {/* Card Body */}
              <div className="mt-auto">
                <h3 className="text-2xl font-black mb-3 tracking-tight font-sans">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
