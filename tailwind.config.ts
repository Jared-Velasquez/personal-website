import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        coffee: {
          50: '#FAF6F1',
          100: '#F2E8DC',
          200: '#E0CCAF',
          300: '#C4A882',
          400: '#B08C5A',
          500: '#8B6914',
          600: '#6B4F10',
          700: '#4A3728',
          800: '#2C2218',
          900: '#1A1410',
          950: '#0F0C09',
        },
        cream: '#F2E8DC',
        latte: '#C4956A',
        mocha: '#8B7355',
        espresso: '#1A1410',
        roast: '#2C2218',
      },
      aspectRatio: {
        intro: '0.74993'
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
export default config
