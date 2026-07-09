"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { value: "all", label: "Semua" },
    { value: "web", label: "Web Development" },
    { value: "dashboard", label: "Admin Dashboard" },
    { value: "ui", label: "UI/UX Design" },
  ];

  const projects = [
    {
      id: "1",
      name: "Kopi Kenangan Landing Page",
      category: "web",
      imageGrad: "from-amber-500 via-orange-600 to-red-500",
      description: "Landing page modern dengan fitur order integration.",
    },
    {
      id: "2",
      name: "Alfamart Stock Management",
      category: "dashboard",
      imageGrad: "from-indigo-600 via-purple-600 to-pink-500",
      description: "Admin panel inventori dengan pelaporan ekspor CSV otomatis.",
    },
    {
      id: "3",
      name: "Indomaret E-Ticketing",
      category: "web",
      imageGrad: "from-teal-400 via-blue-500 to-indigo-600",
      description: "Platform registrasi dan penjualan tiket online PPDB/Event.",
    },
    {
      id: "4",
      name: "Traveloka Booking Experience",
      category: "ui",
      imageGrad: "from-pink-500 via-rose-500 to-amber-500",
      description: "Redesain UI/UX pencarian hotel untuk konversi konstan.",
    },
    {
      id: "5",
      name: "Transmart Smart POS Platform",
      category: "dashboard",
      imageGrad: "from-blue-600 via-cyan-500 to-teal-400",
      description: "Aplikasi kasir multi-cabang terintegrasi cloud.",
    },
    {
      id: "6",
      name: "Aplikasi Sekolah TK Smart",
      category: "web",
      imageGrad: "from-violet-600 via-fuchsia-600 to-pink-500",
      description: "Portal pendaftaran digital dan admin monitoring berkas.",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portofolio" className="py-20 bg-white dark:bg-brand-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Portofolio Kami
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark dark:text-white mb-4">
            Karya Terbaik dari Elevora
          </p>
          <p className="text-brand-gray dark:text-gray-400 text-sm">
            Kami bangga mempersembahkan deretan sistem dan platform digital yang dibangun dengan standar kualitas tinggi untuk klien kami.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={filter === cat.value ? "default" : "ghost"}
              onClick={() => setFilter(cat.value)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                filter === cat.value
                  ? "bg-brand-primary text-white shadow-md"
                  : "text-brand-gray dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
              }`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-zinc-900 aspect-video shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                {/* Styled Project Graphic Backdrop */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGrad} opacity-80 group-hover:scale-110 group-hover:blur-sm transition-all duration-500`} />
                
                {/* Grid Overlay Screen */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5)_80%)]" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-md rounded-full text-white">
                      {project.category === "web"
                        ? "Web Development"
                        : project.category === "dashboard"
                        ? "Admin Dashboard"
                        : "UI/UX Design"}
                    </span>
                    <div className="h-9 w-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 border border-white/20">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white tracking-tight mb-2">
                      {project.name}
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
