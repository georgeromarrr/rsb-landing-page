/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cerulean': '#006C94',
        'sea_green': '#1888AD',
        'golden_frame': '#d9ac1b',
        'gold': '#EDC909',
        'steel_blue': '#A0C8D7',
      },
      transitionProperty: {
        width: "width"
      },
    },
    screens: {
      'desktop': {'min': '1600px'},
      // => @media (min-width: 1600px) { ... }

      'large_laptop': {'min': '1201px', 'max': '1599px'},
      'laptop': {'min': '769px', 'max': '1200px'},
      'tablet': {'min': '476px', 'max': '768px'},
      'mobile': {'min': '375px','max': '475px'},
    },
  },
  plugins: [],
}