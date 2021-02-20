const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const publicUrl = './public';
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    output: {
        path: path.resolve(process.cwd(), 'dist'),
    },
    module: {
        rules: [
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
        ],
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
        new ESLintPlugin({}),
    ],
};
