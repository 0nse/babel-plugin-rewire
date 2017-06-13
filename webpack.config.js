const webpack = require('webpack');
const path = require('path');

module.exports = () => ({
    entry: null,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './www-tests/'),
                ],
                exclude: /\/node_modules\//,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // prevent moment-js from loading locales
    ],
    stats: {
        reasons: true,
        colors: true,
        chunks: true,
        chunkOrigins: true,
        chunkModules: true,
        entrypoints: true,
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: 'chunk[id].bundle.js',
        sourceMapFilename: '[name].map',
        path: path.resolve(__dirname, 'www-build/'),
        publicPath: 'assets/js/',
    },
});

