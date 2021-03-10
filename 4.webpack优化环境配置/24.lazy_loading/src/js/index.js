/*
 * @Author: your name
 * @Date: 2021-01-20 10:29:06
 * @LastEditTime: 2021-03-09 14:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\16.生产环境配置\src\js\index.js
 */

console.log('index.js被加载了----')

// import { mul } from './test'

document.getElementById('btn').onclick = () => {
  // 懒加载----  当文件需要时才加载
  // 预加载----  prefetch: 会在使用之前，提前加载js文件   兼容性较差
  // 正常加载可以认为是并行加载（同一时间加载多个文件） 预加载：等其他资源加载完毕 浏览器空闲了 再偷偷加载
  import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then(({mul}) => {
    console.log(mul(3, 4))
  })
}