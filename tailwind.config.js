/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { DEFAULT: '#1D6FD8', dark: '#1558B0', soft: '#EAF3FD', mist: '#F5F9FE' },
        ink: { DEFAULT: '#14284B', mute: '#506280' },
      },
      keyframes: { pop: { from: { opacity: 0, transform: 'translateY(10px) scale(.98)' }, to: { opacity: 1, transform: 'none' } } },
      animation: { pop: 'pop .3s ease' },
    },
  },
  plugins: [],
}
