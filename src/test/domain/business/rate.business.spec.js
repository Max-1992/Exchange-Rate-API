const Quote = require('../../../domain/business/quote/quote')
const RatesBusinessRules = require('../../../domain/business/rates.business')

describe('Test suite RatesBusinessRules class', () => {
  describe('Test suite quoteCurrencyPairs class', () => {
    it('Deberia retornar un array con los pares de monedas calculados.', () => {
      const fxService = {}
      const quote = new Quote()

      const data = {
        success: true,
        timestamp: 1635108484,
        historical: true,
        base: 'EUR',
        date: '2021-10-24',
        rates: {
          USD: 1.164124,
          ARS: 115.599616,
          BRL: 6.577905
        }
      }

      const rateBusinessRules = new RatesBusinessRules(fxService, quote)
      const pairs = rateBusinessRules.quoteCurrencyPairs(data)

      expect(pairs).toEqual([
        {
          pair: 'EURUSD',
          base: 'EUR',
          quote: 'USD',
          amount: 1.164124,
          markUp: 2
        },
        {
          pair: 'EURARS',
          base: 'EUR',
          quote: 'ARS',
          amount: 115.599616,
          markUp: 7
        },
        {
          pair: 'EURBRL',
          base: 'EUR',
          quote: 'BRL',
          amount: 6.577905,
          markUp: 5
        },
        {
          pair: 'USDARS',
          base: 'USD',
          quote: 'ARS',
          amount: 99.301806336782,
          markUp: 8
        },
        {
          pair: 'USDBRL',
          base: 'USD',
          quote: 'BRL',
          amount: 5.650519188677495,
          markUp: 5
        },
        {
          pair: 'BRLARS',
          base: 'BRL',
          quote: 'ARS',
          amount: 17.573926044842544,
          markUp: 6
        }
      ])
    })
  })
})
