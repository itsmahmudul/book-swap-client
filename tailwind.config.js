// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/component/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        brand: {
          DEFAULT: "#10b981", // emerald-500
          fg: "#059669",      // emerald-600
        },
      },
    },
  },
  plugins: [],
};

