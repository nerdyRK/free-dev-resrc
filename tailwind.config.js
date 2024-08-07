/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgl: "#193549",
        bgd: "#15232d",
        primary: "#ffc605",
        secondary: "#ccc",
        tertiary: "#a5f46c",
      },
    },
  },
  plugins: [],
};
