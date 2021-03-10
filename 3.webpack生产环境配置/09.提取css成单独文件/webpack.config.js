/*
 * @Author: your name
 * @Date: 2021-01-18 16:21:51
 * @LastEditTime: 2021-01-19 16:31:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\09.提取css成单独文件\webpack.config.js
 */

const { resolve } = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build') 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签,将样式放入
          //'style-loader', 
          // 这个loader取代style-loader。 作用：提取js中的css成单独文件
          {
            loader: MiniCssExtractPlugin.loader,
            // 解决在css中有url()时打包后路径出错的问题
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件重命名
      filename: 'css/built.css'
    })
  ],
  mode: 'development'
}