/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        btn100: "var(--btn-100)",
        clr100: "var(--clr-100)",
        clr200: "var(--clr-200)",
        clr300: "var(--clr-300)",
        clr400: "var(--clr-400)",
        clr500: "var(--clr-500)",
        clr600: "var(--clr-600)",
        clr700: "var(--clr-700)",
        clr800: "var(--clr-800)",
        clr900: "var(--clr-900)",
        clr1000: "var(--clr-1000)",
        clr1100: "var(--clr-1100)",
      },
    },
  },
  plugins: [],
};
