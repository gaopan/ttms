var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"tfprodus2"',
  baseUrl: '"https://www2.dxc-apa.com"',
  raasBaseUrl: '"https://www2.dxc-apa.com"'
})