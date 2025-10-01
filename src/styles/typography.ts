import { variables } from '@/styles/variables';
import { css } from 'styled-components';

// Typ aliasów presetów (zgodnie z variables)
export type TypographyPresetKey = keyof typeof variables.typography;

type TypographyDef =
  (typeof variables.typography)[keyof typeof variables.typography];

// Typografia z variables
export const typography = variables.typography;

export type TypographyKey = keyof typeof variables.typography;

/**
 * Aliasy semantyczne typografii.
 *
 * Konwencja: "group/size" (np. heading/lg, body/md, label/sm).
 * Każdy alias mapuje na surowy klucz zdefiniowany w `typography`.
 * Zalecane użycie w komponencie <Text variant="..." />.
 *
 * Przykłady:
 * - heading/xxl → fontSize: 78px, fontWeight: 600, fontFamily: Manrope
 * - body/md → fontSize: 18px, fontWeight: 500, fontFamily: Manrope
 * - label/sm → fontSize: 16px, fontWeight: 400, fontFamily: Consolas
 *
 * Pełna lista aliasów:
 * - heading/xxl: bardzo duży nagłówek
 * - heading/xl: duży nagłówek
 * - heading/lg: nagłówek sekcji
 * - heading/md: podnagłówek
 * - body/lg: duży tekst
 * - body/md: tekst główny
 * - body/sm: tekst pomocniczy
 * - body/xs: drobny tekst
 * - label/md: etykieta średnia
 * - label/sm: etykieta mała
 * - meta/md: meta info
 * - meta/sm: meta info małe
 * - code/md: kod
 * - instrument/body/md: tekst Instrument Sans
 */

// Typ aliasu = klucz z variables.typography
export type TypographyAlias = keyof typeof variables.typography;
export type TypographyVariant = TypographyAlias;

export const typographyCss = (key: TypographyAlias) => {
  const t = typography[key] as TypographyDef;
  return css`
    font-family: ${t.fontFamily};
    font-weight: ${t.fontWeight};
    font-size: ${t.fontSize};
    line-height: ${t.lineHeight};
  `;
};

// Wariant typografii – alias (to samo co typographyCss)
export const typographyVariantCss = (variant: TypographyAlias) => {
  return typographyCss(variant);
};

/**
 * Szybkie przykłady użycia aliasów:
 * import { Text } from './typography';
 *
 * <Text variant="heading/lg">Nagłówek sekcji</Text>
 * <Text variant="body/md">Paragraf</Text>
 * <Text variant="label/sm">Etykieta</Text>
 * <Text variant="manrope60028">(Fallback do surowego klucza – unikaj jeśli nie musisz)</Text>
 */

export { default as Text } from './text'; // TSX plik (text.tsx) - resolver bundlera obsłuży
