/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["'Poppins'", "sans-serif"],
        Lora: ["'Lora'", "serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
