import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef2ff",
          100: "#dce6ff",
          200: "#c3d2fa",
          400: "#4f73c4",
          DEFAULT: "#2c4fa3",
          dark: "#1e3a7f",
        },
        accent: {
          DEFAULT: "#d95f3b",
          dark: "#b84e2f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
