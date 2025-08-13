/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',    // 60px
        '85': '21.25rem',   // 340px
      },
      gap: {
        '15': '3.75rem',    // 60px
      },
      borderWidth: {
        '3': '3px',
      },
      scale: {
        '120': '1.2',
      },
      margin: {
        '15': '3.75rem',    // 60px
      },
      width: {
        '15': '3.75rem',    // 60px
        '85': '21.25rem',   // 340px
      },
      height: {
        '15': '3.75rem',    // 60px
      },
      maxWidth: {
        '8xl': '88rem',
      }
    },
  },
  plugins: [],
}
