/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#FFD164', // golden yellow
        'primary-foreground': '#222222', // dark background
        
        // Secondary Colors
        'secondary': '#F4E4A6', // light golden
        'secondary-foreground': '#222222', // dark background
        
        // Accent Colors
        'accent': '#E6C200', // golden accent
        'accent-foreground': '#222222', // dark background
        
        // Background Colors
        'background': '#222222', // dark background
        'surface': '#2A2A2A', // surface
        
        // Text Colors
        'text-primary': '#FFFFFF', // white
        'text-secondary': '#CCCCCC', // light gray
        
        // Status Colors
        'success': '#4CAF50', // green-500
        'success-foreground': '#FFFFFF', // white
        
        'warning': '#FF9800', // orange-500
        'warning-foreground': '#FFFFFF', // white
        
        'error': '#F44336', // red-500
        'error-foreground': '#FFFFFF', // white
        
        // Border Colors
        'border': '#FFD164', // golden yellow
        'border-muted': '#2A2A2A', // surface
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Lora', 'serif'],
        'cta': ['Montserrat', 'sans-serif'],
        'accent': ['Dancing Script', 'cursive'],
      },
      fontWeight: {
        'heading-normal': '400',
        'heading-semibold': '600',
        'heading-bold': '700',
        'body-normal': '400',
        'body-medium': '500',
        'cta-semibold': '600',
        'cta-bold': '700',
        'accent-medium': '500',
      },
      boxShadow: {
        'primary': '0 4px 12px rgba(255, 209, 100, 0.3)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'golden-glow': '0 0 20px rgba(255, 209, 100, 0.4)',
      },
      transitionDuration: {
        'smooth': '250ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}