/*
 * @Author: your name
 * @Date: 2021-03-08 12:10:47
 * @LastEditTime: 2021-03-08 12:57:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\21.缓存\server.js
 */
// 服务器代码

const express = require('express')

const app = express()

app.use(express.static('build', {maxAge: 1000 * 3600}))

app.listen(3000)