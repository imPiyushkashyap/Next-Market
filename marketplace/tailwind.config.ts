import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      width: {
        '15rem' : '15rem',
        '20rem' : '20rem',
        '25rem': '25rem',
        '30rem': '30rem',
        '35rem': '35rem',
        '40rem': '40rem',
        '45rem': '45rem',
        '50rem': '50rem',
        '60rem': '60rem',
        '65rem': '65rem',
      },
      height: {
        '15rem' : '15rem',
        '20rem' : '20rem',
        '25rem': '25rem',
        '30rem': '30rem',
        '35rem': '35rem',
        '40rem': '40rem',
        '45rem': '45rem',
        '50rem': '50rem',
        '60rem': '60rem',
        '65rem': '65rem',

      },
    },
    fontFamily: {
      'climate': ['Climate Crisis', 'sans-serif'],
      'exo': ['Exo 2', 'sans-serif'],
      'montserrat-alt': ['Montserrat Alternates', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
  },
  important: true, // Enforce !important on all utilities
  plugins: [],
};

export default config;
