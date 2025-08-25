/** @type {import('tailwindcss').Config} */
const preset = require('nativewind/preset');

module.exports = {
  presets: [preset],
  content: [
    "./app/**/*.{js,ts,tsx}",
    "./src/**/*.{js,ts,tsx}" // src 하위 컴포넌트 포함
  ],
  theme: { extend: {} },
  plugins: [],
};
