/*
 * @Author: your name
 * @Date: 2021-01-19 16:34:22
 * @LastEditTime: 2021-01-19 17:31:54
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
        语法检查： eslint-loader eslint
          注意： 只检查自己写的源代码 第三方库是不用检查的
          设置检查规则：package.json中的eslintConfig中设置
            "eslintConfig": {
              "extends": "airbnb-base"
            },
          三个依赖：eslint-config-airbnb-base  eslint-plugin-impoort eslint
      // 
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复eslint的错误
          fix: true
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