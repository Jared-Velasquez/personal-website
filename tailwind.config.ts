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
      },
      colors: {
        coffeeBlack: 'rgb(34, 15, 17)',
        mocha: '#382a1d',
        caramel: '#8f614b',
        heavyCream: '#b697d',
        whip: 'rgb(234, 224, 211)',
      }
    },
  },
  plugins: [],
}
export default config
