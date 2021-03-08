/*
 * @Author: your name
 * @Date: 2021-01-20 10:29:06
 * @LastEditTime: 2021-03-08 11:32:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\16.生产环境配置\src\js\index.js
 */

import '../css/index.css'

function sum(...args) {
  return args.reduce((p, c) => p + c, 0)
}

console.log(sum(1, 3, 4, 5))