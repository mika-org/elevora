"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Apa saja teknologi utama yang digunakan oleh Elevora?",
      answer: "Kami menggunakan teknologi web cutting-edge termutakhir: Next.js (App Router) versi terbaru, React 19, TypeScript, Tailwind CSS v4 untuk styling super fleksibel dan cepat, serta Framer Motion untuk render transisi animasi premium.",
    },
    {
      question: "Berapa lama durasi pembuatan sebuah website atau landing page?",
      answer: "Durasi pengerjaan bervariasi bergantung tingkat kerumitan sistem. Landing page kustom standar umumnya selesai dalam 3-7 hari kerja. Sementara itu, sistem custom ber-CMS, admin dashboard, atau POS online terintegrasi memakan waktu sekitar 2-4 minggu.",
    },
    {
      question: "Apakah saya mendapatkan akses source code penuh setelah proyek selesai?",
      answer: "Ya, kepemilikan kode sepenuhnya (full ownership) diserahkan kepada Anda setelah pelunasan proyek. Kami akan mengirimkan source code dalam bentuk file zip atau transfer kepemilikan repositori privat di GitHub.",
    },
    {
      question: "Apakah biaya pembuatan sudah termasuk hosting dan domain?",
      answer: "Benar. Seluruh paket pengerjaan kami sudah mencakup penyediaan hosting super cepat (Vercel/Cloudflare) dan pendaftaran domain (.com, .id, atau .web.id) secara gratis untuk 1 tahun pertama.",
    },
    {
      question: "Apakah website buatan Elevora SEO Friendly dan cepat?",
      answer: "Sangat. Kami memprioritaskan Core Web Vitals tertinggi (skor performa mendekati 100). Kami menyertakan pengaturan tag metadata dinamis, OpenGraph untuk sosial media, file sitemap, robots.txt, dan injeksi data terstruktur JSON-LD agar website Anda mudah diindeks oleh Google.",
    },
    {
      question: "Bagaimana jika saya memerlukan update konten atau penambahan fitur baru?",
      answer: "Setiap sistem kami lengkapi dengan admin panel atau CMS (Content Management System) yang mempermudah Anda mengedit teks, gambar, dan banner secara mandiri. Untuk fitur berskala besar, kami siap melayani melalui opsi kontrak pemeliharaan (maintenance support) bulanan.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-zinc-950/40 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Tanya Jawab
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark dark:text-white">
            Frequently Asked Questions
          </p>
          <div className="w-24 h-1 bg-gray-200 dark:bg-zinc-800 mx-auto mt-4" />
        </div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/5 rounded-[2.5rem] p-6 md:p-10 shadow-sm"
        >
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-100 dark:border-white/5 last:border-none py-2">
                <AccordionTrigger className="text-left font-extrabold text-sm md:text-base text-brand-dark dark:text-white hover:text-brand-primary dark:hover:text-brand-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-brand-gray dark:text-gray-400 leading-relaxed pb-4 pt-1 font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}
