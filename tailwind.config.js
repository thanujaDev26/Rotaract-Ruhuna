/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend:{
            colors: {
                "pink": '#C62F52',
                "white-1": '#ecf0f1',
                "red": '#EA2027',
                "text-b": '#1e272e',
                "gray-50": '#4b5563',
                "gray-900": '#111827',
                "transparent": 'transparent',
            },
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}

