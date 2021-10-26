const Hapi = require('@hapi/hapi')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger')
const router = require('./router')

const swaggerOptions = {
  info: {
    title: 'Exchange Rate API Documentation',
    version: '1.0.0'
  }
}

// Configurando servidor.
const server = Hapi.server({
  port: 3000
  // host: 'localhost'
})

// Inicializando enrutador.
router(server)

const init = async () => {
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ])

  await server.start()
  console.info('Server running on ', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.error(err)
  process.exit(1)
})

init()
