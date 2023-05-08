/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				hero: '640px',
				nav: '214px',
			},
			backgroundColor: {
				hero: '#DF9C86',
				darkBlue: '#0054B4',
				lightBlue: '#437EF7',
				camColor: '#3C50E0',
			},
			textColor: {
				darkGrey: '#272D37',
				lightGrey: '#5F6D7E',
			},
		},
		plugins: [],
	},
};
