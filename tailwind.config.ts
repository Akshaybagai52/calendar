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
dark:"#000814",
 "custom_gradient": 'linear-gradient(80deg, #000428, #004e92)',
      },
      colors:{
        "softorange":"#f4a259",
        "COLORS$softorange$tomatored":" #f25c66",
        "mediumblu":"#1e272d"
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
