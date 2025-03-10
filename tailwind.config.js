/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend:{
            screens: {
                'below-1530': {'max': '1530px'},
            },
            colors: {
                "pink": '#C62F52',
                "white-1": '#ecf0f1',

                "text-b": '#1e272e',
                "gray-50": '#4b5563',
                "gray-900": '#111827',
                "transparent": 'transparent',
            },
          scale: {
              'custom-45': '0.45',
            'custom-75': '0.75',
            'custom-100': '1',
          },

        }
    },
    plugins: [
        require('@tailwindcss/forms'),
      function ({ addUtilities }) {
        const newUtilities = {
          '@media (min-width: 1024px) and (max-width: 1600px)': {
            '.scale-dynamic': {
              transform: 'scale(calc(0.75 + 0.25 * ((100vw - 1024px) / 576)))',
            },
          },
          '@media (max-width: 1023px)': {
            '.scale-50': {
              transform: 'scale(0.5)',
            },
          },
          '@media (min-width: 1601px)': {
            '.scale-100': {
              transform: 'scale(1)',
            },
          },
        };

        addUtilities(newUtilities, ['responsive']);
      },
    ],
}

