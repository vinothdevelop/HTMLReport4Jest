const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const publicUrl = './public';
module.exports = {
    entry: {
        reporter: './index.ts',
        main: './src/index.js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve('public/index.html'),
            filename: './index.html',
            inject: true,
        }),
        new InterpolateHtmlPlugin(HtmlWebPackPlugin, {
            PUBLIC_URL: publicUrl,
        }),
    ],
};
