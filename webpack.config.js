var path = require('path')
var webpack = require('webpack')
var version = process.env['npm_package_version']
module.exports = {
  entry: {
  	'wechat.accout.binding': path.resolve('src', 'index.js')
  },
  output: {
    filename: '[name].'+ version +'.min.js',
    path: path.resolve(__dirname, 'dist')
  }
}