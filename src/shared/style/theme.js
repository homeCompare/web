const colors = {
  white: '#fff',
  black: '#000',
  darkGrey: '#333',
  lightGrey: '#777',
  veryLightGrey: '#fafafa',
  thinGrey: '#ccc',
  coolBlack: '#444',
  coolWhite: '#f5f5f5',
};

const base = {
  backgroundColor: colors.veryLightGrey,
  textColor: colors.darkGrey,
  textSize: 16,
  header: {
    height: 54,
  },
};

const zIndex = {
  header: 10,
  overlay: 15,
  drawer: 20,
  headerText: 25,
};

const breakpoints = {
  xs: 375, // iphone 6/7/8
  sm: 640, // big phone - tablet
  md: 768, // tablet
  lg: 1024, // small desktop
  xl: 1280, // desktop
};

export default {
  colors,
  base,
  zIndex,
  size: (size) => `${size * base.textSize}px`,
  media: (size, styles) => `
    @media (min-width: ${breakpoints[size]}px) {
      ${styles}
    }
  `,
  defaultSizer: `
    padding: 20px;
    @media (min-width: ${breakpoints.lg}px) {
      width: ${breakpoints.lg}px;
      margin: 0 auto;
    }

    @media (min-width: ${breakpoints.xl}px) {
      width: ${breakpoints.xl}px;
    }
  `,
};
