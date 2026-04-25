/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Google Chrome / Material-inspired palette
        ink: {
          900: '#202124',  // primary text
          700: '#3c4043',  // headings
          500: '#5f6368',  // secondary text
          300: '#80868b',  // muted text
        },
        chrome: {
          50:  '#f8f9fa',  // page background
          100: '#f1f3f4',  // subtle section bg
          200: '#e8eaed',  // borders light
          300: '#dadce0',  // borders
          400: '#bdc1c6',  // dividers
        },
        blue: {
          50:  '#e8f0fe',
          100: '#d2e3fc',
          500: '#1a73e8',  // Google Blue (primary accent)
          600: '#1557b0',
          700: '#174ea6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Google Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

