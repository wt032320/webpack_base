/*
 * @Author: your name
 * @Date: 2021-03-10 12:15:18
 * @LastEditTime: 2021-03-11 18:46:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\5.webpack配置详解\entry\webpack.config.js
 */

/*
  entry: 入口起点
    1. string  --> './src/index.js'
      单入口
      打包形成一个chunk 输出一个bundle文件
      此时chunk的名称默认是 main
    2. arrray  --> ['./src/index.js', './src/add.js']
      多入口
      所有入口文件最终只会形成一个chunk 输出去只有一个bundle文件
      --> 只有在HMR功能中让html热更新生效
    3. abject
      多入口
      有几个入口文件就形成几个chunk, 输出几个bundle
      此时chunk名称是 key

      --> 特殊用法
          {
            // 所有入口文件最终会形成一个chunk,输出出去只有一个bundle文件
            index: ['./src/index.js', './src/count.js'],
            // 形成一个chunk, 输出一个bundle
            add: './src/add.js'
          },
*/
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { resolve } = require("path")

module.exports = {
  // entry: './src/index.js',
  // entry: ['./src/index.js', './src/add.js'],
  entry: {
    index: './src/index.js',
    add: './src/add.js'
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
}