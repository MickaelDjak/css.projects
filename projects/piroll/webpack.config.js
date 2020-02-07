const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: {
        "index": __dirname + "/source/pages/index/index.js",
        "home": __dirname + "/source/pages/home/home.js",
        "project": __dirname + "/source/pages/project/project.js",
        "contact": __dirname + "/source/pages/contact/contact.js",
        "about": __dirname + "/source/pages/about/about.js",
    },
    output: {
        hotUpdateMainFilename: '[hash].hot-update.js',
        filename: "js/[name].js",
        path: __dirname + "/public/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                minimize: true,
                            }
                        },
                        {
                            loader: "resolve-url-loader",
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    publicPath: "../",
                }),

            },
            {
                test: /\.(png|jpg|jpgg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: __dirname + '/source/fonts/Icon_font_7_stroke/pe-icon-7-stroke/fonts',
                to: __dirname + '/public/fonts'
            },
            {
                from: __dirname + '/source/fonts/Icon_font_7_stroke/pe-icon-7-stroke/css',
                to: __dirname + '/public/css'
            },
            {
                from: __dirname + '/source/video',
                to: __dirname + '/public/video'
            }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: __dirname + '/source/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            chunks: ['home'],
            template: __dirname + '/source/pages/home/home.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'project.html',
            chunks: ['project'],
            template: __dirname + '/source/pages/project/project.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            chunks: ['contact'],
            template: __dirname + '/source/pages/contact/contact.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['about'],
            template: __dirname + '/source/pages/about/about.pug'
        }),
        new ExtractTextPlugin({
            filename: './css/[name].css'
        }),
    ]
};