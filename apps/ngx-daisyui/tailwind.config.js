const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  safelist: [
    'mr-1',
    'opacity-20',
    'hover:opacity-60',
    'text-base',
    'font-bold',
    'inline-block',
    'align-middle',
    'relative',
    '-mt-1',
    '[&_svg]:visible',
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'],
      }
    }
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
};
