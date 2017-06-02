const bodyParser = require('body-parser')
const serveStatic = require('serve-static')
const runtime = require('../config/runtime')

module.exports = [
  serveStatic(runtime.staticRoot), 
  bodyParser.urlencoded({
    extended: false
  }), 
  bodyParser.json()
]
