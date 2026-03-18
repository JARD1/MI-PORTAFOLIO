/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. AQUÍ DEFINIMOS LAS NUEVAS FUENTES
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      // 2. Mantenemos tus animaciones
      keyframes: {
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        techOrbit: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        techOrbitReverse: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        }
      },
      animation: {
        'cursor-blink': 'cursorBlink 0.8s step-end infinite',
        'tech-orbit': 'techOrbit linear infinite',
        'tech-orbit-reverse': 'techOrbitReverse linear infinite',
      }
    },
  },
  plugins: [],
}