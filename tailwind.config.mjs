/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Define your custom colors here
				primary: '#3490dc',  // Example color, replace with your desired color
				secondary: '#090b11',  // Another example color
				accent: '#79AC78',
				hover: 'rgb(208, 231, 210, 0.2)',
			},
			backgroundImage: {
				'svg-background-light': "url('/assets/backgrounds/bg-main-light.svg')",
				'svg-background-dark': "url('/assets/backgrounds/bg-main-dark.svg')",
			},
			backgroundSize: ({ theme }) => ({
				auto: 'auto',
				cover: 'cover',
				contain: 'contain',
			}),
		},
	},
}
