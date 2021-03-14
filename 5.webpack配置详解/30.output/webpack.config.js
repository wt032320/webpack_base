/*
 * @Author: your name
 * @Date: 2021-03-10 12:15:18
 * @LastEditTime: 2021-03-12 14:56:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\5.webpack配置详解\entry\webpack.config.js
 */

/*
  library 一般结合dll使用
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
    // 所有资源引入公共路径的前缀 --> 路径的前面
    // 一般用于生产环境
    publicPath: '/',
    chunkFilename: 'js/[name]_chunk.js', // 非入口chunk的名称
    library: '[name]', // 整个库向外暴露的变量名
    libraryTarget: 'window', // 变量名添加到那个属性上(brower)
    // libraryTarget: 'global' // 变量名添加到那个属性上(node)
    // libraryTarget: 'commonjs'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
}