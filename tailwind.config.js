/** @type {import('tailwindcss').Config} */
module.exports = {
  screens: {
    'sm': '399px',
    'md': '1024px',
    'lg': '1280px',
    'xl': '1920px',
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    extend: {
      backgroundImage: (theme) => ({
        text_gradiant: `linear-gradient(90.15deg, #5E82A3 -18.97%, #9747FF 97.15%)`,
      }),
      fontSize: {   
        'font-sm-btn': ['1rem', { /*16px*/
          lineHeight: '2rem',
          fontWeight: '600',
        }],
        'font-sm': ['1rem', { /*16px*/
          lineHeight: '2rem',
          fontWeight: '500',
        }],
        'font-md': ['1.125rem', { /*18px*/
          lineHeight: '2rem',
          fontWeight: '600',
        }], 
        'font-lg': ['2rem', { /* 32px */
          lineHeight: '120%',
          fontWeight: '800',
        }],
        'font-xl': ['2.5rem', { /* 40px */
          lineHeight: '100%',
          fontWeight: '800',
        }],
    },
     screens: {
      'mobile': '399px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

      colors: {
        dark: "#0F0F0F",
        lightgray: "#f1f3f5",
        light: "#fff",
        text_gradiant:
          "linear-gradient(90.15deg, #5E82A3 -18.97%, #9747FF 97.15%)",
        bg_gradiant:
          "linear-gradient(79.88deg, #0E82ED 12.94%, #9747FF 84.73%)",
        blue_gradient:
          "radial-gradient(96.96% 2226.13% at 1.3% 8.33%, #5E82A3 0%, #0E82ED 100%)",
          neutro_dark_01: "#3C3C4C",
          neutro_dark_02: "#515063",
        neutro_dark_04: "#9494AC",
        green: "#34A853",
        neutro_light_04:"#D2D2E0",
        primary_blue: "#0E82ED",
        secondry_purple: "#8F4BCE",
        secondry_purple_light: "#E9D1FF",
        primary_black:"#2F2F37"
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: ["tailwindcss", "autoprefixer", require("tailwind-scrollbar-hide")],
  darkMode: "class",
};
