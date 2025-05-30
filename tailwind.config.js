/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hueneu-primary': '#2C3E50',    // Midnight Blue (New Neu - sophisticated, stable)
        'hueneu-secondary': '#95A5A6',  // Concrete (New Lighter Neutral - calm, supportive)
        'hueneu-accent': '#1ABC9C',     // Turquoise (New Hue Pop - vibrant, modern, trustworthy)
        'neutral-bg': '#FFFFFF',       // White (New Light Background - clean, spacious)
        'text-dark': '#2C3E50',        // Dark Blue (harmonized with new primary)
        'text-light': '#7F8C8D',       // Softer Grey (harmonized with new scheme)
        'status-success': '#27AE60',   // Adjusted Green
        'status-warning': '#F39C12',   // Adjusted Orange
        'status-error': '#E74C3C',     // Adjusted Red
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        soft: '4px',
        softer: '8px',
        medium: '12px',
        large: '16px',
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'interactive': '0 6px 16px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 24px rgba(0,0,0,0.12)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        slideInUp: 'slideInUp 0.5s ease-out forwards',
        subtlePop: 'subtlePop 0.3s ease-out',
        logoReveal: 'logoReveal 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtlePop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        logoReveal: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0px)' },
        }
      },
    },
  },
  plugins: [],
};
