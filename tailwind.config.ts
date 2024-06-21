import type { Config } from 'tailwindcss';
import { colors } from './src/colors';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
	darkMode: 'selector',
	theme: {
		extend: {
			colors
		}
	}
} as Config;
