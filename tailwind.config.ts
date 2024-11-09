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
        pinkish: '#F490E3', 
        bluish: '#6C62FE',
        yellowish: '#FDD600',
        purplish: '#8B43EF',
        subdark: '#343434',
        rebrand: '#6961F9',
        dark_bg: '#121212',
      },
      fontFamily: {
        axiforma: ['Axiforma', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
