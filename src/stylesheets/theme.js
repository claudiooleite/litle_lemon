import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#495E57",
      secondary: "#F4CE14",
      tertiary: "#EE9972",
      quaternary: "#FBDABB",
      highlight_light: "#EDEDEE",
      highlight_dark: "#333333",
      // ...
    },
  },
  font: {
    family: {
      primary: "'Markazi Text', serif",
      secondary: "'Karla', sans-serif",
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
    },
    size: {
      small: "1.6rem",
      medium: "1.8rem",
      large: "2.0rem",
      xlarge: "4.0rem",
      xxlarge: "5.2rem",
      huge: "6.4rem",
    },
  },
});
export default theme;
