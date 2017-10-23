const path = require('path');
const webpack = require('webpack');

const config = {
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public'),
	},

	devtool: 'source-map',
	devServer: {
		publicPath: '/public/',
		historyApiFallback: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true,
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
			},
			// JSX
			{
				test: /\.jsx$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/,
			},
		],
	},
};

module.exports = config;
