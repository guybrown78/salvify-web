/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-lato)',
      },
			colors: ({ colors }) => ({
        gray: colors.neutral,
				"salvify-primary": '#2EAF7D',
				"salvify-secondary": '#02353C',
				"salvify-accent-green": '#449342',
				"salvify-accent-aqua": '#3FD0C9',
				"salvify-accent-light": '#C1F6ED',
      }),
      maxWidth: {
        '2xl': '40rem',
      },
			// typography: {
      //   DEFAULT: {
      //     css: {
      //       h3: {
      //         // color: '#3182ce',
      //         // '&:hover': {
      //         //   color: '#2c5282',
      //         // },
      //       },
      //     },
      //   },
      // },
    },
  },
  plugins: [
		require('@tailwindcss/forms'), 
		require('@tailwindcss/typography'),
		require('@headlessui/tailwindcss')
	],
}
