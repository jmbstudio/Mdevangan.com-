/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#05070f',
        'bg-card': '#0a0d1a',
        'gold': '#c9a84c',
        'gold-light': '#e8c96a',
        'cream': '#f5f0e8',
        'blue-soft': '#5b8dee',
        'purple-soft': '#a78bfa',
        'cyan-soft': '#67e8f9',
        'text-muted': '#6b7280',
        'text-dim': '#9ca3af',
        'border-subtle': 'rgba(255,255,255,0.07)',
        'border-gold': 'rgba(201,168,76,0.25)',
        // legacy compat
        'primary-bg': '#05070f',
        'primary-secondary': '#0a0d1a',
        'accent-blue': '#5b8dee',
        'accent-purple': '#a78bfa',
        'accent-cyan': '#67e8f9',
        'text-primary': '#FFFFFF',
        'text-secondary': '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Inter', 'system-ui', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a84c, #e8c96a)',
        'gradient-gold-v': 'linear-gradient(180deg, #c9a84c, #e8c96a)',
        'gradient-blue': 'linear-gradient(135deg, #5b8dee, #a78bfa)',
        'gradient-primary': 'linear-gradient(135deg, #5b8dee, #a78bfa, #67e8f9)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float-slow 7s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'shimmer': 'shimmer 3s infinite',
      },
      boxShadow: {
        'gold': '0 0 40px rgba(201,168,76,0.35)',
        'gold-sm': '0 0 20px rgba(201,168,76,0.2)',
        'glow-blue': '0 0 40px rgba(91,141,238,0.3)',
        'card': '0 24px 60px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
