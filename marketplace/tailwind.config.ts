import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
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
        '25rem': '25rem',
        '30rem': '30rem',
        '35rem': '35rem',
        '40rem': '40rem',
        '45rem': '45rem'
      },
      height: {
        '25rem': '25rem',
        '30rem': '30rem',
        '35rem': '35rem',
        '40rem': '40rem',
        '45rem': '45rem'

      },
    },
  },
  important: true, // Enforce !important on all utilities
  plugins: [],
};

export default config;
