let mix = require('laravel-mix')
let tailwind = require('tailwindcss')

mix
	.js('src/resources/js/app.js', 'dist/')
	.sass('src/resources/scss/app.scss', 'dist/')
	.options({
		processCssUrls: false,
		postCss: [tailwind('./tailwind.config.js')]
	})
