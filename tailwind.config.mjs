import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

const accent = { 200: '#b1cfd3', 400: '#00bccf', 600: '#007a86', 900: '#0a393f', 950: '#0e282c' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				accent: accent,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				gray: colors.zinc,
			},
		},
	},
	plugins: [starlightPlugin()],
};
