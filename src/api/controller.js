class RatesController {
    
    #ratesService

    constructor (ratesService) {
        this.#ratesService = ratesService
    }

    async getAll (request, reply) {
        try {
            const rates = await this.#ratesService.getAllRates()
            return reply.response(rates).code(200)
        } catch (error) {
            console.error(error);
            const message = 'The service is not available at this time, please try again later.'
            reply.response(message).code(500)
        }
    }
}

module.exports = RatesController
