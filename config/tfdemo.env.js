var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"tfdemo"',
  baseUrl: '"https://www.demo.dxc-apa.net"',
  raasBaseUrl: '"https://www.demo.dxc-apa.net"'
})