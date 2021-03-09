/*
 * @Author: your name
 * @Date: 2021-01-20 10:29:06
 * @LastEditTime: 2021-03-09 15:17:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\16.生产环境配置\src\js\index.js
 */

import '../css/index.css'

function sum(...args) {
  return args.reduce((p, c) => p + c, 0)
}

console.log(sum(1, 3, 4, 5))

/*
  1.eslint不认识 window, navigator全局变量
    解决: 需要修改package.json中 eslintConfig配置
      "env": {
        "browser": true
      }
  
  2.serviceWorker代码必须运行在服务器上
      --> nodejs
      --> npm i serve -g
        serve -s build 启动服务器,将build目录西安所有资源作为静态资源暴露出去
*/

// 注册serviceWorker
// 处理兼容性问题
if ( 'serviceWorker' in navigator ) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => {
        console.log('serviceWorker注册成功了---')
      })
      .catch(() => {
        console.log('serviceWorker注册失败了---')
      })
  })
}