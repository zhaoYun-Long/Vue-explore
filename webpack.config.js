const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	entry: {
		app: './src/index.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'vue-explore'
		}),
		new CleanWebpackPlugin(['dist']),
		new VueLoaderPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './dist',
		hot: true
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