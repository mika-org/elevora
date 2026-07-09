"use client";

import { motion } from "framer-motion";

export function WhyChoose() {
  const cards = [
    {
      title: "Cepat dan Responsif",
      description: "Website dioptimalkan untuk semua perangkat",
      bgClass: "bg-[#FD7272] dark:bg-[#e15f5f]",
      align: "justify-start",
      direction: -80,
    },
    {
      title: "Keamanan Terjamin",
      description: "Perlindungan data encrypt mutakhir",
      bgClass: "bg-[#2563EB] dark:bg-[#1d4ed8]",
      align: "justify-end",
      direction: 80,
    },
    {
      title: "Dukungan Teknis",
      description: "Tim teknis yang siap membantu kapan saja",
      bgClass: "bg-[#06B6D4] dark:bg-[#0891b2]",
      align: "justify-start",
      direction: -80,
    },
  ];

  return (
    <section id="kenapa" className="py-24 bg-gray-50 dark:bg-zinc-950/40 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Kelebihan
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark dark:text-white">
            Kenapa Pilih kami?
          </p>
          <div className="w-24 h-1 bg-gray-200 dark:bg-zinc-800 mx-auto mt-4" />
        </div>

        {/* Overlapping Staggered Cards (Matching 3.png) */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {cards.map((card, i) => (
            <div key={i} className={`flex w-full ${card.align}`}>
              <motion.div
                initial={{ opacity: 0, x: card.direction }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
                whileHover={{ scale: 1.02 }}
                className={`w-full md:w-3/4 rounded-[2.5rem] p-8 md:p-10 text-white shadow-lg cursor-default transition-transform duration-300 relative overflow-hidden flex flex-col justify-center items-center text-center ${card.bgClass}`}
              >
                {/* Overlay highlight */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none" />
                
                <h3 className="text-xl md:text-3xl font-black tracking-tight mb-2 font-sans">
                  {card.title}
                </h3>
                <p className="text-white/90 text-sm md:text-lg font-medium">
                  {card.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
