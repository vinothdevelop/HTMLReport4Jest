const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = merge.merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new InlineChunkHtmlPlugin(HtmlWebPackPlugin, [/.*/]),
    ]
});