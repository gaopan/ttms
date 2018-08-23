var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"tfprodap"',
  baseUrl: '"https://www.ap.dxc-apa.com"',
  raasBaseUrl: '"https://www.ap.dxc-apa.com"'
})