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
			quaternary: '#7d6dc5',
			background: '#030e3b',
			color: '#fff',
		},
		fontFamily: {
			heavyTC: ['Heavy', 'Microsoft JhengHei', 'PingFang', 'sans-serif'],
			mediumTC: ['Medium', 'Microsoft JhengHei', 'PingFang', 'sans-serif'],
			regularTC: ['Regular', 'Microsoft JhengHei', 'PingFang', 'sans-serif'],
			boldTC: ['Bold', 'Microsoft JhengHei', 'PingFang', 'sans-serif'],
			bookTC: ['Book', 'Microsoft JhengHei', 'PingFang', 'sans-serif'],
		},
	},
	plugins: [],
};
