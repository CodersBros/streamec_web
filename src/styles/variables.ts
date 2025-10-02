// --- Spacing (padding/margin, skala Figmy) ---
const spacing = {
  'xs-4': '4px',
  'sm-8': '8px',
  'md-16': '16px',
  'lg-24': '24px',
  'xl-32': '32px',
  'xxl-40': '40px',
  'xxxl-64': '64px',
  'global-horizontal-desktop': '120px',
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
  base: 'Instrument Sans, Manrope, sans-serif',
  accent: 'Consolas, monospace',
  heading: 'Manrope, sans-serif',
  button: 'Inter, sans-serif',
};

// --- Breakpoints & media queries ---
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
  'heading/xxl': {
    fontSize: '78px',
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: '1.1',
  },
  'heading/xl': {
    fontSize: '40px',
    fontWeight: 500,
    fontFamily: fontFamilies.heading,
    lineHeight: '1.15',
  },
  'heading/lg': {
    fontSize: '28px',
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: '1.15',
  },
  'heading/md': {
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: '1.2',
  },
  'body/lg': {
    fontSize: '20px',
    fontWeight: 500,
    fontFamily: fontFamilies.base,
    lineHeight: '1.3',
  },
  'body/md': {
    fontSize: '18px',
    fontWeight: 500,
    fontFamily: fontFamilies.base,
    lineHeight: '1.3',
  },
  'body/sm': {
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: fontFamilies.base,
    lineHeight: '1.3',
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
