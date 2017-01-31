var path = require('path');
var webpack = require('webpack');

module.exports = {
	/* main entry point for the app */
	entry: './app.js',
	/* bundle created by webpack */
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build',
		publicPath: '/build/'
	},
	devtool: 'source-map',
	debug: true,
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			'webworkify': 'webworkify-webpack'
		}
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, './node_modules/mapbox-gl-shaders/index.js'),
				loader: 'transform/cacheable?brfs'
			},
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /(\.js|\.jsx)$/,
				loader: 'babel',
				include: [path.resolve(__dirname, './node_modules/react-icons/fa'), path.resolve(__dirname, './node_modules/react-icons/go')],
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss/,
				loader: 'style!css!sass'
			}
		],
		postLoaders: [{
			include: [path.resolve(__dirname, './node_modules\/mapbox-gl-shaders/')],
			loader: 'transform',
			query: 'brfs'
		}]
	}
};