/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
	],
	theme: {
		fontFamily: {
			iranyekan: ['iranyekan'],
		},
		extend: {
			colors: {
				// primary: '#2890ff',
				primary: '#2890ff',
				disable: '#9ca3af',
			},
		},
	},
	plugins: [],
};
