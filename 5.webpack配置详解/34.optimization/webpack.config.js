/*
 * @Author: your name
 * @Date: 2021-03-10 12:15:18
 * @LastEditTime: 2021-03-14 15:03:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\5.webpack配置详解\entry\webpack.config.js
 */

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { resolve } = require("path")
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    // 文件名称(指定名称 + 目录)
    filename: '[name].js',
    // 指定输出的文件目录(将来所有资源输出的公共目录)
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // loader的配置
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'production',
  // 解析模块的规则
  resolve: {
    // 配置解析路径别名: 可以简写路径 缺点： 路径没有提示
    alias: {
      $css: resolve(__dirname, 'src/css')
    },
    // 配置省略文件路径后缀名
    extensions: ['.js', '.json', '.css'],
    // 告诉 webpack 解析模块是去找那个目录
    modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',

      // 下边都是默认值,
      minSize: '30 * 1024', // 分割的chunk最小为30kb
      maxSize: 0, // 最大没有限制
      minChunks: 1, // 要提取的chunks最少被引用一次
      maxAsyncRequests: 5, // 按需加载时并行加载的文件最大数量
      maxInitialRequests: 3, // 入口js文件最大并行请求数量
      automaticNameDelimiter: '~', // 名称连接符
      name: true, // 可以使用命名规则
      cacheGrops: { // 分割chunk的组
      // node_modules文件会被打包到 vendors 组的chunk中 --> vendors~xxx.js
      // 满足上边的公共规则
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          // 打包的优先级
          priority: -10
        },
        default: {
          // 要提取的chunk最少被引用两次
          minChunks: 2,
          // 优先级
          priority: -20,
          // 如果当前要打包的模块 和之前已经被提取的模块是同一个，就会复用而不是重新打包模块
          reuseExistingChunk: true
        }
      }
    },
    // 将当前模块的记录其他模块的hash单独打包为一个文件 runtime
    // 解决：修改a文件导致b文件的contenthash变化
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    minimizer: {
      // 配置生产环境的压缩方案： js和css
      new TerserWebpackPlugin({
        cache: true, // 开启缓存
        parallel: true, // 开启多进程打包
        sourceMap: true // 启动source-map
      })
    }
  }
}