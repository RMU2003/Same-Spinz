/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        yesColor: "var(--wheel-yes-color)",
        noColor: "var(--wheel-no-color)",
        maybeColor1: "var(--wheel-maybe-color-1)",
        maybeColor2: "var(--wheel-maybe-color-2)",
        wheelCenter: "var(--wheel-center-color)",
        wheelBorder: "var(--wheel-border-color)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        cardBg: "var(--card-background)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        'header': "var(--header-background)",
        'footer': "var(--footer-background)",
        'input': "var(--input-background)",
      },
      textColor: {
        'muted': "var(--muted-text)",
        'footer': "var(--footer-text)",
      },
      borderColor: {
        'input': "var(--input-border)",
      },
    },
  },
  plugins: [],
};
