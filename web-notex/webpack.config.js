var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const dotenv = require('dotenv');
const envVariables = dotenv.config();

const defines = Object.keys(envVariables)
    .reduce((memo, key) => {
        const val = JSON.stringify(envVariables[key]);
        memo[`__${key.toUpperCase()}__`] = val;
        return memo;
    }, {
    });



module.exports = {
    context: __dirname + "/src",
    entry: {
        index: './index.js'
    },
    output: {
        path: __dirname + '/build',
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
                presets: ['react', 'es2015']
            }
        },{
            test: /\.scss$/,
            loader: 'style!css!autoprefixer!sass'
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ,{
            test: /\.(jpg|png)$/,
            loader: "url?limit=8192",
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject:'body',
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        }),
        new webpack.DefinePlugin(defines),
        new ExtractTextPlugin("style.bundle.css")
    ]
};
