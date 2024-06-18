import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromTop: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        reveal: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        slideInFromTop: 'slideInFromTop 1s',
        reveal: 'reveal 2s ease-out',
      }
    },
  },
  plugins: [],
} satisfies Config;
