  // tailwind.config.js
  module.exports = {
    mode:"jit",
    purge: [],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        borderRadius: {
          "mc": '242px',
          "mc2": '342px',
        },
        colors:{
          "textLight": "#A8A8A8",
          "borderLight": "#E8E8E8",
          "oceanGreen": "#11ABB0",
        },
        backgroundColor: theme => ({
          ...theme('colors'),
          'trns': '#00000066',
          "coffee": "#2B2B2B",
          "coffeeLight": "#ccc",
          "coffeeLight2": "#7a7a7a",
          "bgCoffTrns": "#000000cc",
          "bgHeader": "#444"
         }),
         height: {
           "c": "99.5%",
         },
         transitionDuration: {
          '0': '0ms',
          '2000': '2000ms',
         },
         backgroundImage: theme => ({
          'bgh': "url('../public/header-background.jpg')",
          'bgT': "url('../public/testimonials-bg.jpg')",
          'bgC': "url('../public/contact.jpg')",
         }),
         fontFamily: {
           "OpenSansExtraBold": ['OpenSansExtraBold', "sans-serif"],
           "OpenSansBold": ['OpenSansBold', "sans-serif"],
           "librebaskervilleItalic": ['librebaskervilleItalic', "sans-serif"],
           "librebaskervilleRegular": ['librebaskervilleRegular', "sans-serif"],
         },
         margin: {
           "mbc": "32rem",
           "mbc2": "46rem",
         }
       },
      //  inset: {
      //    "cus": "40%"
      //  }
       
     },
     variants: {
       extend: {},
     },
     plugins: [require("tailwind-scrollbar-hide")],
   }