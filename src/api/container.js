// Awilix
const { asClass, asValue, createContainer, InjectionMode } = require('awilix')

// Create container
const container = createContainer({ injectionMode: InjectionMode.CLASSIC })

// Controllers
const RatesController = require('./controller')

// Domain
const RatesService = require('../domain/service/rates.service')
const RatesBusinessRules = require('../domain/business/rates.business')
const Quote = require('../domain/business/quote/quote')
const Pricing = require('../domain/business/pricing/pricing')
const MapperEntity = require('../domain/entities/mapper')

// Infrastructure
const axios = require('axios').default
const moment = require('moment')
const HttpService = require('../infraestructure/httpService/http')
const OperationDate = require('../infraestructure/operationDateService/operationDate')
const FixerService = require('../infraestructure/fixerService/fixer')

// Bindings Controllers
container.register({
  ratesController: asClass(RatesController).scoped().singleton()
})

// Bindings Domain
container.register({
  ratesService: asClass(RatesService).scoped().singleton(),
  ratesBusinessRules: asClass(RatesBusinessRules).scoped().singleton(),
  fxService: asClass(FixerService).scoped().singleton(),
  quote: asClass(Quote).scoped().singleton(),
  pricing: asClass(Pricing).scoped().singleton(),
  mapperEntity: asClass(MapperEntity).scoped().singleton()
})

// Bindings Infraestructure
container.register({
  httpModule: asValue(axios),
  httpService: asClass(HttpService).scoped().singleton(),
  dateModule: asValue(moment),
  operationDateService: asClass(OperationDate).scoped().singleton()
})

module.exports = container
