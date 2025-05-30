// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html",
//   "./src/**/*.{js,ts,jsx,tsx}",],
//   theme: {
//     extend: {
//       fontFamily: {
//         'inter': ['"Inter"', 'sans-serif'],
//         'instrument': ['"Instrument Sans"', 'sans-serif'],
//       },
//       typography: {
//         DEFAULT: {
//           css: {
//             fontFamily: '"Inter", "sans-serif"',
//           },
//         },
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/typography'),
//   ],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
        'instrument': ['"Instrument Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Remove this line: require('@tailwindcss/typography'),
  ],
}