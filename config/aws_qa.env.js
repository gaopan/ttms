var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"aws_qa"',
  baseUrl: '"https://qa.dxc-apa.net"',
  raasBaseUrl: '"https://qa.dxc-apa.net"'
})
