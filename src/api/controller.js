class RatesController {
  constructor (ratesService) {
    this.ratesService = ratesService
  }

  async getAll (request, reply) {
    const rates = await this.ratesService.getAllRates()
    return reply.response(rates).code(200)
  }
}

module.exports = RatesController
