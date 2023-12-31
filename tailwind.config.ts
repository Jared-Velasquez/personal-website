import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        chivo: ['var(--font-chivo)'],
        oswald: ['var(--font-oswald)'],
        playfair: ['var(--font-playfair)'],
      },
      colors: {
        coffeeBlack: 'rgb(34, 15, 17)',
        mocha: '#382a1d',
        caramel: '#8f614b',
        heavyCream: '#b697d',
        whip: 'rgb(234, 224, 211)',
        whipDark: '#DAC8B0',
        sage: '#9eab9a',
      },
      aspectRatio: {
        intro: '0.74993'
      }
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
