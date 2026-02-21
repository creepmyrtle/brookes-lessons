/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#e06b54',
          light: '#f0917e',
          hover: '#c85a44',
          bg: 'rgba(224,107,84,0.08)',
        },
        gold: {
          DEFAULT: '#c4943a',
          light: '#dab465',
          bg: 'rgba(196,148,58,0.08)',
        },
        sage: {
          DEFAULT: '#6a8f6e',
          bg: 'rgba(106,143,110,0.06)',
        },
        navy: '#2c3e50',
        brand: {
          bg: '#faf8f5',
          'bg-warm': '#f5f0ea',
          'bg-cream': '#f0ebe3',
          surface: '#ffffff',
          'surface-warm': '#fdf9f4',
          border: '#e8e0d6',
          'border-light': '#f0e8de',
          text: '#2c2420',
          'text-body': '#4a3f38',
          'text-dim': '#7a6e64',
          'text-muted': '#a69a8e',
        },
      },
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        body: ['Outfit', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '16px',
        pill: '100px',
        sm: '10px',
        xs: '6px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(44,36,32,0.04), 0 1px 2px rgba(44,36,32,0.06)',
        md: '0 4px 12px rgba(44,36,32,0.06), 0 2px 4px rgba(44,36,32,0.04)',
        lg: '0 12px 40px rgba(44,36,32,0.08), 0 4px 12px rgba(44,36,32,0.04)',
      },
      maxWidth: {
        site: '1120px',
      },
    },
  },
  plugins: [],
};
