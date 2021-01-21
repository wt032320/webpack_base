/*
 * @Author: your name
 * @Date: 2021-01-18 11:14:46
 * @LastEditTime: 2021-01-21 10:20:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\08.开发环境配置\src\index.js
 */
import '../iconfont/iconfont.css'
import '../css/index.less'
import print from './print'

console.log('index.js被重新加载了')

// 添加的支持HMR代码
if (module.hot) {
  // 一旦 module.hot 为true 说明开启了HMR功能 --> 让HMR功能代码生效
  module.hot.accept('./print.js', function () {
    // 方法会监听 print.js 文件的变化 一旦发生变化 其他模块不会重新打包构建
    // 会执行后面的回调函数
    print()
  })
}