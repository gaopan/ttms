var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"tfstg"',
  baseUrl: '"https://stg1.dxc-apa.net"',
  raasBaseUrl: '"https://stg1.dxc-apa.net"'
})
