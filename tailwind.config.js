/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'custom-bg': {
          light: '#dce6f0',
          dark: '#19232d',
        },
        'custom-text': {
          light: '#19232d',
          dark: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}

