/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/routes/**/*.{js,jsx,ts,tsx}", // SolidStart 라우트 폴더 필수
    "./src/components/**/*.{js,jsx,ts,tsx}",    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};