const ExchangeRate = require('./exchangeRate')

class MapperEntity {
  buildExchangeRateEntity (pair, originalRate, feePercentage, feeAmount, rateMarkUpApplied) {
    const exchangeRate = new ExchangeRate(pair, originalRate, feePercentage, feeAmount, rateMarkUpApplied)
    return exchangeRate
  }
}

module.exports = MapperEntity
