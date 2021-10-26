// Container
const Joi = require('joi')
const container = require('./container')

// Controllers
const restController = container.resolve('ratesController')

// Router module
const router = (server) => {
  server.route({
    method: 'GET',
    path: '/v1/rates',
    options: {
      handler: restController.getAll.bind(restController),
      description: 'Get rates for exchange rates.',
      notes: 'The service returns a list of exchange rates with their rates.',
      tags: ['api', 'v1'],
      response: {
        status: {
          200: Joi.array().items(Joi.object({
            pair: Joi.string().description('Represents currency pairs.'),
            originalRate: Joi.number().description('Represents the original exchange rate.'),
            feePercentage: Joi.number().description('Represents the rate in percentage.'),
            feeAmount: Joi.number().description('Represents the rate in amount.'),
            rateMarkUpApplied: Joi.number().description('Represents the price with the tariff applied negatively.')
          })),
          500: Joi.object({
            statusCode: Joi.number(),
            error: Joi.string(),
            message: Joi.string()
          })
        }
      }
    }
  })
}

module.exports = router
