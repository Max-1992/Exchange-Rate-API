// Container
const container = require('./container')

// Controllers
const restController = container.resolve('ratesController')

// Router module
const router = (server) => {
  server.route({
    method: 'GET',
    path: '/rates',
    handler: restController.getAll.bind(restController)
  })
}

module.exports = router
