/* eslint-disable import/no-extraneous-dependencies */
const color = require('tailwindcss/colors');
const { fontSize } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		// container: { screen: {} },
		fontSize: {
			...fontSize,
		},
		colors: {
			...color,
			primary: '#d9447e',
			secondary: '#ffbc0d',
			tertiary: '#ff0066',
			quaternary: '#00ff00',
			background: '#030e3b',
			color: '#fff',
		},
	},
	plugins: [],
};
