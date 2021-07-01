// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          buttonred: "#F44957",
        },
        gray: {
          reqGray: "#F9F9FB",
        },
      },
      borderWidth: {
        6: "6px",
      },
      borderRadius: {
        req: "2.8rem",
        hpic: "3.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
