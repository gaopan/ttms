var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"tfdemo2"',
  baseUrl: '"https://demo2.dxc-apa.net"',
  raasBaseUrl: '"https://demo2.dxc-apa.net"'
})