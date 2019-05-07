'use strict'

const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const webpack = require('webpack');

module.exports = {

    mode: 'development',
    entry: './vue/index.js',
    output:{
    path: path.join(__dirname,'../Server/public/javascripts'),
    filename:'core.js',
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                },
            },
            {
                test:/\.vue$/,
                use: 'vue-loader'
            },
            {
                test:/\.css$/,
                use:[{
                    loader: 'style-loader',
                },{
                    loader: 'css-loader', options:{
                        sourceMap: true,
                    },
                }],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
}