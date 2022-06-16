function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = 'Raleway';
const FONT_WEIGHT_REGULAR = 300;
const FONT_WEIGHT_MEDIUM = 500;
const FONT_WEIGHT_BOLD = 700;

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: FONT_WEIGHT_REGULAR,
  fontWeightMedium: FONT_WEIGHT_MEDIUM,
  fontWeightBold: FONT_WEIGHT_BOLD,
  h1: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
};

export default typography;
