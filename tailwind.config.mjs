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
      },
    },
  },
  plugins: [],
};
