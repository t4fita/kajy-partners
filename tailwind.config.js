/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 6s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },
    colors: {
      'white': '#ffffff',
      'primary': '#09296f',
      'secondary': '#357f76',
    }
  },
  plugins: []
};
