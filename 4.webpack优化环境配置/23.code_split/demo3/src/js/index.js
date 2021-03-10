/*
 * @Author: your name
 * @Date: 2021-01-20 10:29:06
 * @LastEditTime: 2021-03-09 14:08:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\16.生产环境配置\src\js\index.js
 */

/*
  通过js代码 ，让某个文件被打包成一个chunk
  import动态导入语法： 能将某个文件单独打包
*/
import(/* webpackChunkName: 'test' */'./test')
  .then(() => {
    // 加载成功
    console.log('success')
    console.log(mul(1, 4))
  })
  .catch(() => {
    // 加载失败
    console.log('defeat')
  })
function sum(...args) {
  return args.reduce((p, c) => p + c, 0)
}

console.log(sum(1, 3, 4, 5))
