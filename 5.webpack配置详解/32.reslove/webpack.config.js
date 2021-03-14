/*
 * @Author: your name
 * @Date: 2021-03-10 12:15:18
 * @LastEditTime: 2021-03-12 17:20:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\5.webpack配置详解\entry\webpack.config.js
 */

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { resolve } = require("path")

module.exports = {
  entry: './src/js/index.js',
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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development',
  // 解析模块的规则
  resolve: {
    // 配置解析路径别名: 可以简写路径 缺点： 路径没有提示
    alias: {
      $css: resolve(__dirname, 'src/css')
    },
    // 配置省略文件路径后缀名
    extensions: ['.js', '.json', '.css'],
    // 告诉 webpack 解析模块是去找那个目录
    modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
  }
}