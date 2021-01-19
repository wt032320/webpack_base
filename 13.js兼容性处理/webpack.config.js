/*
 * @Author: your name
 * @Date: 2021-01-19 16:34:22
 * @LastEditTime: 2021-01-19 18:12:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\12.js语法检查\webpack.config.js
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/main.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      /*
        js兼容性处理： babel-loader @babel/core  
          1.基本的js兼容性处理 --> @babel/preset-env
            问题： 只能转换基本语法，如Promise不能转换
          2. 全部js兼容性处理 --> @babel/polyfill
            问题： 我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大
          3.需要做兼容性处理的就做：按需加载 --> core-js
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设： 指示babel做怎样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定core-js版本
                corejs: {
                  vresion: 3
                },
                // 指定兼容性做到那个版本浏览器
                targets: {
                  chrome: '60',
                  firefox: '50',
                  ie: '9'
                }
              }
            ]
          ]
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