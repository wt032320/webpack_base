/*
 * @Author: your name
 * @Date: 2021-01-17 17:11:51
 * @LastEditTime: 2021-01-18 09:33:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\05.打包图片资源\webpack.config.js
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
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      /*
        url-loader封装了file-loader。url-loader不依赖于file-loader，因为url-loader内置了file-loaderurl-loader工作分两种情况：
            1.文件大小小于limit参数，url-loader将会把文件转为DataURL；
            2.文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader。
      */
      {
        // 处理图片资源
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb 就会被base64处理
          // 优点： 减少请求数量（减轻服务器压力）
          // 缺点： 图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // 问题： 因为url-loader默认使用es6模块化解析，而html-loader引入图片是commomjs
          // 所以解析时会报错
          // 解决： 关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          // 给图片重命名 [ext]取文件原来的扩展名
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        // 处理html文件的img图片(负责引入img, 从而能被url-loader进行处理)
        loader: 'html-loader'
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