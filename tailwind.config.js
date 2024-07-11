/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f3e72",
        secondary: "rgba(255,255,255,0.78)",
        Black: "#131110",
        blueGrandient: "linear-gradinet(97.05deg, #4066f 3.76%, #2949c6 100%)",
        orangeGradient: "linearGradient(270deg, #ffb978 0%, #ff922d 100%)",
        blue: "#4066ff",
        lightBlue: "#eeeeff",
      },
    },
    screens: {
      tablet: "740px",
      mobile: "500px",
      // => @media (min-width: 640px) { ... }

      laptop: "1054px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
