var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"tfprodeu"',
  baseUrl: '"https://www.eu.dxc-apa.com"',
  raasBaseUrl: '"https://www.eu.dxc-apa.com"'
})
