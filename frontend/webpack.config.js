const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, 'src', 'index.js'),
        // 'webpack-dev-server/client?http://127.0.0.0:3000/',
    ],
    output: {
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx'],
                },
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
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'],
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        // contentBase: path.join(__dirname, 'dist'),
        // allowedHosts: 'all',
        // compress: true,
        // port: 3001,
        port: 3000,
        // host: '0.0.0.0',
        // watchContentBase: true,
        hot: true,
        // inline: false,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new ESLintPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
};
