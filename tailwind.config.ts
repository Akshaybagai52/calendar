import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
dark:"#23233e",
 "custom_gradient": 'linear-gradient(80deg, #000428, #004e92)',
      },
  
     
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'Rubik': ['Rubik', ' sans-serif '],
      },
      container: {
        center: true
      },
      screens: {
        'sm': { 'max': '576px' },
        'md': { 'max': '768px' },
        // 'lg': {'max': '1024px'},
        'xl': { 'max': '1280px' },
        
      },
    },
  },
  plugins: [],
}
export default config
