const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const publicUrl = './public';
const data = require('./src/data/nested.json');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

module.exports = merge.merge(common, {
    output: {
        publicPath: 'public/',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
        open: true,
        writeToDisk: true,
        overlay: {
            errors: true,
        },
        headers: {
            'Cache-Control': 'max-age=0',
            get etag() {
                return Math.random() + '';
            },
        },
    },
    plugins: [
        new InterpolateHtmlPlugin(HtmlWebPackPlugin, {
            PUBLIC_URL: publicUrl,
            TITLE: 'Test Title',
            RESULTDATA: JSON.stringify(data),
        }),
    ],
});
