/*
 * @Author: your name
 * @Date: 2021-01-17 16:34:13
 * @LastEditTime: 2021-01-17 17:09:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\04.打包html资源\webpack.config.js
 */
/*
  1.loader: 1.下载 2.使用 (配置loader)
  plugins: 1.下载 2.引用 3.使用
*/
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过npm安装
const webpack = require('webpack') // 访问内置的插件

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader配置
    ]
  },
  plugins: [
    // plugins配置
    // html-webpack-plugin
    // 功能： 默认会创建一个空的HTML 自动引入打包输出的所有资源
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ 
      // 复制 './src/index.html' 文件 并自动引入打包输出的所有资源
      template: './src/index.html' // template为模板地址
    })
  ],
  mode: 'development'
}