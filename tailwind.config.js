/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          10: "rgba(0, 0, 0, 0.1)",
          20: "rgba(0, 0, 0, 0.2)",
          30: "rgba(0, 0, 0, 0.3)",
          40: "rgba(0, 0, 0, 0.4)",
          50: "rgba(0, 0, 0, 0.5)",
          60: "rgba(0, 0, 0, 0.6)",
          70: "rgba(0, 0, 0, 0.7)",
          80: "rgba(0, 0, 0, 0.8)",
          90: "rgba(0, 0, 0, 0.9)",
        },
        white: {
          DEFAULT: "rgb(255, 255, 255)",
          10: "rgba(255, 255, 255, 0.1)",
          20: "rgba(255, 255, 255, 0.2)",
          30: "rgba(255, 255, 255, 0.3)",
          40: "rgba(255, 255, 255, 0.4)",
          50: "rgba(255, 255, 255, 0.5)",
          60: "rgba(255, 255, 255, 0.6)",
          70: "rgba(255, 255, 255, 0.7)",
          80: "rgba(255, 255, 255, 0.8)",
          90: "rgba(255, 255, 255, 0.9)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
