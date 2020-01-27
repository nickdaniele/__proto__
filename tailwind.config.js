module.exports = {
  theme: {
    transitionProperty: {
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background-color',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color'],
      'opacity': 'opacity',
      'transform': 'transform'
    },
    extend: {
      colors: {
        'c-transparent': 'transparent',
        'c-white': '#fff',
        'c-black': '#000',
        'c-gray': {
          100: '#f2f2f2',
          200: '#939393',
          300: '#818181'
        },
        'c-purple': '#ce7db8',
        'c-blue': '#60bcff',
        'c-green': '#7dce82',
        'c-orange': '#ff8360',
        'c-yellow': '#e8e288'
      },
      fontFamily: {
        brandon: ['Brandon Grotesque Regular', 'san-serif'],
        ibm: ['IBM Plex Mono Regular', 'san-serif']
      }
    }
  },
  plugins: [
    require('tailwindcss-transitions')(),
    require('tailwindcss-animations')()
  ]
};
