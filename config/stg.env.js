var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"stg"',
  baseUrl: '"https://stg.dxc-apa.net"',
  raasBaseUrl: '"https://stg.dxc-apa.net"'
})
