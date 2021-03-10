/*
 * @Author: your name
 * @Date: 2021-01-18 16:21:51
 * @LastEditTime: 2021-01-19 16:32:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\09.提取css成单独文件\webpack.config.js
 */

// 设置node环境变量
//process.env.NODE_ENV = 'development'

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
          MiniCssExtractPlugin.loader,
          'css-loader',
          // css兼容性处理： postcss --> postcss-loader  postcss-preset-env
          // 帮postcss找到package.json中的browserslist里面的配置，通过配置加载指定的css兼容性样式
          /*
              "browserslist": {
                // 开发环境 --> 设置node环境变量：
                "development": [
                  "last 1 chrome version",
                  "last 1 firefox version",
                  "last 1 safari version"
                ],
                // 生产环境：默认是看生产环境
                "production": [
                  ">0.02%",
                  "not dead",
                  "not op_mini all"
                ]
              },
          */
          // 使用loader的默认配置
          // 'postcss-loader',

          // 修改loader的配置
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ]
              }
            }
          }
        ]
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