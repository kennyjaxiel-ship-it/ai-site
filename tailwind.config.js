/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(93, 83, 255, 0.25), 0 20px 60px rgba(79, 70, 229, 0.35)',
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top, rgba(99,102,241,0.18), transparent 25%), radial-gradient(circle at right, rgba(34,211,238,0.2), transparent 30%), linear-gradient(135deg, #020617 0%, #0f172a 40%, #111827 100%)',
      },
    },
  },
  plugins: [],
};
