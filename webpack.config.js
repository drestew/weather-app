const path = require('path');
const Dotenv = require('dotenv-webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new Dotenv({
            path: './.env',
            systemvars: true
        })
    ]
}