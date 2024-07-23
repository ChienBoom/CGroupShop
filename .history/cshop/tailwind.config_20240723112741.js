/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "600px",
        md: "700px",
        lg: "800px",
        xl: "1000px",
      },
    },
    extend: {},
  },
  plugins: [],
};
