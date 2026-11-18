/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['./src/**/*.{js,jsx,ts,tsx}'],
presets: [require('nativewind/preset')],
theme: {
extend: {
colors: {
// STEP 2: put YOUR colors here (hex codes)
brand: '#7C4A2D', // main color: buttons, titles
soft: '#F5EBDD', // light color: screen background
danger: '#DC2626', // red for error messages
},
},
},
plugins: [],
};