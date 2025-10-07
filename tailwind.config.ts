/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        'brand-background': '#FFA500', // Deep electric blue
        'brand-surface': '#FFA500',   // Lighter navy for cards/sections
        'brand-primary': '#FFFFFF',   // Bright cyan accent for buttons/hovers
        'brand-text': '#000000',      // Light dusty gray for headings
        'brand-muted': '#000000',     // Darker dusty gray for body text
      },
      fontFamily: {
        heading: ['var(--font-poppins)'],
        body: ['var(--font-inter)'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(90deg, rgba(136, 146, 176, 0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(136, 146, 176, 0.1) 1px, transparent 1px)"
      },
    },
  },
  plugins: [],
};
