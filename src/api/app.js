const Hapi = require('@hapi/hapi')
const router = require('./router')

// Configurando servidor.
const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})

// Inicializando enrutador.
router(server)

const init = async () => {
  await server.start()
  console.info('Server running on ', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.error(err)
  process.exit(1);
})

init()
