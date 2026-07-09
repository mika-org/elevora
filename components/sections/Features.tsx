"use client";

import { motion } from "framer-motion";
import { Zap, Cloud, Shield, Cpu, Smartphone, BarChart } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-brand-primary" />,
      title: "Fast Performance",
      description: "Kecepatan akses super instan yang dioptimalkan untuk performa Core Web Vitals tertinggi dan peringkat SEO terbaik.",
    },
    {
      icon: <Cloud className="h-6 w-6 text-brand-secondary" />,
      title: "Cloud Ready",
      description: "Arsitektur cloud modern yang siap dideploy kapan saja dengan skalabilitas horizontal otomatis untuk trafik tinggi.",
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-500" />,
      title: "Secure Architecture",
      description: "Keamanan enkripsi berlapis, proteksi dari kerentanan web, dan sistem database terisolasi untuk keamanan data bisnis.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-brand-accent" />,
      title: "AI Powered",
      description: "Integrasi teknologi kecerdasan buatan (AI) untuk membantu otomasi alur kerja dan analisa data cerdas di platform Anda.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#FD7272]" />,
      title: "Responsive Design",
      description: "Tampilan layout adaptif dan mobile-first yang presisi dan mulus di layar smartphone, tablet, maupun layar desktop.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-[#2563EB]" />,
      title: "Scalable Infrastructure",
      description: "Infrastruktur kode modular yang dapat berkembang seiring pertumbuhan skala bisnis tanpa mengorbankan performa.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;


  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-950/40 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Fitur Unggulan
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark dark:text-white mb-4">
            Teknologi Modern untuk Performa Terbaik
          </p>
          <p className="text-brand-gray dark:text-gray-400 text-sm md:text-base leading-relaxed">
            Kami merancang produk digital Anda dengan fondasi terkuat yang menggabungkan kecepatan, keamanan, dan fleksibilitas infrastruktur masa kini.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-zinc-800 w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-3 group-hover:text-brand-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-brand-gray dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
