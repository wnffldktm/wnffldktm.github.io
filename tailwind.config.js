module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#6a5acd',
        secondary: '#ffb6c1',
        accent: '#98d8c8',
        accent2: '#f0e68c',
        text: '#5a4a6a',
        lightText: '#888',
        cardBg: '#fff9fd',
        sectionBg: '#f8f0ff',
        highlight: '#b19cd9',
        shadow: 'rgba(177, 156, 217, 0.1)',
      },
      fontFamily: {
        suite: ['SUITE Variable', 'sans-serif'],
      },
      animation: {
        float: 'float 15s ease-in-out infinite',
        fadeIn: 'fadeIn 0.8s ease forwards',
        returnToOrigin: 'returnToOrigin 0.8s forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        returnToOrigin: {
          '0%': { transform: 'translate(var(--tw-translate-x), var(--tw-translate-y))' },
          '100%': { transform: 'translate(0, 0)' },
        }
      }
    },
  },
  plugins: [],
}