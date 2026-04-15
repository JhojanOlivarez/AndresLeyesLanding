/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B3C5D",
          silver: "#C0C0C0",
          ivory: "#F7F9FB",
          mist: "#E7EDF3",
          slate: "#5C7186",
          ink: "#12212F",
          cyan: "#5CA7C7",
          gold: "#D8C7A1"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(11, 60, 93, 0.14)",
        glow: "0 24px 80px rgba(92, 167, 199, 0.18)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(92, 167, 199, 0.24), transparent 38%), radial-gradient(circle at bottom right, rgba(11, 60, 93, 0.18), transparent 36%)"
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Manrope'", "sans-serif"]
      }
    },
  },
  plugins: [],
};
