/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"),
      require("tailwind-scrollbar"),
      require("tailwind-scrollbar-hide")],
}

