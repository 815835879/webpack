const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js",
	output: {
	 path: __dirname + "/build",
	 filename: "bundle.js"
	},

	devServer: {
		contentBase: "./build",
		historyApiFallback: true,
		inline: true,
		hot: true
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
						loader: "babel-loader"
					},
				exclude:/node_modules/
			},
			{
				test:/\.css$/,
				use: [
					{
						loader: "style-loader"
					},{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: '[name]__[local]--[hash:base64:5]'
						}
					},{
						loader: "postcss-loader"
					}
				]
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('copy right by eric'),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
};