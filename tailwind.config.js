export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        terminal: {
          bg: '#0a0e14',
          panel: '#0f141c',
          line: '#1c2530',
          green: '#3ff3a5',
          cyan: '#38e1ff',
          dim: '#5c7080',
        },
        gallery: {
          bg: '#12100e',
          panel: '#1c1815',
          line: '#2e2822',
          gold: '#e6b980',
          cream: '#f3ead9',
          dim: '#8a7d6d',
        },
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        glow: 'glow 2.5s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
        scan: 'scan 6s linear infinite',
        floatSlow: 'floatSlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
