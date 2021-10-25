class ExchangeRate {
  constructor (pair, originalRate, feePercentage, feeAmount, rateMarkUpApplied) {
    this.pair = pair
    this.originalRate = originalRate
    this.feePercentage = feePercentage
    this.feeAmount = feeAmount
    this.rateMarkUpApplied = rateMarkUpApplied
  }
}

module.exports = ExchangeRate
