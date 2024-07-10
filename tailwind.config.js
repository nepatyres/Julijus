/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['"Lato"'],
        'latoR': ['"Lato-R"'],
        'JostR': ['"Jost-Regular"'],
        'switzerL': ['"Switzer-L"'],
        'robotoM': ['"Roboto-M"'],
        'antonio': ['"Antonio"'],
        'switzer': ['"Switzer"']
      },
      colors:{
        'dot6': 'rgba(255, 255, 255, .6)',
        'dot7': 'rgba(255, 255, 255, .7)',
        'dot8': 'rgba(255, 255, 255, .8)',
        'dot9': 'rgba(255, 255, 255, .9)',
        'dark': '#181718',
        'whiteS': '#ffffffe6',
        'blackS': '#000000e6',
        'footBB': '#e7e8e7',
        'footBW': '#181718',
        'containerLight': '#fcfcfc',
        'containerDark': '#030303',
        
      }
    },
  },
  plugins: [],
}

