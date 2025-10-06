import { fluid, lh } from './typography.utils';

const spacing = {
  'xs-4': '4px',
  'sm-8': '8px',
  'md-16': '16px',
  'lg-24': '24px',
  'xl-32': '32px',
  'xxl-40': '40px',
  'xxxl-64': '64px',
  'global-horizontal-desktop': '120px',
  'global-horizontal-mobile': '16px',
  'global-horizontal-tablet': '60px',
};

const colors = {
  accent: '#BE1011',
  white: '#FFFFFF',
  black: '#000000',
  gray414: '#414141',
  gray808: '#808080',
  grayA0A: '#A0A0A0',
  grayBorder: '#8C8C8C',
  surfaceAlt: '#F7F7F7',
  footerBg: '#F8F8F8',
  cream: '#F5F5DC',
  dark: '#212121',
};

const fontFamilies = {
  base: "var(--font-instrument-sans, 'Instrument Sans', 'Manrope', sans-serif)",
  accent: "'Consolas', monospace",
  heading: "var(--font-manrope, 'Manrope', sans-serif)",
  button: "var(--font-inter, 'Inter', sans-serif)",
};

const basePx = 16;
const pxToRem = (px: number) => `${px / basePx}rem`;
const deviceSize = {
  tablet: 580,
  tabletXL: 991,
  laptop: 1280,
  desktop: 1540,
};

const breakpoints = {
  tablet: `${deviceSize.tablet}px`,
  tabletXL: `${deviceSize.tabletXL}px`,
  laptop: `${deviceSize.laptop}px`,
  desktop: `${deviceSize.desktop}px`,
};

const media = {
  tablet: `screen and (min-width: ${deviceSize.tablet + 1}px)`,
  tabletXL: `screen and (min-width: ${deviceSize.tabletXL + 1}px)`,
  laptop: `screen and (min-width: ${deviceSize.laptop + 1}px)`,
  desktop: `screen and (min-width: ${deviceSize.desktop + 1}px)`,
};

const typography = {
  'heading/xl': {
    fontSize: fluid(48, 78),
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: lh(1),
    letterSpacing: '-0.02em',
  },
  'heading/card': {
    fontSize: '28px',
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: lh(1.2),
    letterSpacing: '-0.02em',
  },
  'heading/md': {
    fontSize: fluid(18, 20),
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: lh(1.2),
    letterSpacing: '-0.02em',
  },
  'subheading/lg': {
    fontSize: fluid(32, 40),
    fontWeight: 500,
    fontFamily: fontFamilies.heading,
    lineHeight: lh(1.2),
    letterSpacing: '-0.02em',
  },
  'nav/item': {
    fontSize: fluid(16, 18),
    fontWeight: 400,
    fontFamily: fontFamilies.button,
    lineHeight: lh(1),
    letterSpacing: '-0.02em',
  },
  'body/lg': {
    fontSize: fluid(18, 20),
    fontWeight: 400,
    fontFamily: fontFamilies.base,
    lineHeight: lh(1.3),
  },
  'body/md': {
    fontSize: fluid(14, 18),
    fontWeight: 400,
    fontFamily: fontFamilies.heading,
    lineHeight: lh(1.2),
  },
  'caption/md': {
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: fontFamilies.heading,
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  },
  'caption/sm': {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: fontFamilies.heading,
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  },
  'tag/sm': {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily:
      'Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace',
    lineHeight: '1',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase' as const,
  },
  'tag/md': {
    fontSize: '16px',
    fontWeight: 400,
    fontFamily:
      'Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace',
    lineHeight: '1',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase' as const,
  },
  'heading/xxl': {
    fontSize: '78px',
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: '1.1',
    letterSpacing: '2%',
  },
  'heading/mobile': {
    fontSize: '54px',
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: '1',
    letterSpacing: '2%',
  },
  'body/sm': {
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: fontFamilies.heading,
    lineHeight: '1.3',
  },
  'body/Instrument': {
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: fontFamilies.base,
    lineHeight: '1.4',
  },
  'body/xs': {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: fontFamilies.base,
    lineHeight: '1.2',
  },
  'label/md': {
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: fontFamilies.accent,
    lineHeight: '1.2',
  },
  'label/sm': {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: fontFamilies.accent,
    lineHeight: '1.2',
  },
  'meta/md': {
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: fontFamilies.base,
    lineHeight: '1.2',
  },
  'meta/sm': {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: fontFamilies.base,
    lineHeight: '1.2',
  },
  'code/md': {
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: fontFamilies.accent,
    lineHeight: '1.2',
  },
  'instrument/body/md': {
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: fontFamilies.base,
    lineHeight: '1.2',
  },
  'button/md': {
    fontSize: '18px',
    fontWeight: 400,
    fontFamily: fontFamilies.button,
    lineHeight: '1',
    letterSpacing: '2%',
  },
};

export const variables = {
  colors,
  fontFamilies,
  basePx,
  pxToRem,
  deviceSize,
  breakpoints,
  media,
  typography,
  spacing,
};
