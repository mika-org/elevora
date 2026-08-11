"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <Link href="#home" className="flex items-center gap-2.5 group">
      <svg
        width="36"
        height="36"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
        className="group-hover:scale-105 transition-transform duration-300"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        {/* Custom Logo: Upward-curving abstract infinity/mountain shape */}
        <path
          d="M20 75C28 65 38 45 42 35C45 28 47 22 50 15C53 22 55 28 58 35C62 45 72 65 80 75C70 75 62 75 58 75C55 65 52 55 50 48C48 55 45 65 42 75C38 75 30 75 20 75Z"
          fill="url(#logo-grad)"
        />
        {/* Abstract infinity bottom-loop connector */}
        <path
          d="M20 75C12 75 8 70 8 62C8 52 20 52 28 58C36 64 45 70 50 70C55 70 64 64 72 58C80 52 92 52 92 62C92 70 88 75 80 75C68 75 60 62 50 62C40 62 32 75 20 75Z"
          stroke="url(#logo-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Star Sparkle on top */}
        <path
          d="M50 5C51 9 53 11 57 12C53 13 51 15 50 19C49 15 47 13 43 12C47 11 49 9 50 5Z"
          fill="#06B6D4"
        />
      </svg>
      <div className="flex flex-col">
        <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent font-sans">
          elevora
        </span>
        <span className="text-[9px] font-semibold text-brand-gray tracking-wider uppercase -mt-1 dark:text-gray-400">
          Digital Growth
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Layanan", id: "layanan" },
    { label: "Kenapa Kami", id: "kenapa" },
    { label: "Portofolio", id: "portofolio" },
    { label: "Testimoni", id: "testimoni" },
    { label: "FAQ", id: "faq" },
  ];

  const activeId = useScrollSpy(
    navLinks.map((link) => link.id),
    120
  );

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-sm font-semibold transition-colors duration-200 hover:text-brand-primary relative py-1 ${
                activeId === link.id
                  ? "text-brand-primary font-bold"
                  : "text-brand-gray dark:text-gray-300"
              }`}
            >
              {link.label}
              {activeId === link.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full h-9 w-9 text-brand-gray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4.5 w-4.5 text-yellow-500" />
            ) : (
              <Moon className="h-4.5 w-4.5 text-zinc-600" />
            )}
          </Button>

          <Link
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800"
            )}
          >
            Masuk
          </Link>

          <Link
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full bg-brand-primary text-white hover:bg-brand-secondary transition-all shadow-md shadow-brand-primary/10 hover:shadow-lg hover:shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            Mulai Sekarang
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full h-9 w-9 text-brand-gray dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Moon className="h-4 w-4 text-zinc-600" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full h-9 w-9 text-brand-gray dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-brand-dark border-b border-gray-100 dark:border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <nav className="flex flex-col gap-3.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`text-sm font-semibold py-1.5 transition-colors ${
                      activeId === link.id
                        ? "text-brand-primary border-l-2 border-brand-primary pl-2"
                        : "text-brand-gray dark:text-gray-300 pl-2"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-2.5 pt-2.5 border-t border-gray-100 dark:border-white/5">
                <Link
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-full w-full justify-center text-center"
                  )}
                >
                  Masuk
                </Link>
                <Link
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "rounded-full w-full bg-brand-primary text-white hover:bg-brand-secondary justify-center text-center shadow-md shadow-brand-primary/10"
                  )}
                >
                  Mulai Sekarang
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

