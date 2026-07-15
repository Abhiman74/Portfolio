// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables class-based dark mode
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        muted: 'var(--muted)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        // add any additional custom colors here
      },
    },
  },
  plugins: [
    // Shortcut utilities for brevity (e.g., bg-primary)
    function({ addUtilities, theme }) {
      const newUtilities = {};
      const cols = ['primary', 'secondary', 'muted', 'background', 'foreground', 'card', 'border', 'accent'];
      cols.forEach((c) => {
        newUtilities[`.bg-${c}`] = { backgroundColor: `var(--${c})` };
        newUtilities[`.text-${c}`] = { color: `var(--${c})` };
        newUtilities[`.border-${c}`] = { borderColor: `var(--${c})` };
      });
      addUtilities(newUtilities);
    },
  ],
};
