// const fs = require('fs')
// const path = require('path')
// const withTypescript = require('@zeit/next-typescript')
// const withSass = require('@zeit/next-sass')
// const withLess = require('@zeit/next-less')
// const withCSS = require('@zeit/next-css')
// const withMDX = require('@next/mdx')({
// 	extension: /\.mdx?$/,
// })
// module.exports = withMDX({
// 	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
// })

module.exports = {
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		}

		return config
	},
	images: {
		domains: ['localhost:3000'],
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
}
