module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'rgba(0,188,212,0.1)',
          100: 'rgba(0,188,212,0.2)',
          500: '#00bcd4',
          600: '#00acc1'
        },
        dark: {
          bg: '#080808',
          card: '#111111',
          card2: '#161616',
          border: 'rgba(255,255,255,0.07)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: []
}
