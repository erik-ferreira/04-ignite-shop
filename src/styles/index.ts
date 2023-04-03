import { createStitches } from "@stitches/react";

export const {
  css,
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      gray900: "#121214",
      gray800: "#202024",
      gray500: "#8D8D99",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green500: "#00875f",
      green300: "#00b37e",
      "gradient-images": "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    },
    fontSizes: {
      sm: "0.875rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
