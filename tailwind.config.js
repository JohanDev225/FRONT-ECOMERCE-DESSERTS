/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(182, 91%, 36%)',
        cyanLight: 'hsl(168, 84%, 78%)',
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
        "footer": "url('./images/bg-footer.jpg')",
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