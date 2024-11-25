/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#F9F7F7",
        second: "#DBE2EF",
        third: "#3F72AF",
        fourth: "#112D4E",
      },
      
    },
  },
  plugins: [require("daisyui")],
};
