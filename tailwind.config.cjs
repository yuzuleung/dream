/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  darkMode: 'class', // use class strategy to match existing `.dark` usage
  theme: {
    extend: {
      // map some frequently used CSS variables so you can use Tailwind classes
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
      },
      fontFamily: {
        sans: ['var(--font-family)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
