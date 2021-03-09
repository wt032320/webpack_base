/*
 * @Author: your name
 * @Date: 2021-01-20 10:27:55
 * @LastEditTime: 2021-03-09 13:54:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\16.生产环境配置\webpack.config.js
 */


const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 单入口
  entry: './src/js/index.js',
  output: {
    // [name]  取文件名
    filename: 'js/[name].[contenthash:10].js',
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
  /*
    1.可以将node_modules中代码单独打包成一个chunk最终输出
    2.自动分析多入口chunk中，有没有公共的文件，如果有会打包成单独的一个chunk
  */
  optimization: {
    // optimization: 优化,最佳化
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production'
}