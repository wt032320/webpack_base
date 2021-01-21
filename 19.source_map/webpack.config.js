/*
 * @Author: your name
 * @Date: 2021-01-18 11:13:31
 * @LastEditTime: 2021-01-21 16:47:26
 * @LastEditors: Please set LastEditors
 * @Description: 开发环境配置:能让代码运行
 * @FilePath: \webpack5\08.开发环境配置\webpack.config.js
 */

const { resolve } = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: ['./src/js/index.js', './src/index.html'],
  //entry: resolve(__dirname, './src/js/index.js'),
  output: {
    filename: 'js/main.js',
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
    }),
    // 模块热替换插件
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置 需要重启webpack服务
    hot: true
  },
  devtool: 'source-map'
}

/*
  source-map: 一种提供源代码到构建后代码映射技术 (如果构建后代码出错了，通过映射可以追踪到源代码错误)

    参数： [inline-|hidden-|eval-][nomources-][cheap-[module-]]source-map

    inline-source-map
    hidden-source-map
    eval-source-map
*/