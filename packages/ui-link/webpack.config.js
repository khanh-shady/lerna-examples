const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'component': './src/link.jsx',
        'storybook': './src/link.stories.jsx'
    },
    externals: [nodeExternals()],
    output: {
        filename: '[name].index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'link',
            type: 'umd'
        },
        libraryTarget: 'umd'
    },
    mode: 'production',
    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
    })],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, options: {
                        esModule: false,
                    },
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: "[contenthash:5]",
                        }
                    }
                }, 'sass-loader'],
                include: path.resolve(__dirname, './src')
            }
        ]
    }
};
