/** @type {import('tailwindcss').Config} */
export default {
  // Deliberately excludes .ts: src/data holds content strings that must
  // never be scanned as class-name candidates (data edits should not
  // churn the generated CSS). All markup lives in .astro/.jsx files.
  content: ['./src/**/*.{astro,html,js,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
