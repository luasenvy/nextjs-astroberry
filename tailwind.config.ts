import TailwindTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-space-grotesk-variable)",
          "var(--font-inter)",
          "sans-serif",
          ...fontFamily.sans,
        ],
        code: [
          "Menlo",
          "Monaco",
          '"Lucida Console"',
          '"Liberation Mono"',
          '"DejaVu Sans Mono"',
          '"Bitstream Vera Sans Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
    colors: {
      brand: "var(--brand-color)",
      content: "var(--content-color)",
      tahiti: "var(--tahiti-color)",
      selection: "var(--selection-color)",
    },
  },
  plugins: [TailwindTypography],
} satisfies Config;
