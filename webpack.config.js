var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/lib',
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        react: 'commonjs react'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        })
    ]
};