var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // 调试必须
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    fix: true
                }
            },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true,
            //                 localIdentName: '[local]___[hash:base64:5]',
            //                 importLoaders: 0,
            //                 modules: true
            //             }
            //         }
            //     ],
            //     exclude: /node_modules/
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // css不能走less-loader
            {
                test: /\.(less)?$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ],
                exclude: /(node_modules|bower_components)/

            },
            // {
            // be careful the impression problem
            //     test: /\.(png|gif|jpg|jpeg|bmp)$/i,
            //     loader: 'url-loader?limit=5000'
            // },  // 限制大小5kb
            // {
            //     test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
            //     loader: 'url-loader?limit=5000'
            // }, // 限制大小小于5k
            {
                test: /\.(jpg|jpeg|gif|bmp|png|webp)?$/i,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|svg|ttf|eot)?$/i,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
    // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        // new OpenBrowserPlugin({
        //     url: 'http://localhost:8080'
        // }),
        // TODO：想要启动调试，这句必不可少,和devtool不能共用！！！！！
        // new webpack.SourceMapDevToolPlugin(),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false')),
            __TEST__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'test') || 'false'))
        })
    ],
    // 使用这个一定要停止使用其他代理，也就是翻墙
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        contentBase: './build',
        inline: true, // 实时刷新
        hot: true // 使用热加载插件 HotModuleReplacementPlugin
    }
};
