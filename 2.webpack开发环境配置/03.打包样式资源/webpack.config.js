/*
 * @Author: your name
 * @Date: 2021-01-17 10:17:58
 * @LastEditTime: 2021-01-17 16:27:17
 * @LastEditors: Please set LastEditors
 * @Description: webpack 配置文件
 * @FilePath: \webpack5\03.打包样式资源\webpack.config.js
 */

/*
  所有的构建工具都是基于node.js运行 模块化采用commomjs
*/

// resolve用来拼接绝对路径
const { resolve } = require('path')

module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出路径
  output: {
    // 输出文件名
    filename: 'main.js',
    // 输出路径
    // __dirname node.js的变量 代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },

  // loader配置
  module: {
    rules: [
      // 详细的loader配置
      // 不同的文件必须配置不同的loader处理
      {
        // 匹配那些文件
        test: /\.css$/,
        // 使用那些Loader
        use: [
          // use数组中loader执行顺序： 从右到左，从下到上 依次执行
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commmonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 需下载less-loader和less
          'less-loader'
        ]
      }
    ]
  },

  // plugins的配置
  plugins: [
    // 详细的plugins的配置
  ],

  // 模式
  mode: 'development',
  // mode: 'production'
}
