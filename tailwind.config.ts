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
        'service_bg': "url('https://cdn.pixabay.com/photo/2023/11/22/15/20/books-8405721_1280.jpg')",
        'pattern_image': "url('/images/pattern.svg')",
        'white_pattern_image': "url('/images/white_pattern.svg')",
        'white_pattern_big_image': "url('/images/white_pattern_big.svg')",
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'jost': ['Jost'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      },
      colors: {
        'primary-color': '#D7272A',
      },
    },
  },
  plugins: [],
}
export default config
