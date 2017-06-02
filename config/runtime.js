const resolve = require('path').resolve

module.exports = {
  port: 4000, 
  viewRoot: resolve(__dirname, '../views'), 
  staticRoot: resolve(__dirname, '../public')
}
