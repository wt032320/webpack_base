/*
 * @Author: your name
 * @Date: 2021-01-20 10:27:55
 * @LastEditTime: 2021-03-08 17:30:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\16.生产环境配置\webpack.config.js
 */


const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/main.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩html
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],