class OperationDate {
  constructor (dateModule) {
    this.dateModule = dateModule
  }

  createDateWithFormat (format) {
    const date = this.dateModule().format(format)
    return date
  }
}

module.exports = OperationDate
