/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#FBF9F5',         // Warm cream background
        surface: '#F2EDE4',    // Muted off-white for cards/borders
        primary: '#1C1917',    // Espresso/charcoal primary text
        muted: '#78716C',      // Subdued secondary text
        accent: '#9E2A2B',     // Rust red for links/accents
      },
      fontFamily: {
        serif: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};