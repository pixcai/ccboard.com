const app = require('express')()
const nunjucks = require('nunjucks')
const routes = require('../routes')
const middlewares = require('./middlewares')
const runtime = require('../config/runtime')

const port = runtime.port
const hostName = runtime.hostName

// Use middlewares
middlewares.forEach(middleware => app.use(middleware))
// Use template engine
nunjucks.configure(runtime.viewRoot, {
  autoescape: true, 
  express: app
})
app.set('view engine', 'html')
// Initialize routes
routes.forEach(route => app[route.method || 'get'](route.path, route.handler))

module.exports = {
  start: () => app.listen(port, () => {
    console.log('Server listening on http://localhost:' + port + ' ...')
  })
}
