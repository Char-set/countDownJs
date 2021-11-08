const TerserPlugin = require('terser-webpack-plugin');
const path = require('path')
module.exports = {
	mode: 'none',
	entry: {
		'count-down':'./src/index.js',
		'count-down.min':'./src/index.js',
	},
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "[name].js",
		library:'countDownJs',
		libraryTarget:'umd',
		libraryExport: 'default',
		globalObject: 'this',
	},
	optimization: {
		minimize: true,
		minimizer:[
			new TerserPlugin({
				include: /\.min\.js$/,
			})
		]
	}
};