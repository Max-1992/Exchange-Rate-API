class HttpService {
  constructor (httpModule) {
    this.httpModule = httpModule
  }

  async get (url) {
    try {
      const response = await this.httpModule.get(url)
      return response
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = HttpService
