const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        'component': './src/index.jsx',
        'storybook': './src/index.stories.jsx'
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
    plugins: [new CleanWebpackPlugin()],
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
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, './src')
            }
        ]
    }
};
