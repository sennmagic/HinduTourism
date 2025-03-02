/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        fontFamily: {
          sans: ["var(--font-inter)", "sans-serif"],
          custom: ['Fontspring-DEMO-BOLD-ITALIC.otf'],
         Qasira: ['Qasira.otf']  // Add your custom font

        },
        'spacer': '112px', 
        // Adding a custom spacing value
      },
      colors: {
        default: "#AD3C16", // Custom default color
        orange: {
          DEFAULT: "#AD3C16",
          light: "#F05A28",
          dark: "#833419"
        },
          blue: "#00619E",
          red:"#9D0000",
          pink: "#C6007B"
      },
    },
  },
  plugins: [

    require('tailwind-scrollbar-hide'),

  ],
};
