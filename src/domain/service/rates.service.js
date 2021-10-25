class RatesService {
  constructor (ratesBusinessRules, mapperEntity) {
    this.ratesBusinessRules = ratesBusinessRules
    this.mapperEntity = mapperEntity
  }

  async getAllRates () {
    const fxRates = await this.ratesBusinessRules.getFxRates()
    const currencyRates = this.ratesBusinessRules.quoteCurrencyPairs(fxRates)

    const fxRatesWithMarkUpApplied = currencyRates.map(pair => this.ratesBusinessRules.addMarkUp(pair))

    const exchangeRates = fxRatesWithMarkUpApplied.map(currencyRate => this.mapperEntity.buildExchangeRateEntity(currencyRate.pair, currencyRate.amount, currencyRate.markUp, currencyRate.feeAmount, currencyRate.rateMarkUpApplied))

    return exchangeRates
  }
}

module.exports = RatesService
