class FixerService {
  constructor (httpService, operationDateService) {
    this.httpService = httpService
    this.operationDate = operationDateService

    this.baseUrl = 'http://data.fixer.io/api'
    this.apiKey = '824e753b9d8f1bf170e5adf80e7788e9'
  }

  async getHistoricalRates () {
    const date = this.operationDate.createDateWithFormat('YYYY-MM-DD')
    const endpoint = `${this.baseUrl}/${date}?access_key=${this.apiKey}&base=EUR&symbols=USD,ARS,BRL`

    const response = await this.httpService.get(endpoint)
    const data = response.data

    return data
  }
}

module.exports = FixerService
