'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useRef } from 'react';

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

export function useNavigateToSection() {
  const router = useRouter();
  const pathname = usePathname();
  const isScrollingRef = useRef(false);

  const navigateToSection = useCallback(
    (sectionId: string) => {
      if (isScrollingRef.current) {
        return;
      }

      const hash = `#${sectionId}`;

      if (pathname === '/') {
        const el = document.getElementById(sectionId);

        if (!el) {
          return;
        }

        isScrollingRef.current = true;

        window.history.pushState(null, '', hash);

        window.dispatchEvent(
          new CustomEvent('hashnavigation', { detail: { hash } })
        );

        requestAnimationFrame(() => {
          setTimeout(() => {
            const top =
              el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
            smoothScrollTo(top);

            setTimeout(() => {
              isScrollingRef.current = false;
            }, 850);
          }, 50);
        });
      } else {
        router.push(`/${hash}`);
      }
    },
    [pathname, router]
  );

  return navigateToSection;
}
