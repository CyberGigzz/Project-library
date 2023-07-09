/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./**/*.{html,js}"],
  content: ["./index.html", "./build/**/*.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-minmax": "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
