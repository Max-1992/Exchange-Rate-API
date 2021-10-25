const pairs = require('./pairs/pairs')

class RatesBusinessRules {

    #fxService
    #quote

    constructor(fxService, quote) {
        this.#fxService = fxService
        this.#quote = quote
    }

    async getFxRates () {
        const fxRates = this.#fxService.getHistoricalRates()
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
                continue;
            }

            const baseCurrencyValue = fxRates.rates[courrency.base]
            const quoteCurrencyValue =  fxRates.rates[courrency.quote]

            const currencyQuote = this.#quote.calculateQuoteCurrencies(baseCurrencyValue, quoteCurrencyValue)
            
            courrency.amount = currencyQuote

            currencyPairs.push(courrency)
        }

        return currencyPairs
    }

    addMarkUp () {

    }
}

module.exports = RatesBusinessRules
