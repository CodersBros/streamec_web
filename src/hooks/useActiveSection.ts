'use client';
import { LandingSectionId, landingSections } from '@/data/sections';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function useActiveSection() {
  const [active, setActive] = useState<LandingSectionId | null>('hero');
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (pathname !== '/') {
      setActive(null);
      return;
    }

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

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

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

    observerRef.current = observer;
    elements.forEach(el => observer.observe(el));

    const updateActiveFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const section = landingSections.find(s => s.id === hash);
        if (section) {
          setActive(section.id);
        }
      }
    };

    window.addEventListener('hashchange', updateActiveFromHash);

    const handleHashNavigation = () => {
      updateActiveFromHash();
    };
    window.addEventListener('hashnavigation', handleHashNavigation);

    if (window.location.hash) {
      updateActiveFromHash();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      window.removeEventListener('hashchange', updateActiveFromHash);
      window.removeEventListener('hashnavigation', handleHashNavigation);
    };
  }, [pathname]);

  return active;
}
