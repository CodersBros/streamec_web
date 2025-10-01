'use client';
import { useEffect } from 'react';

/**
 * Scrolluje do elementu z aktualnego location.hash po hydracji / zmianie hash.
 * Zapobiega problemowi kiedy layout przesuwa się po załadowaniu assetów – dodaje małe opóźnienie.
 */
export function useScrollToHash(deps: ReadonlyArray<unknown> = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const { hash } = window.location;
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    // rAF + timeout dla stabilizacji layoutu (fonty / obrazki)
    requestAnimationFrame(() => {
      setTimeout(() => {
        try {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch {
          // fallback
          const top = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 50);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
