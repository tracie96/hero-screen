/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'general': ['General Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        'blue-darker': '#007AFF',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-bubble': 'pulse-bubble 2s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'slide-up': 'slide-up 1s ease-out',
        'bounce-scroll': 'bounce-scroll 2s ease-in-out infinite',
        'fly-diagonal-left': 'fly-diagonal-left 10s linear infinite',
        'fly-diagonal-right': 'fly-diagonal-right 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        'pulse-bubble': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        drift: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(calc(100vw + 100px))' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(60px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-scroll': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(-10px)' },
        },
        'fly-diagonal-left': {
          '0%': { 
            transform: 'translateX(-50px) translateY(0)',
            opacity: '1',
          },
          '50%': { 
            transform: 'translateX(50vw) translateY(-50vh)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translateX(100vw) translateY(-100vh)',
            opacity: '0',
          },
        },
        'fly-diagonal-right': {
          '0%': { 
            transform: 'translateX(50px) translateY(0)',
            opacity: '1',
          },
          '50%': { 
            transform: 'translateX(-50vw) translateY(-50vh)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translateX(-100vw) translateY(-100vh)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}

