const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
    entry: './js/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },

    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({ filename: 'name.[contenthash].css' }),
        new BundleAnalyzerPlugin()
    ],

    module: {
        rules: [
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
            { test: /\.(js)$/, loader: 'babel-loader' },
            { test: /\.(png|jpe?g|gif|mp3)$/i, loader: 'file-loader', options: { name: '[path][name].[ext]' } }
        ],

    },

    resolve: {
        extensions: ['', '.js', '.css', 'mp3']
    },



    devServer: {
        port: 5656
    }
}