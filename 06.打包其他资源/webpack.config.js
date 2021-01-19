/*
 * @Author: your name
 * @Date: 2021-01-18 09:41:05
 * @LastEditTime: 2021-01-18 10:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\06.打包其他资源\webpack.config.js
 */

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      // 打包其他资源(除了html/js/css资源以外的资源)
      {
        // 排除cssjs/html资源
        exclude: /\.(html|css|js)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  mode: 'development'
}