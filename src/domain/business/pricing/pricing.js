class Pricing {
  markUp (markUpPercentage, basePrice) {
    const salePrice = basePrice * (markUpPercentage / 100) + basePrice
    const markUpAmount = salePrice - basePrice
    return markUpAmount
  }

  applyNegatively (basePrice, markUpAmount) {
    const markUpApplied = basePrice - markUpAmount
    return markUpApplied
  }

  applyPositively (basePrice, markUpAmount) {
    const markUpApplied = basePrice + markUpAmount
    return markUpApplied
  }
}

module.exports = Pricing
