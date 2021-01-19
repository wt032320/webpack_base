/*
 * @Author: your name
 * @Date: 2021-01-19 16:34:22
 * @LastEditTime: 2021-01-19 18:15:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\12.js语法检查\webpack.config.js
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/main.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // 生产环境下会自动压缩js代码
  mode: 'production'
}