/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(183, 83%, 53%)',
        cyanLight: 'hsl(182, 91%, 36%)',
        darkGray: 'hsl(245, 16%, 29%)',
        orangeLigth: 'hsl(26, 84%, 78%)',
        darkOrange: 'hsl(39, 82%, 66%)'
      },
      textColor: {
        accentGreen: "#248e9e",
        ligthGray: "#859196",
        danger: "#e3342f",
      },
      backgroundImage: (theme) => ({
        "footer": "url('./src/assets/bg-footer.jpg')",
      }),
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};