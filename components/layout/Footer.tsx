"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Navbar";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-zinc-950 border-t border-gray-200/50 dark:border-white/5 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand Info */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <Logo />
          <p className="text-brand-gray dark:text-gray-400 text-sm max-w-sm leading-relaxed">
            Elevora membantu bisnis, event, dan brand tampil lebih profesional melalui solusi web development, desain UI/UX, dan dashboard admin yang andal.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="h-9 w-9 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-brand-gray hover:text-brand-primary dark:text-gray-400 dark:hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Facebook"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a
              href="#"
              className="h-9 w-9 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-brand-gray hover:text-brand-primary dark:text-gray-400 dark:hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Twitter"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="#"
              className="h-9 w-9 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-brand-gray hover:text-brand-primary dark:text-gray-400 dark:hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href="#"
              className="h-9 w-9 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-brand-gray hover:text-brand-primary dark:text-gray-400 dark:hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="#"
              className="h-9 w-9 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-brand-gray hover:text-brand-primary dark:text-gray-400 dark:hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm text-brand-dark dark:text-white tracking-wider uppercase">
            Navigasi
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link
                href="#home"
                onClick={(e) => handleLinkClick(e, "home")}
                className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#layanan"
                onClick={(e) => handleLinkClick(e, "layanan")}
                className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary transition-colors"
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                href="#kenapa"
                onClick={(e) => handleLinkClick(e, "kenapa")}
                className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary transition-colors"
              >
                Kenapa Kami
              </Link>
            </li>
            <li>
              <Link
                href="#portofolio"
                onClick={(e) => handleLinkClick(e, "portofolio")}
                className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary transition-colors"
              >
                Portofolio
              </Link>
            </li>
            <li>
              <Link
                href="#testimoni"
                onClick={(e) => handleLinkClick(e, "testimoni")}
                className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary transition-colors"
              >
                Testimoni
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                onClick={(e) => handleLinkClick(e, "faq")}
                className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm text-brand-dark dark:text-white tracking-wider uppercase">
            Layanan
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary cursor-pointer transition-colors">
              Web Development
            </li>
            <li className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary cursor-pointer transition-colors">
              Landing Page Custom
            </li>
            <li className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary cursor-pointer transition-colors">
              Admin Dashboard
            </li>
            <li className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary cursor-pointer transition-colors">
              UI/UX Design
            </li>
            <li className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary cursor-pointer transition-colors">
              Website Maintenance
            </li>
            <li className="text-brand-gray dark:text-gray-400 text-sm hover:text-brand-primary cursor-pointer transition-colors">
              Registration System
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm text-brand-dark dark:text-white tracking-wider uppercase">
            Newsletter
          </h4>
          <p className="text-brand-gray dark:text-gray-400 text-xs leading-relaxed">
            Dapatkan informasi tips teknologi terkini dan promo menarik langsung di email kamu.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Email kamu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full py-2 px-4 pr-10 text-xs focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary dark:text-white"
              />
              <button
                type="submit"
                className="absolute right-1 h-7 w-7 rounded-full bg-brand-primary hover:bg-brand-secondary text-white flex items-center justify-center transition-colors duration-300"
                aria-label="Subscribe"
              >
                <Send className="h-3 w-3" />
              </button>
            </div>
            {submitted && (
              <p className="text-emerald-500 text-[10px] font-semibold animate-pulse pl-2">
                Terima kasih! Kamu telah berlangganan.
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-gray-200/50 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-brand-gray dark:text-gray-400 text-xs text-center md:text-left">
          © {new Date().getFullYear()} Elevora. All rights reserved. Made for premium digital transformation.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-brand-gray dark:text-gray-400 text-xs hover:text-brand-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-brand-gray dark:text-gray-400 text-xs hover:text-brand-primary transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
