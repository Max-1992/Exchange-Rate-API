class RatesService {
  constructor (ratesBusinessRules, mapperEntity) {
    this.ratesBusinessRules = ratesBusinessRules
    this.mapperEntity = mapperEntity
  }

  async getAllRates () {
    // Get exchange rate rates.
    const fxRates = await this.ratesBusinessRules.getFxRates()

    // Quote the exchange rate of currency pairs.
    const currencyPairs = this.ratesBusinessRules.quoteCurrencyPairs(fxRates)

    // Apply a fee to the exchange rate of the currency pairs.
    const currencyRateWithMarkUpApplied = currencyPairs.map(pair => this.ratesBusinessRules.addMarkUp(pair))

    // Create a list of domain entities of type ExchangeRate.
    const exchangeRates = currencyRateWithMarkUpApplied.map(currencyRate => this.mapperEntity.buildExchangeRateEntity(currencyRate.pair, currencyRate.amount, currencyRate.markUp, currencyRate.feeAmount, currencyRate.rateMarkUpApplied))

    return exchangeRates
  }
}

module.exports = RatesService
