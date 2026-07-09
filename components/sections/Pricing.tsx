"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      description: "Solusi cepat untuk UMKM atau landing page campaign mandiri.",
      priceMonthly: 1499, // in thousands IDR
      priceYearly: 1199, // in thousands IDR per month
      features: [
        "1 Landing Page Custom",
        "Responsive Mobile-First",
        "Integrasi Form Kontak/WhatsApp",
        "Hosting & Domain Gratis (1 Thn)",
        "Dukungan Teknis Standar",
        "Optimasi SEO Dasar",
      ],
      popular: false,
      buttonText: "Mulai Paket Starter",
    },
    {
      name: "Professional",
      description: "Pilihan terbaik untuk bisnis yang butuh sistem manajemen mandiri.",
      priceMonthly: 2999,
      priceYearly: 2399,
      features: [
        "Hingga 5 Halaman Custom",
        "Content Management System (CMS)",
        "Admin Dashboard Pengelola Data",
        "Integasi Analytics & Database",
        "Keamanan SSL & Proteksi Cyber",
        "Dukungan Teknis Prioritas 24/7",
        "SEO Friendly & Loading Instan",
      ],
      popular: true,
      buttonText: "Pilih Paket Populer",
    },
    {
      name: "Enterprise",
      description: "Untuk perusahaan skala besar dengan kebutuhan sistem terintegrasi.",
      priceMonthly: 5999,
      priceYearly: 4799,
      features: [
        "Sistem Web Custom Unlimited",
        "Registrasi / Smart POS Integrasi",
        "Custom API & Database Terisolasi",
        "Pemberian Source Code Lengkap",
        "Manual Book & Video Panduan",
        "Optimasi Keamanan Server Dedicated",
        "Konsultasi Strategi Digital 1-on-1",
      ],
      popular: false,
      buttonText: "Hubungi Elevora",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-zinc-950/40 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">
            Skema Harga
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark dark:text-white mb-4">
            Investasi Digital yang Transparan
          </p>
          <p className="text-brand-gray dark:text-gray-400 text-sm">
            Pilih paket layanan yang paling sesuai dengan skala pertumbuhan dan kebutuhan operasional bisnis Anda saat ini.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-bold ${billingCycle === "monthly" ? "text-brand-primary" : "text-brand-gray dark:text-gray-400"}`}>
            Bulanan
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="w-12 h-6.5 rounded-full bg-gray-200 dark:bg-zinc-800 p-1 flex items-center relative transition-colors duration-300"
            aria-label="Toggle billing frequency"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-4.5 h-4.5 rounded-full bg-brand-primary"
              style={{
                marginLeft: billingCycle === "monthly" ? "0px" : "auto",
                marginRight: billingCycle === "monthly" ? "auto" : "0px",
              }}
            />
          </button>
          <span className={`text-sm font-bold flex items-center gap-1.5 ${billingCycle === "yearly" ? "text-brand-primary" : "text-brand-gray dark:text-gray-400"}`}>
            Tahunan
            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white text-[9px] font-black border-none rounded-full px-2 py-0">
              Hemat 20%
            </Badge>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => {
            const currentPrice = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between border cursor-default transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-brand-primary to-brand-secondary text-white border-brand-primary shadow-xl shadow-brand-primary/10 scale-105 z-10"
                    : "bg-white dark:bg-zinc-900 text-brand-dark dark:text-white border-gray-100 dark:border-white/5 shadow-sm"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#06B6D4] hover:bg-[#0891b2] text-white font-extrabold uppercase text-[10px] tracking-wider rounded-full px-4.5 py-1 shadow-md border-none">
                    Most Popular
                  </Badge>
                )}

                {/* Card Title & Info */}
                <div>
                  <h3 className="text-xl font-black tracking-tight mb-2 font-sans">
                    {plan.name}
                  </h3>
                  <p className={`text-xs mb-8 ${plan.popular ? "text-white/80" : "text-brand-gray dark:text-gray-400"}`}>
                    {plan.description}
                  </p>

                  {/* Pricing Details */}
                  <div className="flex items-baseline mb-8">
                    <span className="text-xs font-extrabold mr-1">Rp</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tight font-sans">
                      {currentPrice.toLocaleString("id-ID")}
                    </span>
                    <span className={`text-[10px] font-bold ml-1 ${plan.popular ? "text-white/75" : "text-brand-gray/75"}`}>
                      rb / bln
                    </span>
                  </div>

                  {/* Features Checklist */}
                  <div className="w-full h-px bg-current opacity-10 mb-8" />
                  
                  <ul className="flex flex-col gap-3.5 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm font-semibold">
                        <div className={`p-0.5 rounded-full flex-shrink-0 mt-0.5 ${
                          plan.popular ? "bg-white text-brand-primary" : "bg-brand-primary/10 text-brand-primary"
                        }`}>
                          <Check className="h-3 w-3 stroke-[3px]" />
                        </div>
                        <span className={plan.popular ? "text-white/90" : "text-brand-gray dark:text-gray-300"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-action Button */}
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ variant: plan.popular ? "default" : "default" }),
                    `rounded-full py-6 text-sm font-bold w-full shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center ${
                      plan.popular
                        ? "bg-white text-brand-primary hover:bg-white/90 shadow-white/5"
                        : "bg-brand-primary text-white hover:bg-brand-secondary"
                    }`
                  )}
                >
                  {plan.buttonText}
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
