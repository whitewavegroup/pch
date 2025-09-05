/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { pch: { primary: "#0EA5E9", dark: "#0B1220", light: "#ECFEFF", accent: "#22D3EE" } }
    }
  },
  plugins: []
};
