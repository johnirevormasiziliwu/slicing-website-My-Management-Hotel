/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "custom-background": "url('./src/image/login/background-image.png')",
        "custom-background-home-hero": "url('./src/image/home/hero.jpg')",
        "custom-background-why-us": "url('./src/image/about-us/bg-why-us.png')",
      },
      colors: {
        "custom-white": "rgba(253, 253, 253, 0.57)",
        "custom-gradient-start": "rgba(22, 32, 52, 0.7)",
        "custom-gradient-end": "rgba(178, 178, 178, 1.0)",
      },
      textColor: {
        "dark-navy-blue": "#162034",
        "dark-gray": "#595959",
        "midnight-blue": "#1A2032",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        parisiene: ["Parisienne", "cursive"],
      },
    },
  },
  plugins: [],
};
