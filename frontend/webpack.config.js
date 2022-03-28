const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
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
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        host: '0.0.0.0',
        watchContentBase: true,
        hot: true,
    },
    plugins: [
        new ESLintPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
};
