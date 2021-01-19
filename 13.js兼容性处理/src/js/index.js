/*
 * @Author: your name
 * @Date: 2021-01-19 16:37:09
 * @LastEditTime: 2021-01-19 18:09:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\12.js语法检查\src\js\index.js
 */
// import '@babel/polyfill'

const add = (x, y) => {
  return x + y;
}

console.log(add(1, 3))

const promise = new Promise(reslove => {
  setTimeout(() => {
    console.log('end---')
    reslove()
  },3000)
})

console.log(promise)
