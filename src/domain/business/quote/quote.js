class Quote {

    /** It allows to calculate the value of a currency from the quotation with respect to a third in common.
     * Example: EURUSD = 1.164682 | EURARS = 115.605328 | USDARS = EURUSD / EURARS.
     * @param {number} baseCurrencyConversionValue - It is the first currency to appear in a currency pair.
     * @param {number} quoteCurrencyConversionValue - It is the second currency to appear in a currency pair.
     * @returns {number}
    */
     calculateQuoteCurrencies (baseCurrencyConversionValue, quoteCurrencyConversionValue) {
        const currencyQuote = quoteCurrencyConversionValue / baseCurrencyConversionValue
        return currencyQuote
    }


}

module.exports = Quote
