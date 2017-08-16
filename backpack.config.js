const BabiliPlugin = require('babili-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
	webpack: (config, options, webpack) => {
		const pligins = [
			new ProgressBarPlugin(),
			new BabiliPlugin(),
			new webpack.optimize.OccurrenceOrderPlugin()
		]
		config.plugins.push(...pligins)
		return config
	}
}
