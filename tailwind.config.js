/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      "pink":'#C62F52',
      "white":'#ecf0f1',
      "red":'#EA2027',
      "text-b":'#1e272e',
      "gray-50":'#4b5563',
      "gray-900":'#111827',
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

