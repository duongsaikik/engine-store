import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textPrimary: "#1C252E",
        textSecondary: "#637381",
        textDisabled: "#919EAB",
        errorDark: "#B71D18",
        errorDarker: "#7A0916",
        warningLight: "#FFD666",
        warningMain: "#FFAB00",
      },
    },
  },
  plugins: [],
} satisfies Config;
