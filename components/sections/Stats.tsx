"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

function StatItem({ value, suffix, label, duration = 1.5 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.min(Math.floor(duration * 60), end);
    const increment = end / totalFrames;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <span className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent mb-2">
        {count}
        {suffix}
      </span>
      <span className="text-xs font-bold uppercase tracking-wider text-brand-gray dark:text-gray-400">
        {label}
      </span>
    </div>
  );
}

export function Stats() {
  const statsList = [
    { value: 120, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "Companies Trusted" },
    { value: 24, suffix: "/7", label: "Technical Support" },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-950/40 border-y border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsList.map((stat, i) => (
            <StatItem
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
