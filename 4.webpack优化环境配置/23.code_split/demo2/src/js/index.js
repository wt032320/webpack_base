/*
 * @Author: your name
 * @Date: 2021-01-20 10:29:06
 * @LastEditTime: 2021-03-08 16:14:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\16.生产环境配置\src\js\index.js
 */

import { mul } from './test'

function sum(...args) {
  return args.reduce((p, c) => p + c, 0)
}

console.log(sum(1, 3, 4, 5))