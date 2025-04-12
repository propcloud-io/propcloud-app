/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Professional blue as primary
          light: '#60A5FA', // Secondary blue
        },
        secondary: {
          DEFAULT: '#60A5FA', // Secondary blue
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
