# Copilot Instructions (repo-scoped)

## Wersje kluczowych bibliotek

Projekt korzysta z następujących wersji głównych bibliotek:

- `next`: **15.5.4**
- `react`: **19.1.0**
- `react-dom`: **19.1.0**
- `styled-components`: **^6.1.19**

Wszelkie generowane komponenty, hooki i integracje powinny być zgodne z powyższym środowiskiem.

## Cel

Dostarczaj kod **po polsku**, zwięźle i inżyniersko, z podejściem **sceptycznym** (zawsze wskaż _Założenia_, _Ryzyka_, _Alternatywy_).  
Generuj komponenty i logikę **na podstawie lokalnych danych i plików w repo** (cache, manifesty, tokeny), **bez odwołań do zewnętrznych API w runtime**.

---

## Kontekst projektu

Monorepo (workspaces) z aplikacją `Next.js` oraz pakietami wspierającymi **Design System**.

- **Aplikacja web**: katalog główny (`next.config.ts`, `src/` itd.).
- **Zasoby lokalne** (offline, brak sieci w runtime):
  - **Ikony**: `public/assets/icons/*.svg` + generowane komponenty w `src/components/icons/`  
    (kolor przez `currentColor`).
  - **Tokeny/zmienne CSS**: generowany plik `src/styles/variables.generated.ts` + integracja w `DesignSystemProvider`.  
    Nie hardkodować surowych HEX-ów.
  - **Typografia**: `src/styles/typography.ts` + komponent `Text` (preset + drobne override).

### Skrypty (root `scripts/`)

- `variables.ts` – generuje `variables.generated.ts` z `design-tokens`.

Rekomendowana kolejność pełnej regeneracji:  
**variables → typography → export-icons → generate-icon-components → build**.

### Założenia / Ryzyka / Alternatywy

- **Założenia**
  - Dane wejściowe (tokeny, manifest ikon) znajdują się **lokalnie** w repo (`design/…`), a ich schemat jest stabilny.
  - Aplikacja korzysta z aliasu importów `@/*` wskazującego na `src/*`.

---

## Zasady ogólne

- **Język**: polski.
- **Styl**: najpierw esencja, potem krótkie detale.
- **Sceptycyzm**: gdy brakuje danych → wypisz _Założenia_, _Ryzyka_, _Alternatywy_.
- **Zero sieci w runtime**: nie używaj fetch/SDK do zewnętrznych usług w aplikacji produkcyjnej.  
  Dane pobieraj wyłącznie z **plików w repo** lub build-time.
- **Sekrety** – tylko w jobach sync/CI (jeśli w ogóle występują) – **nie commitujemy**.
- **Spójność UI**: korzystaj z **tokenów** i presetów **typografii**; unikaj „magicznych” wartości.

---

## Konwencje kodu

- **React**: zawsze **rafce** (React Arrow Function Component with `export default`).
- **Styling**: `styled-components` v6 (preferuj **CSS Variables** oparte na tokenach).
- **TypeScript**:
  - Definiuj `interface` props; warianty jako unie literali (np. `size: 'sm'|'md'|'lg'`).
  - Zero `any` (patrz polityka poniżej).
- **Struktura**: by-feature; komponenty w `src/components/<Feature>/`.
- **Nazewnictwo**:
  - Komponenty: `PascalCase` (np. `ProductCard.tsx`).
  - Ikony: import z `assets/icons/<nazwa-kebab>.svg`.
  - Bez cyfr w nazwach komponentów (np. zamiast `Frame165Card` → `HeroSection`).

### TypeScript – polityka typów

Unikaj `any`.

1. Daj TS zrobić **infer** – usuń zbędne adnotacje.
2. Jeśli istnieje typ w projekcie (`design-types`, modele domenowe) – użyj go.
3. Dla danych lokalnych – zdefiniuj `type`/`interface` obok użycia (nazwa opisowa).
4. Dla struktur częściowo znanych – użyj `unknown` + zawężenie, unii, generyków.
5. Jeśli to konieczne:
   ```ts
   // FALLBACK(any): krótkie uzasadnienie + YYYY-MM-DD + @owner
   // Usunąć do: <issue/url>
   const data: any = fetchData();
   ```
