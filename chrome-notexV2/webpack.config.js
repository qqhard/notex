var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: {
        background: './background/index.js',
        popup: './popup/index.js',
        page: './page/index.js'
    },
    output: {
        path: __dirname + '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.html']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        },{
            test: /\.css$/,
            loader: 'style!css'
        },{
            test: /\.(jpg|png)$/,
            loader: "url?limit=8192",
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
    ]
};
