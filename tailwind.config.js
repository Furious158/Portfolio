// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'code-pattern': "url('/path/to/your-code-pattern.png')",
      'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',},
  },
  colors: {
    'tech-blue': '#1e3c72',
    'tech-dark': '#2a5298',
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cyberpunk", "dark", "light"], // Choisis les thèmes que tu veux
  },
}
}
