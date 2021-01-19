/*
 * @Author: your name
 * @Date: 2021-01-18 11:13:31
 * @LastEditTime: 2021-01-18 12:18:27
 * @LastEditors: Please set LastEditors
 * @Description: 开发环境配置:能让代码运行
 * @FilePath: \webpack5\08.开发环境配置\webpack.config.js
 */

const { resolve } = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, './src/index'),
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        // 处理css资源
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 处理less资源
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          esModule: false,
          // 打包后输出到 build/imgs
          outputPath: 'imgs'
        }
      },
      {
        // 处理html中的img资源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\.(html|css|less|js|png|jpg|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          // 打包后输出到 build/media
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  }
}