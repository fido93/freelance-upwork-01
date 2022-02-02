// theme.js
import { extendTheme } from "@chakra-ui/react";

const HeroTitleBox = {
  baseStyle: {},
  variants: {
    heroSubTitleLanding: {
      textTransform: "uppercase",
      position: "absolute",
      color: "#FBD784",
      fontSize: "18px",
    },
    rounded: {
      padding: 8,
      borderRadius: "xl",
      boxShadow: "xl",
    },
    smooth: {
      padding: 6,
      borderRadius: "base",
      boxShadow: "md",
    },
  },
  defaultProps: {
    variant: "smooth",
  },
};

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "'Montserrat', sans-serif",
      },
    },
  },
  components: {
    HeroTitleBox,
    Button: {
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      variants: {
        primary: {
          bg: "orange.300",
          color: "white",
          _hover: { bg: "orange.400" },
          // boxShadow: "0 0 2px 2px #efdfde",
        },
        accent: {
          bg: "blue.500",
          color: "white",
          _hover: { bg: "blue.600" },
        },
      },
    },
    Text: {
      variants: {
        heroTitle: {
          fontSize: { md: "80px", base: "30px" },
          lineHeight: { md: "100px", base: "30px" },
          color: "white",
          fontWeight: "bold",

          textTransform: "capitalize",
        },
        heroSubtitle: {
          color: "rgba(255,255,255, .5)",
          fontSize: { md: "1em", base: "1em" },
          lineHeight: { md: "1.5em", base: "1.5em" },
        },
        pageSubtitle: {
          color: "orange",
          fontWeight: "bold",
        },
        pageTitle: {
          fontWeight: "bold",
          fontSize: { md: "2.5em", base: "1em" },
        },
      },
    },
  },
});

export default theme;
