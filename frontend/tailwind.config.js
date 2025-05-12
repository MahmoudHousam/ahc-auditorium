/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js, ts, jsx, tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "auditorium-blue": "#2563eb",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
