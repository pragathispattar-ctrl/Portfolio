/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030712',
          900: '#060a12',
          850: '#0b101b',
          800: '#111827',
          700: '#1c2438',
        },
        navy: {
          950: '#050b18',
          900: '#0a1329',
          800: '#0f1d3f',
          700: '#172b59',
        },
        cyan: {
          DEFAULT: '#00f0ff',
          bright: '#00f7ff',
          glow: '#00d2ff',
          muted: '#38bdf8',
        },
        electric: {
          blue: '#1d4ed8',
          indigo: '#4f46e5',
          violet: '#7c3aed',
          purple: '#9333ea',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Cabinet Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      backgroundImage: {
        'futuristic-grid': "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.05) 0%, transparent 60%)",
        'cyber-gradient': "linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)",
        'glass-gradient': "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)"
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 240, 255, 0.35)',
        'cyan-glow-lg': '0 0 50px -10px rgba(0, 240, 255, 0.45)',
        'violet-glow': '0 0 25px -5px rgba(124, 58, 237, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
