const Pricing = require('../../../../domain/business/pricing/pricing')

describe('Test suite Pricing class', () => {
  describe('Test suite markUp method', () => {
    it('It should return the markup amount of the USDARS currency pair.', () => {
      // Arrange - Preparación
      const data = {
        pair: 'USDARS',
        base: 'USD',
        quote: 'ARS',
        amount: 100,
        markUp: 50

      }

      // Act - Actuación
      const pricing = new Pricing()
      const markUpAmount = pricing.markUp(data.markUp, data.amount)

      // Assert - Aserción
      expect(markUpAmount).toEqual(50)
    })
  })

  describe('Test suite applyNegatively method', () => {
    it('It should return the amount of the markup negatively applied to the USDARS currency pair.', () => {
      // Arrange - Preparación
      const data = {
        pair: 'USDARS',
        base: 'USD',
        quote: 'ARS',
        amount: 180,
        markUp: 5

      }

      // Act - Actuación
      const pricing = new Pricing()
      const markUpAmount = pricing.markUp(data.markUp, data.amount)
      const markUpApplied = pricing.applyNegatively(data.amount, markUpAmount)

      // Assert - Aserción
      expect(markUpApplied).toEqual(171)
    })
  })

  describe('Test suite applyPositively method', () => {
    it('It should return the amount of the markup positively applied to the USDARS currency pair.', () => {
      // Arrange - Preparación
      const data = {
        pair: 'USDARS',
        base: 'USD',
        quote: 'ARS',
        amount: 180,
        markUp: 5

      }

      // Act - Actuación
      const pricing = new Pricing()
      const markUpAmount = pricing.markUp(data.markUp, data.amount)
      const markUpApplied = pricing.applyPositively(data.amount, markUpAmount)

      // Assert - Aserción
      expect(markUpApplied).toEqual(189)
    })
  })
})
