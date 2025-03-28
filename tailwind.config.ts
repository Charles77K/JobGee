import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: "#6900FF",
        secondary: "#4F46E5",
        accent: {
          100: "#E6F7FF",
          200: "#BAE7FF",
          300: "#91D5FF",
          400: "#69C0FF",
          500: "#40A9FF",
          600: "#1890FF",
          700: "#096DD9",
          800: "#0050B3",
          900: "#003A8C",
        },
        brandBlue: "#3385ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
