const webpack = require('webpack');

module.exports = {
	entry: './ex/index.js',
	output: {
		path: __dirname + '/public',
		filename: './bundle.js'
	},
	devServer:{
		port: 8080,
		contentBase: './public'
	},
	module: {
		loaders: [{
			teste: /.js?$/, //irá atuar sobre os arquivos javascript
			loader: 'babel-loader',
			exclude: /node_modules/, //não processará arquivos dentro dessa pasta
			query: {
				presets: ['es2015', 'react'], //define o que o loader aplicará como preset (tradução). Presets do babel devem ser instalados via npm
				plugins: ['transform-object-rest-spread']
			}
		}]
	}
}