/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				hero: '640px',
			},
			backgroundColor: {
				hero: '#DF9C86',
				darkBlue: '#0054B4',
			},
			textColor: {
				darkGrey: '#272D37',
				lightGrey: '#5F6D7E',
			},
		},
		plugins: [],
	},
};
