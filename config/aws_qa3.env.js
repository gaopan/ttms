var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"aws_qa3"',
  baseUrl: '"https://qa3.dxc-apa.net"',
  raasBaseUrl: '"https://qa3.dxc-apa.net"'
})
