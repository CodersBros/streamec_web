'use client';
import { LandingSectionId, landingSections } from '@/data/sections';
import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [active, setActive] = useState<LandingSectionId>('hero');

  useEffect(() => {
    const elements = landingSections
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    let lastIntersecting: string | null = null;

    const checkIfNearBottom = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const nearBottomThreshold = 50;
      return pageHeight - scrollPosition < nearBottomThreshold;
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const isVisible = entry.intersectionRatio >= 0.35;
          if (isVisible) {
            lastIntersecting = entry.target.id;
          }
        });
        if (checkIfNearBottom()) {
          lastIntersecting = 'contact';
        }
        if (lastIntersecting) setActive(lastIntersecting as LandingSectionId);
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: '-90px 0px -40% 0px',
      }
    );

    elements.forEach(el => observer.observe(el));

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        // Natychmiastowa aktualizacja active state przy zmianie hash
        const section = landingSections.find(s => s.id === hash);
        if (section) {
          setActive(section.id);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Sprawdź hash przy pierwszym załadowaniu
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return active;
}
