class RatesService {

    #ratesBusinessRules
    #mapperEntity

    constructor(ratesBusinessRules, mapperEntity) {
        this.#ratesBusinessRules = ratesBusinessRules
        this.#mapperEntity = mapperEntity
    }

    async getAllRates () {
        const fxRates = await this.#ratesBusinessRules.getFxRates()

        const currencyRates = this.#ratesBusinessRules.quoteCurrencyPairs(fxRates)
        const exchangeRates = currencyRates.map(currencyRate => this.#mapperEntity.buildExchangeRateEntity(currencyRate.pair, currencyRate.amount)) 

        // const fxRatesWithMarkUpApplied = this.#ratesBusinessRules.addMarkUp(fxRates)

        return exchangeRates
    }
}

module.exports = RatesService
