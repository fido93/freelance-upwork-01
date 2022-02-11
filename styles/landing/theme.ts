import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "62em",
  xl: "64em",
});

const overrides = {
  ...chakraTheme,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  colors: {
    primary: "#000000",
    secondary: "#FBD784",
    white: "#ffffff",
  },
  components: {
    Iframe: {
      variants: {
        videoIframe: {
          border: "none",
          margin: "0",
          padding: "0",
          display: "block",
        },
      },
    },
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
