var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"tfprodus"',
  baseUrl: '"https://www.dxc-apa.com"',
  raasBaseUrl: '"https://www.dxc-apa.com"'
})
