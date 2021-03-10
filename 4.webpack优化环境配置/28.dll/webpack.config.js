/*
 * @Author: your name
 * @Date: 2021-01-17 16:34:13
 * @LastEditTime: 2021-03-10 11:15:17
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
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

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
    new HtmlWebpackPlugin({ 
      // 复制 './src/index.html' 文件 并自动引入打包输出的所有资源
      template: './src/index.html' // template为模板地址
    }),
    // 告诉webpack那些库不参与打包 同时使用的名称也得变
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, 'dll/manifest.json')
    }),
    // 将某个文件打包输出去,并在htnl中自动引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, 'dll/jquery.js')
    })
  ],
  mode: 'production'
}