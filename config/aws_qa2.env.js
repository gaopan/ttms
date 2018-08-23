var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"aws_qa2"',
  baseUrl: '"https://qa2.dxc-apa.net"',
  raasBaseUrl: '"https://qa2.dxc-apa.net"'
})
