"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect after first reveal so it stays visible
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" } // Memicu sebelum mencapai ujung bawah banget
    );

    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // Jika elemen sudah berada di dalam viewport saat mount, langsung tampilkan
      // (hindari blink: muncul -> hilang -> muncul lagi)
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
        setHasHydrated(true);
        return;
      }
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible, hasHydrated };
}
