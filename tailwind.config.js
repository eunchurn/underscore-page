/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['"Noto Sans KR"', 'sans-serif'],
        'apple': ['"Apple SD Gothic Neo"', 'Roboto', '"Noto Sans KR"', 'NanumGothic', '"Malgun Gothic"', 'sans-serif'],
      },
      colors: {
        'apple-dark': 'rgb(29, 29, 31)',
      },
      fontSize: {
        'xs': '0.8rem',
        'sm': '1.2rem',
        'base': '1.4rem',
        'lg': '2rem',
        'xl': '2.5rem',
        '2xl': '3.5rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '9vw',
      },
      spacing: {
        '44': '44px',
        '52': '52px',
      },
      animation: {
        'loading-spin': 'loading-spin 3s infinite',
        'loading-circle': 'loading-circle-ani 1s infinite',
      },
      keyframes: {
        'loading-spin': {
          '100%': { transform: 'rotate(360deg)' }
        },
        'loading-circle-ani': {
          '0%': { 'stroke-dashoffset': '157' },
          '75%': { 'stroke-dashoffset': '-147' },
          '100%': { 'stroke-dashoffset': '-157' }
        }
      }
    },
  },
  plugins: [],
}