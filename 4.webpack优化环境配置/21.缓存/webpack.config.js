/*
 * @Author: your name
 * @Date: 2021-01-20 10:27:55
 * @LastEditTime: 2021-03-08 15:53:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\16.生产环境配置\webpack.config.js
 */

// 定义nodejs环境变量：决定使用browserslist的那个环境
process.env.NODE_ENV = 'production'

const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/*
  缓存： 
    babel缓存
      cacheDirectory: true
    文件资源缓存
      hash: 每次webpack构建时会生成一个唯一的hash值
        问题： 因为js和css同时使用一个hash值
          如果重新打包 会导致所有缓存失效。(可能我却只改动一个文件)
      chunkhash: 根据chunk生成的hash值 如果打包来源于同一个chunk,那么hash值就一样
        问题： js 和 css 的hash值还是一样的
          因为css是在js中被加入的，所以属于同一个chunk(代码块)
      contenthash: 根据文件的内容生成hash值 不同文件hash值不同 
*/
// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader, 
  'css-loader',
  {
    // css兼容性处理 还需要在package.json中定义browserslist
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

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/main.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // js语法检查
      {
        // test: /\.js$/,
        // exclude: /node_modules/,
        // 优先执行
        // enforce: 'pre'
        // loader: 'eslint-loader',
        // options: {
        //   fix: true
        // }
      },
      {
        // 以下loader只会匹配一个
        // 注意： 不能有两个配置处理同一种类型的文件
        oneOf: [
          {
            // 处理less文件
            test: /\.less$/,
            use: [
              ...commonCssLoader,
              'less-loader'
            ]
          },
          {
            // css文件
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          /*
            正常来讲，一个文件只能被一个loader处理。
            当一个文件要被多个loader处理，那么一定要指定loader执行顺序：
                先执行eslint 再执行babel
          */
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ],
                plugins: ['@babel/plugin-transform-runtime'],
                cacheDirectory: true
              }
            }
            // loader: 'babel-loader',
            // options: {
            //   // 预设： 指示babel做怎样的兼容性处理
            //   presets: [
            //     [
            //       '@babel/preset-env',
            //       {
            //         // 按需加载
            //         useBuiltIns: 'usage',
            //         // 指定core-js版本
            //         corejs: {
            //           vresion: '3.0.0'
            //         },
            //         // 指定兼容性做到那个版本浏览器
            //         targets: {
            //           chrome: '60',
            //           firefox: '50',
            //           ie: '9'
            //         }
            //       }
            //     ]
            //   ],
            //   // 开启babel缓存
            //   // 第二次构建时，会读取之前的缓存 速度会更快
            //   cacheDirectory: true
            // }
          },
          {
            // 处理图片
            test: /\.(jpg|png|svg|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false
            }
          },
          {
            // 处理html中的图片
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            // 处理其他资源
            exclude: /.(html|css|less|js|png|jpg|svg|gif)$/,
            loader: 'file-loader',
            options: {
              outputPath: 'media'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.[contenthash:10].css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩html
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: 'production',
  devtool: 'source-map'
}