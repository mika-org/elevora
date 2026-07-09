"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the current section
      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        const element = document.getElementById(id);

        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveId(id);
            return;
          }
        }
      }

      // If above all sections, set active to first or empty
      if (ids.length > 0) {
        setActiveId(ids[0]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
