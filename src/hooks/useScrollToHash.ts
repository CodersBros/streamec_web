'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

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

export function useScrollToHash() {
  const pathname = usePathname();
  const isScrollingRef = useRef(false);
  const lastHashRef = useRef('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    console.log('[useScrollToHash] Effect mounted, pathname:', pathname);

    const scrollToHash = () => {
      const { hash } = window.location;

      console.log(
        '[scrollToHash] Called, hash:',
        hash,
        'lastHash:',
        lastHashRef.current,
        'isScrolling:',
        isScrollingRef.current
      );

      
      if (isScrollingRef.current) {
        console.log('[scrollToHash] Blocked - already scrolling');
        return;
      }

      
      if (hash && hash === lastHashRef.current) {
        console.log('[scrollToHash] Hash unchanged, skipping');
        return;
      }

      if (!hash) {
        console.log('[scrollToHash] No hash, skipping');
        lastHashRef.current = '';
        return;
      }

      const id = hash.slice(1);
      const el = document.getElementById(id);

      if (!el) {
        console.log('[scrollToHash] Element not found:', id);
        return;
      }

      console.log('[scrollToHash] Starting scroll to:', id);
      lastHashRef.current = hash;
      isScrollingRef.current = true;

      requestAnimationFrame(() => {
        setTimeout(() => {
          const top =
            el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
          console.log('[scrollToHash] Scroll target Y:', top);
          smoothScrollTo(top);

          
          setTimeout(() => {
            isScrollingRef.current = false;
            console.log('[scrollToHash] Scroll complete, flag reset');
          }, 850);
        }, 50);
      });
    };

   
    if (pathname === '/' && window.location.hash) {
      scrollToHash();
    }

    
    const handleHashChange = () => {
      console.log('[handleHashChange] Event triggered');
      scrollToHash();
    };

    window.addEventListener('hashchange', handleHashChange);
    console.log('[useScrollToHash] Listener added');

    return () => {
      console.log('[useScrollToHash] Cleanup, removing listener');
      window.removeEventListener('hashchange', handleHashChange);
      isScrollingRef.current = false;
    };
  }, [pathname]);
}
