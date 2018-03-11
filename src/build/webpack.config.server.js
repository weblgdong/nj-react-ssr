/******************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Sun Mar 04 2018
 *  File : webpack.config.server.js
 *******************************************/
const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = webpackMerge(baseConfig, {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../app/server.entry.js')
  },
  output: {
    filename: 'server-entry.js', // 没有浏览器缓存
    path: path.join(__dirname, '../../dist'),
    publicPath: '/public', // 静态资源路径，区分api，等
    libraryTarget: 'commonjs2' // 打包规范
  }
})
