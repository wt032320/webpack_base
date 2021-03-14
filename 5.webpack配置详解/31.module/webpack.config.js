/*
 * @Author: your name
 * @Date: 2021-03-10 12:15:18
 * @LastEditTime: 2021-03-12 15:09:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\5.webpack配置详解\entry\webpack.config.js
 */

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { resolve } = require("path")

module.exports = {
  entry: './src/index.js',
  output: {
    // 文件名称(指定名称 + 目录)
    filename: '[name].js',
    // 指定输出的文件目录(将来所有资源输出的公共目录)
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // loader的配置
      {
        test: /\.css$/,
        // 多个loader用use
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        // 排除node_modules下的js文件
        exclude: /node_modules/,
        // 只检查 src 下的 js 文件
        include: resolve(__dirname, 'src'),
        // 优先执行
        // enforce: 'pre',
        // 延后执行
        // enforce: 'post',
        enforce: 'pre',
        // 单个loader用loader
        loader: 'eslint-loader'
      },
      {
        // 以下loader只用一个
        oneOf: []
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
}