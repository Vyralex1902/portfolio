import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromTop: {
          '0%': { transform: 'translateY(-150px)' },
          '50%': { transform: 'translateY(0px)' },
        },
        slideInFromTopDelayed: {
          '0%': { transform: 'translateY(-150px)' },
          '70%': { transform: 'translateY(0px)' },
        },
        reveal: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        revealmainimg: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.2' },
        }
      },
      animation: {
        slideInFromTop: 'slideInFromTop 2s',
        slideInFromTopDelayed: 'slideInFromTopDelayed 2s',
        reveal: 'reveal 2s ease-out',
        revealmainimg: 'revealmainimg 2s ease-out',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
} satisfies Config;
