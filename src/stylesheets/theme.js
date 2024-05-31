// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5f5f5",
      100: "#e1e1e1",
      200: "#cfcfcf",
      300: "#b1b1b1",
      400: "#9e9e9e",
      500: "#7e7e7e", // Default primary color
      600: "#636363",
      700: "#4b4b4b",
      800: "#333333", // Dark color
      900: "#1a1a1a",
      primary: "#495E57", // Custom primary color
      secondary: "#F4CE14", // Custom secondary color
      tertiary: "#EE9972", // Custom tertiary color
      quaternary: "#FBDABB", // Custom quaternary color
      highlight_light: "#EDEFEE", // Highlight light color
      highlight_dark: "#333333", // Highlight dark color
    },
  },
  fonts: {
    heading: "'Markazi Text', serif",
    body: "'Karla', sans-serif",
  },
  fontSizes: {
    sm: "1.6rem",
    md: "1.8rem",
    lg: "2.0rem",
    xl: "4.0rem",
    "2xl": "5.2rem",
    "3xl": "6.4rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800,
  },
});

export default theme;
