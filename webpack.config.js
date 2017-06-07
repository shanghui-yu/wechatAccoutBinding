var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
  	'wechat.accout.binding': path.resolve('src', 'index.js')
  },
  output: {
    filename: '[name].[hash:7].min.js',
    path: path.resolve(__dirname, 'dist')
  }
}