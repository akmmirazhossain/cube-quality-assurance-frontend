/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				26: [
					'26px',
					{
						lineHeight: '32px',
					},
				],
			},
			borderRadius: {
				35: '35px',
			},
			screens: {
				xs: '412px',
				// => @media (min-width: 412px) { ... }

				sm: '640px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				// => @media (min-width: 768px) { ... }

				lg: '1024px',
				// => @media (min-width: 1024px) { ... }

				xl: '1280px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			},
			backgroundImage: {
				inspectionModule: "url('/images/hero/InspectionModuleHero.png')",
				enterpriseHero: "url('/images/hero/Enterprise-Hero.png')",
				appsModuleBg: "url('/images/shapes/AppsModuleVectorBg.png')",
				communityQA: "url('/images/shapes/Community-QA.png",
				searchBulb: "url('/images/icon/SearchBulb.png')",
			},
			colors: {
				primary: '#077D83',
				secondary: '#523249',
				eminence: '#683E76',
				solitude: '#E8E9EC',
				white: '#FFFFFF',
				offWhite: '#F4F4F4',
				dark: '#23252D',
			},
		},
	},
	plugins: [],
};
