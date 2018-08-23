var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"qa"',
  // baseUrl: '"http://ec4t01164.itcs.entsvcs.net"',
  // raasBaseUrl: '"http://ec4t01945.itcs.entsvcs.net:8080"'
  baseUrl: '"https://qa.dxcleap.com"',
  raasBaseUrl: '"https://qa.dxcleap.com"'
})
