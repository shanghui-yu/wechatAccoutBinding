var path = require('path')
var webpack = require('webpack')
var version = process.env['npm_package_version']
module.exports = {
  entry: {
    'wechat.accout.binding': path.resolve('src/2.0.4-yushanghui', 'index.js')
  },
  output: {
    filename: '[name].' + version + '.min.js',
    //filename: '[name].test.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
}