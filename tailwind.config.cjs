/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#90d82b",
        
"secondary": "#bec625",
        
"accent": "#a1f4e2",
        
"neutral": "#222834",
        
"base-100": "#EBE9F1",
        
"info": "#ABDBE7",
        
"success": "#12784F",
        
"warning": "#D49D11",
        
"error": "#E93E2B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
