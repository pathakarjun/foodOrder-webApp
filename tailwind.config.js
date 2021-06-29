// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          req: "#F9F9FB",
          buttonred: "#F44957",
        },
      },
      borderRadius: {
        brreq: "2.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
