const routes = []

routes.push({
  path: '/', 
  handler: (req, res) => res.render('index')
})

module.exports = routes
