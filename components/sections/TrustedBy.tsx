"use client";

import { motion } from "framer-motion";

export function TrustedBy() {
  const brands = [
    {
      name: "Google",
      svg: (
        <svg viewBox="0 0 24 24" className="h-6.5 w-auto fill-current transition-colors duration-300">
          <path d="M12.24 10.285V13.4h6.887c-.275 1.56-1.88 4.575-6.887 4.575-4.33 0-7.859-3.585-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.235 15.424 1 12.24 1 5.922 1 1 5.92 1 12s4.922 11 11.24 11c6.59 0 10.97-4.63 10.97-11.1 0-.745-.08-1.32-.175-1.615H12.24z" />
        </svg>
      ),
      hoverClass: "group-hover:text-[#4285F4]",
    },
    {
      name: "Microsoft",
      svg: (
        <svg viewBox="0 0 23 23" className="h-6 w-auto fill-current transition-colors duration-300">
          <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
        </svg>
      ),
      hoverClass: "group-hover:text-[#F25022]",
    },
    {
      name: "Amazon",
      svg: (
        <svg viewBox="0 0 24 24" className="h-6.5 w-auto fill-current transition-colors duration-300">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 15.3c-2.3 0-3.1-1.3-3.1-2.9 0-2.3 1.9-3.7 4.9-3.7.6 0 1.2.1 1.7.2v-.5c0-1.2-.5-1.9-1.9-1.9-.9 0-1.8.3-2.4.8l-.6-1.1c.9-.7 2.3-1 3.7-1 2.5 0 3.8 1.3 3.8 3.8v4.9c0 .7.3 1 .6 1.4h-1.6c-.2-.3-.4-.7-.4-1-.5.7-1.4 1-2.7 1zm.3-4.5c-1.6 0-2.5.6-2.5 1.7 0 .9.5 1.5 1.5 1.5 1.2 0 2.1-.8 2.1-2.2v-.8c-.3-.1-.7-.2-1.1-.2z" />
        </svg>
      ),
      hoverClass: "group-hover:text-[#FF9900]",
    },
    {
      name: "Spotify",
      svg: (
        <svg viewBox="0 0 24 24" className="h-6.5 w-auto fill-current transition-colors duration-300">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.98-.336.075-.67-.136-.746-.472-.076-.336.136-.67.472-.746 3.856-.88 7.15-.506 9.822 1.13.295.18.387.565.207.86zm1.223-2.723c-.226.367-.707.487-1.074.26-2.717-1.67-6.86-2.155-10.065-1.183-.41.124-.843-.105-.968-.515-.124-.41.105-.843.515-.968 3.666-1.113 8.225-.572 11.332 1.343.367.226.487.707.26 1.074zm.106-2.833C14.492 8.7 8.016 8.483 4.27 9.62c-.575.174-1.18-.153-1.354-.728-.174-.575.153-1.18.728-1.354 4.316-1.31 11.47-1.063 15.534 1.352.518.307.687.978.38 1.496-.307.518-.978.687-1.496.38z" />
        </svg>
      ),
      hoverClass: "group-hover:text-[#1DB954]",
    },
    {
      name: "OpenAI",
      svg: (
        <svg viewBox="0 0 24 24" className="h-6.5 w-auto fill-current transition-colors duration-300">
          <path d="M22.28 10.46c-.1-.85-.45-1.65-1.05-2.28-.48-.52-1.12-.9-1.83-1.09.28-.9.3-1.87.05-2.78-.3-.97-.9-1.82-1.72-2.42-.7-.52-1.57-.82-2.47-.85-.92 0-1.82.26-2.6.77-.73-.5-1.63-.78-2.55-.78-.9 0-1.78.26-2.52.75-.82-.6-1.75-.92-2.72-.92-.93 0-1.82.3-2.57.85-.82.6-1.42 1.45-1.72 2.42-.25.9-.23 1.88.05 2.78-.7.2-1.35.57-1.83 1.09-.6.63-.95 1.43-1.05 2.28-.15.93.03 1.88.5 2.7.13.23.3.43.48.62-.28.9-.3 1.87-.05 2.78.3.97.9 1.82 1.72 2.42.7.52 1.57.82 2.47.85.92 0 1.82-.26 2.6-.77.73.5 1.63.78 2.55.78.9 0 1.78-.26 2.52-.75.82.6 1.75.92 2.72.92.93 0 1.82-.3 2.57-.85.82-.6 1.42-1.45 1.72-2.42.25-.9.23-1.88-.05-2.78.7-.2 1.35-.57 1.83-1.09.6-.63.95-1.43 1.05-2.28.15-.93-.03-1.88-.5-2.7zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      ),
      hoverClass: "group-hover:text-[#10A37F]",
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-brand-dark transition-colors duration-300 border-y border-gray-100 dark:border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-gray/60 dark:text-gray-500 mb-8">
          Dipercaya oleh ribuan bisnis & perusahaan berkembang
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-center justify-center text-gray-400 dark:text-zinc-600 transition-colors duration-300 cursor-pointer"
            >
              <div className={brand.hoverClass}>{brand.svg}</div>
              <span className="sr-only">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
