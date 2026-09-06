/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#070B14',
        'primary-secondary': '#0D1321',
        'primary-card': 'rgba(255,255,255,0.04)',
        'accent-blue': '#4F7CFF',
        'accent-purple': '#8B5CF6',
        'accent-cyan': '#22D3EE',
        'text-primary': '#FFFFFF',
        'text-secondary': '#94A3B8',
        'border': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F7CFF, #8B5CF6, #22D3EE)',
        'gradient-blue-purple': 'linear-gradient(135deg, #4F7CFF, #8B5CF6)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(79, 124, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(79, 124, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
