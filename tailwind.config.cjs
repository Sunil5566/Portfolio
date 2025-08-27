module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1A1A2E',      // Deep navy (replacing black)
        coffee: '#8B4513',    // Brown/coffee (brand color)
        sky: '#00BFFF',       // Bright sky blue (accent)
        light: '#F5F5F5',     // Light gray (text)
        dark: '#2E2E2E',      // Dark gray (mid tone)
        darker: '#0F0F23',    // Darker navy (backgrounds)
        cream: '#F5E6D3',     // Cream (light accent)
        teal: '#008B8B'       // Dark teal (secondary accent)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'orbit': 'orbit 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-10px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(180deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 191, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 191, 255, 0.6)' },
        }
      }
    }
  },
  plugins: []
}