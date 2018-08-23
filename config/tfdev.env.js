var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"tfdev"',
  baseUrl: '"https://dev.dxc-apa.net"',
  raasBaseUrl: '"https://dev.dxc-apa.net"'
})
