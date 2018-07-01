const path = require('path'),
    entryFile = path.resolve(__dirname, 'src', 'client', 'app.js'),
    outputDir = path.resolve(__dirname, 'public')

module.exports = {
    entry: [entryFile, 'babel-polyfill'],
    output: {
        filename: 'bundle.js',
        path: outputDir
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }
                ]
            }
        ]
    }
}
