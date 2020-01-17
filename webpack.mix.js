let LiveReloadPlugin = require('webpack-livereload-plugin')

let mix = require('laravel-mix')
let tailwind = require('tailwindcss')
mix.pug = require('laravel-mix-pug')

mix
	.js('src/resources/js/app.js', 'dist/')
	.sass('src/resources/scss/app.scss', 'dist/')
	.options({
		processCssUrls: false,
		postCss: [tailwind('./tailwind.config.js')]
	})
	.pug('src/pages/**/*.pug', '../../dist/')

mix.webpackConfig({
	devServer: {
		host: "localhost",
		port: "5050",
		contentBase: path.join(__dirname, 'dist')
	}
})
