import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'google-blue': {
          50: '#e8f0fe',
          100: '#d2e3fc',
          200: '#aecbfa',
          300: '#8ab4f8',
          400: '#669df6',
          500: '#4285f4',
          600: '#1a73e8',
          700: '#1557b0',
          800: '#0d47a1',
          900: '#0b3d91',
        },
      },
      backgroundImage: {
        'google-gradient': 'linear-gradient(135deg, #4285f4 0%, #1a73e8 50%, #1557b0 100%)',
        'google-gradient-light': 'linear-gradient(135deg, #e8f0fe 0%, #d2e3fc 50%, #aecbfa 100%)',
        'google-gradient-hover': 'linear-gradient(135deg, #1a73e8 0%, #1557b0 50%, #0d47a1 100%)',
      },
    },
  },
  plugins: [],
};
export default config;