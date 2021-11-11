const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
    entry: './js.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
            { test: /\.(js)$/, loader: 'babel-loader' },
            { test: /\.(mp3)$/i, loader: 'file-loader', options: { name: '[path][name].[ext]' } },
            { test: /\.(mp4)$/i, loader: 'url-loader', options: { name: '[path][name].[ext]', limit: 10000 } },
            {
                test: /\.(png|jpe?g|gif)$/i, type: "asset"
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({ filename: 'name.[contenthash].css' }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'images'),
                    to: path.resolve(__dirname, 'dist', 'images')
                },
                {
                    from: path.resolve(__dirname, 'audio'),
                    to: path.resolve(__dirname, 'dist', 'audio')
                },
                {
                    from: path.resolve(__dirname, 'video'),
                    to: path.resolve(__dirname, 'dist', 'video')
                }
            ]
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["mozjpeg", { progressive: true, quality: 70 }],
                    ["pngquant", { optimizationLevel: 5 }],
                ]
            }
        })
    ],



    devServer: {
        port: 5656,

    }
}