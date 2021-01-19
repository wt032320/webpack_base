/*
 * @Author: your name
 * @Date: 2021-01-17 09:38:17
 * @LastEditTime: 2021-01-17 10:12:14
 * @LastEditors: Please set LastEditors
 * @Description: webpack入口起点文件
 * @FilePath: \webpack5\02.webpack体验\src\index.js
 */

/*
  1.运行指令：
      开发环境：webpack --entry ./src/index.js -o ./build --mode=development
          webpack会以./src/index.js为入口文件开始包 打包后输出到./build/built.js 打包环境是开发环境
      生产环境：webpack --entry ./src/index.js -o ./build --mode=production

  2.结论：
      生产环境比开发环境多一个压缩js代码
  
*/
import user from './user.json'


function add (x, y) {
  return x + y
}

console.log(add(1, 4))
console.log(user)