/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend:{
            colors: {
                "rac-pink": '#C62F52',
                "rac-white": '#ecf0f1',
                "rac-text-b": '#1e272e',
                "rac-gray-50": '#4b5563',
                "rac-gray-900": '#111827',
            },
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}

