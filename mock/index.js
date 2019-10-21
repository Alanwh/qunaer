const path = require('path');
const express = require('express');
// const chokidar = require('chokidar');
const homeJson = require('./home.json');

const apiRoutes = express.Router();
// const mockDir = path.join(process.cwd(), 'mock')

// 定义路由
apiRoutes.get('/home', (req, res) => res.send(homeJson));
apiRoutes.post('/home', (req, res) => res.send(homeJson));

// 实时监听
// chokidar.watch(mockDir, {
//   ignored: /index/,
//   ignoreInitial: true
// }).on('all', (event, path) => {
//   if (event === 'change' || event === 'add') {
//     try {
//       console.log(`${path} is ${event}`)
//     } catch (error) {
//       console.log("chokidar error is ", error)
//     }
//   }
// })

module.exports = apiRoutes;