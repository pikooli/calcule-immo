import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					100: '#DBE8FE',
					200: '#BFD8FE',
					300: '#A4CAFE',
					500: '#3A79F7',
					600: '#2358ED',
					700: '#1C44D9',
					800: '#1D38B0',
					900: '#1D358B',
					950: '#172254',
					DEFAULT: '#5f9dfb'
				},
				secondary: {
					50: '#F5F7FA',
					100: '#EAEEF4',
					200: '#D0DBE7',
					300: '#A6BCD3',
					400: '#7799B9',
					500: '#557CA2',
					600: '#426287',
					700: '#37506D',
					800: '#30455C',
					900: '#2C3C4E',
					DEFAULT: '#1F2937'
				}
			}
		}
	}
} as Config;
