var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"ITG1"',
  baseUrl: '"http://ec4t01933.itcs.entsvcs.net"',
  raasBaseUrl: '"http://ec4t01944.itcs.entsvcs.net:8080"'
})
