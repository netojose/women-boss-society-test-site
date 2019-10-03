const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'cheap-module-eavl-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: false
        })
    ]
}
