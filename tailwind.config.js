/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8f4ef",
          100: "#efe5d6",
          200: "#e0ccb1",
          300: "#ceb08a",
          400: "#bd996c",
          500: "#a57e4f",
          600: "#885f3b",
          700: "#6a4a30",
          800: "#4f3827",
          900: "#3f2f23"
        },
        accent: {
          500: "#6fb29d",
          600: "#568f7f"
        }
      },
      fontFamily: {
        sans: ["'Manrope'", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "serif"]
      },
      boxShadow: {
        floating: "0 18px 45px -20px rgba(58, 41, 28, 0.25)"
      }
    }
  },
  plugins: []
};
