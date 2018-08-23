var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseUrl: '"https://qa.dxc-apa.net"',
  raasBaseUrl: '"https://qa.dxc-apa.net"',

  // baseUrl: '"https://dev.dxc-apa.net"',
  // raasBaseUrl: '"https://dev.dxc-apa.net"',

  // baseUrl: '"https://dev2.dxc-apa.net"',
  // raasBaseUrl: '"https://dev2.dxc-apa.net"',

  // baseUrl: '"https://stg.dxc-apa.net"',
  // raasBaseUrl: '"https://stg.dxc-apa.net"',

  // baseUrl: '"https://demo.dxc-apa.net"',
  // raasBaseUrl: '"https://demo.dxc-apa.net"'
  
})

