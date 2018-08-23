var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"demo"',
  baseUrl: '"https://demo.dxc-apa.net"'
})
