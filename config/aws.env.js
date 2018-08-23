var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"aws"',
  baseUrl: '"https://dev2.dxc-apa.net"',
  raasBaseUrl: '"https://dev2.dxc-apa.net"'
})
