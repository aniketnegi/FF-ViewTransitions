/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"LM-Background": "#F6F6F6",
			"DM-Background": "#181717",
			"LM-Text": "#141414",
			"DM-Text": "#e9e9e9",

		},
	},
	darkMode: ['selector', '[data-theme="dark"]'],
}
