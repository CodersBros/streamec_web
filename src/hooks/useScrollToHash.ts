'use client';
import { useEffect } from 'react';

const HEADER_HEIGHT = 90;

const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const smoothScrollTo = (targetY: number, duration = 800) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const scroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

export function useScrollToHash(deps: ReadonlyArray<unknown> = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      requestAnimationFrame(() => {
        setTimeout(() => {
          const top =
            el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
          smoothScrollTo(top);
        }, 50);
      });
    };

    scrollToHash();

    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
