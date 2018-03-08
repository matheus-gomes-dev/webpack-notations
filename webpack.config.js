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
				presets: ['es2015'] //define o que o loader aplicará como preset (tradução)
			}
		}]
	}
}