const pairs = require('./pairs/pairs')

class RatesBusinessRules {
  constructor (fxService, quote, pricing) {
    this.fxService = fxService
    this.quote = quote
    this.pricing = pricing
  }

  async getFxRates () {
    const fxRates = this.fxService.getHistoricalRates()
    return fxRates
  }

  quoteCurrencyPairs (fxRates) {
    const currencyPairs = []

    for (const pair in pairs) {
      const courrency = pairs[pair]
      courrency.pair = pair

      if (courrency.base === fxRates.base) {
        courrency.amount = fxRates.rates[courrency.quote]
        currencyPairs.push(courrency)
        continue
      }

      const baseCurrencyValue = fxRates.rates[courrency.base]
      const quoteCurrencyValue = fxRates.rates[courrency.quote]

      const currencyQuote = this.quote.calculateQuoteCurrencies(baseCurrencyValue, quoteCurrencyValue)
      courrency.amount = currencyQuote

      currencyPairs.push(courrency)
    }

    return currencyPairs
  }

  addMarkUp (pair) {
    const markUpAmount = this.pricing.markUp(pair.markUp, pair.amount)
    const markUpApplied = this.pricing.applyNegatively(pair.amount, markUpAmount)

    pair.feeAmount = markUpAmount
    pair.rateMarkUpApplied = markUpApplied

    return pair
  }
}

module.exports = RatesBusinessRules
