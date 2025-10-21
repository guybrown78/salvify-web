/** @type {import('tailwindcss').Config} */

const withAlpha = (varName: string) => ({ opacityValue }: any) =>
  opacityValue ? `oklch(from var(${varName}) l c h / ${opacityValue})`
               : `oklch(from var(${varName}) l c h)`

							 
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
        // sans: 'var(--font-lato)',
				// Body default
				sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
				// Brand / headings
				brand: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
			colors: ({ colors }) => ({
        // gray: colors.neutral,
				// "salvify-primary": '#00bbb7',
				// "salvify-secondary": '#172144',
				// "salvify-accent-green": '#449342',
				// "salvify-accent-aqua": '#3FD0C9',
				// "salvify-accent-light": '#dfecef',
				// "salvify-accent-gray": '#f0f4f8',
				// "salvify-accent-orange": '#ED9472',
				// primitives
        'brand-500': withAlpha('--color-brand-500'),
				// 'brand-500':'var(--color-brand-500)',
        'brand-700': withAlpha('--color-brand-700'),
        ink: withAlpha('--color-ink'),
        surface: withAlpha('--color-surface'),
        'surface-muted': withAlpha('--color-surface-muted'),
        accent: withAlpha('--color-accent'),
        // semantic roles with alpha support
        bg: withAlpha('--color-bg'),
        fg: withAlpha('--color-fg'),
        card: withAlpha('--color-card'),
        cta: withAlpha('--color-cta'),
        'cta-hover': withAlpha('--color-cta-hover'),
        border: withAlpha('--color-border'),
        link: withAlpha('--color-link'),
        success: withAlpha('--color-success'),
        warning: withAlpha('--color-warning'),
        danger: withAlpha('--color-danger'),
      }),
      maxWidth: {
        '2xl': '40rem',
      },
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.fg / 1'),
						'--tw-prose-headings': theme('colors.fg / 1'),
						h1: { fontFamily: theme('fontFamily.brand').join(',') },
						h2: { fontFamily: theme('fontFamily.brand').join(',') },
						h3: { fontFamily: theme('fontFamily.brand').join(',') },
					},
				},
			}),
    },
  },
  plugins: [
		require('@tailwindcss/forms'), 
		require('@tailwindcss/typography'),
		require('@headlessui/tailwindcss')
	],
}
