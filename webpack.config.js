const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, '/src/index.js'),

	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/client/dist')
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
          loader: 'babel-loader',
          options: {
	          presets: ['@babel/preset-env', '@babel/preset-react']
          },
        }
			}
		]
	}
};
