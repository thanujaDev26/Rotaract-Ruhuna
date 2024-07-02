/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      "base":'#C62F52',
      "white":'#ecf0f1',
      "red":'#EA2027',
      "text-b":'#1e272e',
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

