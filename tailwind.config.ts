import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lusitana: ['Lusitana', 'serif'],
        bangers: ['var(--font-bangers)'],
        luckiestGuy: ['var(--font-luckiest-guy)'],
        oswald: ['var(--font-oswald)'],
        raleway: ['var(--font-raleway)'],
      },
      colors: {
        'tier-s': '#fd807f',
        'tier-a': '#ffbf7e',
        'tier-b': '#ffff80',
        'tier-c': '#80ff80',
        'tier-d': '#7fffff',
      }
    },
  },
  plugins: [],
};
export default config;
