/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        luxuriousScript: ['LuxuriousScript', 'cursive'],
        petitFormalScript: ['PetitFormalScript', 'cursive'],
        marckScript: ['MarckScript', 'cursive'],
        pinyonScript: ['PinyonScript', 'cursive'],
        chopinScript: ['ChopinScript', 'cursive'],
        cherrySwash: ['CherrySwash', 'cursive'],
        septemberScript: ['SeptemberScript', 'cursive'],  
      }
    },
  },
  plugins: [],
}

