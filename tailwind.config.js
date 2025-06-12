/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center:true,
      padding:'15px'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '876px',
      xl: '1030px',
    },
  },
  plugins: [],
}