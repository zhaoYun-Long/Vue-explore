const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: {
		app: './main.js'
		// print: './src/print.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'vue-explore'
		}),
		new CleanWebpackPlugin(['dist']),
		new VueLoaderPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	}
}