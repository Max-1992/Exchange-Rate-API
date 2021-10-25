const Quote = require('../../../../domain/business/quote/quote')

describe('Test suite Quote class', () => {
  describe('Test suite calculateQuoteCurrencies method', () => {
    it('It should return the exchange rate for the USDARS currency pair based on its relationship to another currency.', () => {
      // Arrange - Preparación
      const data = {
        success: true,
        timestamp: 1635105005,
        historical: true,
        base: 'EUR',
        date: '2021-10-24',
        rates: {
          USD: 1.164682,
          ARS: 115.605328,
          BRL: 6.581056
        }
      }

      // Act - Actuación
      const baseCurrencyConversionValue = data.rates.USD
      const quoteCurrencyConversionValue = data.rates.ARS

      const quote = new Quote(baseCurrencyConversionValue, quoteCurrencyConversionValue)
      const USDARS = quote.calculateQuoteCurrencies(baseCurrencyConversionValue, quoteCurrencyConversionValue)

      // Assert - Aserción
      expect(USDARS).toEqual(99.25913511155835)
    })

    it('It should return the exchange rate for the USDBRL currency pair based on its relationship to another currency.', () => {
      // Arrange - Preparación
      const data = {
        success: true,
        timestamp: 1635105005,
        historical: true,
        base: 'EUR',
        date: '2021-10-24',
        rates: {
          USD: 1.164682,
          ARS: 115.605328,
          BRL: 6.581056
        }
      }

      const baseCurrencyConversionValue = data.rates.USD
      const quoteCurrencyConversionValue = data.rates.BRL

      // Act - Actuación
      const quote = new Quote(baseCurrencyConversionValue, quoteCurrencyConversionValue)
      const USDBRL = quote.calculateQuoteCurrencies(baseCurrencyConversionValue, quoteCurrencyConversionValue)

      // Assert - Aserción
      expect(USDBRL).toEqual(5.65051748030793)
    })

    it('It should return the exchange rate for the BRLARS currency pair based on its relationship to another currency.', () => {
      // Arrange - Preparación
      const data = {
        success: true,
        timestamp: 1635105005,
        historical: true,
        base: 'EUR',
        date: '2021-10-24',
        rates: {
          USD: 1.164682,
          ARS: 115.605328,
          BRL: 6.581056
        }
      }

      const baseCurrencyConversionValue = data.rates.BRL
      const quoteCurrencyConversionValue = data.rates.ARS

      // Act - Actuación
      const quote = new Quote(baseCurrencyConversionValue, quoteCurrencyConversionValue)
      const BRLARS = quote.calculateQuoteCurrencies(baseCurrencyConversionValue, quoteCurrencyConversionValue)

      // Assert - Aserción
      expect(BRLARS).toEqual(17.566379620535063)
    })
  })
})
