const colors = require('tailwindcss/colors')

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	xwind: {
		mode: 'objectstyles',
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwind-bootstrap-grid')(),
		require(`@tailwindcss/ui`),
	],
}
