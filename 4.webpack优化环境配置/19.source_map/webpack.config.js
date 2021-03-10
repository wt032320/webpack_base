/*
 * @Author: your name
 * @Date: 2021-01-18 11:13:31
 * @LastEditTime: 2021-01-22 15:52:58
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
  devtool: 'eval-source-map'
}

/*
  source-map: 一种提供源代码到构建后代码映射技术 (如果构建后代码出错了，通过映射可以追踪到源代码错误)

    参数： [inline-|hidden-|eval-][nomources-][cheap-[module-]]source-map

    source-map: 外部
        错误代码的准确信息 和 源代码的错误位置
    inline-source-map: 内联
        1. 只生成一个内联 source-map
        错误代码的准确信息 和 源代码的错误位置
    hidden-source-map: 外部
        错误代码错误原因 但是没有错误位置 不能追踪到源代码错误 只能提示到构建后代码的错误位置
    eval-source-map：  内联
        1. 每一个文件都生成对应的source-map
        错误代码准确信息 和 源代码的错误位置
    nomources-source-map: 外部
        错误代码准确信息，但是没有任何源代码信息
    cheap-source-map: 外部
        错误代码准确信息 和 源代码的错误位置 只能精确到行
    cheap-module-source-map: 外部
        错误代码准确信息 和 源代码的错误位置
        module会将loader的source map 加入

    内联 和 外部的区别： 1. 外部生成了文件， 内联没有 2. 内联构建速度更快

    开发环境： 速度快一点， 调试更友好
      速度快（eval > inline > cheap > ...）
          eval-cheap-source-map
          eval-source-map
      调试友好
          source-map
          cheap-module-source-map
          cheap-source-map 

      --> eval-source-map / eval-cheap-module-source-map
    生产环境： 源代码要不要隐藏  调试要不要更友好
        内联会让代码体积变大 所以在生产环境不用内联
        nosources-source-map 全部隐藏
        hidden-source-map 只隐藏源代码 会提示构建后代码错误信息
      --> source-map / cheap-module-source-map
*/