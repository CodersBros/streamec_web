'use client';
import { LandingSectionId, landingSections } from '@/data/sections';
import { useEffect, useState } from 'react';

/**
 * Śledzi która sekcja jest aktualnie aktywna w viewport.
 */
export function useActiveSection() {
  const [active, setActive] = useState<LandingSectionId>('hero');

  useEffect(() => {
    const elements = landingSections
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    let lastIntersecting: string | null = null;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            lastIntersecting = entry.target.id;
          }
        });
        if (lastIntersecting) setActive(lastIntersecting as LandingSectionId);
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: '-15% 0px -40% 0px',
      }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
