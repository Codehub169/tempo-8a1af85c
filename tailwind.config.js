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
        'hueneu-primary': '#A6A39F',       // Muted Grey/Taupe (Neu)
        'hueneu-secondary': '#D0CFCF',   // Lighter Neutral
        'hueneu-accent': '#FF6B6B',        // Soft Coral (Hue Pop)
        'neutral-bg': '#F5F5F5',          // Light Background
        'text-dark': '#333333',           // Dark Text
        'text-light': '#666666',          // Secondary Text
        'status-success': '#4CAF50',
        'status-warning': '#FFC107',
        'status-error': '#F44336',
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
