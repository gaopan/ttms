var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"tfprodeu2"',
  baseUrl: '"https://eu2.dxc-apa.com"',
  raasBaseUrl: '"https://eu2.dxc-apa.com"'
})