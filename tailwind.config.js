/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  blocklist: ["container"],
};
