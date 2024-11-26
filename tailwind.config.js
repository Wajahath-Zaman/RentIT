/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        "custom-aqua": '#0F5B6A',
        "custom-red": "#CB6040",
        "custom-orange": '#FD8B51',
        "custom-yellow": "#F2E5BF"
      },
    },
  },
  plugins: [],
}

