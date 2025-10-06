import { css } from 'styled-components';

/** Płynna wartość między min↔max w przedziale viewportu (domyślnie 360→1440px). */
export const fluid = (
  minPx: number,
  maxPx: number,
  minVW = 360,
  maxVW = 1440
) => {
  const slope = (maxPx - minPx) / (maxVW - minVW);
  const y = minPx - slope * minVW;
  return `clamp(${minPx}px, ${y.toFixed(4)}px + ${(slope * 100).toFixed(
    6
  )}vw, ${maxPx}px)`;
};

/** Skrót: clamp dla font-size. */
export const fluidFont = (minPx: number, maxPx: number) => css`
  font-size: ${fluid(minPx, maxPx)};
`;

/** Przykład: rynienki kontenera do 240px przy 1920px. */
export const responsiveGutters = css`
  padding-inline: clamp(0px, calc((min(100vw, 1920px) - 1440px) / 2), 240px);
`;
export const lh = (multiplier: number) => multiplier;
