"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Client 1",
      position: "Owner",
      company: "Kopi Kenangan",
      avatarInitials: "KK",
      text: "Website custom dari Elevora sangat cepat dan membantu meningkatkan konversi order penjualan franchise kami hingga 35%. Sangat profesional!",
      rating: 5,
      bgClass: "bg-[#2563EB] dark:bg-[#1d4ed8]",
    },
    {
      name: "Client 2",
      position: "Owner",
      company: "Alfamart",
      avatarInitials: "AM",
      text: "Dashboard admin pengelola stok inventori terintegrasi cloud yang dikembangkan Elevora mempermudah pelacakan logistik gudang kami secara real-time.",
      rating: 5,
      bgClass: "bg-[#F5B041] dark:bg-[#d98b25]",
    },
    {
      name: "Client 3",
      position: "Owner",
      company: "Indomaret",
      avatarInitials: "IM",
      text: "Sistem registrasi tiket event PPDB dan booking online berjalan sangat mulus tanpa kendala server meskipun diakses puluhan ribu pendaftar sekaligus.",
      rating: 5,
      bgClass: "bg-[#06B6D4] dark:bg-[#0891b2]",
    },
    {
      name: "Client 4",
      position: "Owner",
      company: "Transmart",
      avatarInitials: "TM",
      text: "Desain UI/UX sistem POS kasir yang dikembangkan Elevora sangat intuitif, mempercepat proses training staf kasir baru kami di lapangan.",
      rating: 5,
      bgClass: "bg-[#FD7272] dark:bg-[#e15f5f]",
    },
  ];

  return (
    <section id="testimoni" className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Klien Kami
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark dark:text-white">
            Testimoni
          </p>
          <div className="w-24 h-1 bg-gray-200 dark:bg-zinc-800 mx-auto mt-4" />
        </div>

        {/* Pillars Layout (Interactive on Desktop, Stacked on Mobile) */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-6 min-h-[480px]">
          {testimonials.map((test, i) => {
            const isHovered = hoveredIndex === i;
            
            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative rounded-[2.5rem] p-8 text-white shadow-lg cursor-pointer flex flex-col justify-between overflow-hidden transition-colors duration-300 min-h-[350px] lg:min-h-[450px] ${
                  test.bgClass
                } ${
                  isHovered ? "lg:flex-[2.5]" : "lg:flex-1"
                }`}
              >
                {/* Overlay card highlight */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />

                {/* Desktop Sideways Text Mode (when not hovered) */}
                <div className="hidden lg:flex flex-col items-center justify-between h-full w-full">
                  {!isHovered ? (
                    <>
                      {/* Sideways Text */}
                      <div className="flex-1 flex items-center justify-center w-full">
                        <span 
                          className="font-black text-xl tracking-tight uppercase select-none whitespace-nowrap origin-center"
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {test.name} — {test.company} {test.position}
                        </span>
                      </div>
                      
                      {/* Avatar Circle at bottom */}
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-bold text-slate-800 shadow-md flex-shrink-0 mt-6 select-none">
                        {test.avatarInitials}
                      </div>
                    </>
                  ) : (
                    // Desktop Expanded Testimonial Mode
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="h-full flex flex-col justify-between text-left"
                    >
                      {/* Rating Stars */}
                      <div className="flex gap-1">
                        {[...Array(test.rating)].map((_, idx) => (
                          <Star key={idx} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Quote */}
                      <p className="text-lg md:text-xl font-bold italic leading-relaxed my-6 max-w-md">
                        &ldquo;{test.text}&rdquo;
                      </p>

                      {/* Profile details */}
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-bold text-slate-800 shadow-md">
                          {test.avatarInitials}
                        </div>
                        <div>
                          <h4 className="font-black text-base tracking-tight leading-none">
                            {test.name}
                          </h4>
                          <span className="text-xs text-white/80 font-semibold mt-1 inline-block">
                            {test.company} — {test.position}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Mobile Normal Layout (Always expanded visually) */}
                <div className="flex lg:hidden flex-col justify-between h-full text-left gap-6">
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-sm font-semibold italic leading-relaxed">
                    &ldquo;{test.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-slate-800 shadow-md flex-shrink-0">
                      {test.avatarInitials}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm tracking-tight leading-none">
                        {test.name}
                      </h4>
                      <span className="text-xs text-white/80 font-medium">
                        {test.company} — {test.position}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
